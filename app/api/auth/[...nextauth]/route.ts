import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@/app/generated/prisma";
import bcrypt from "bcrypt";
import { z } from "zod";

const prisma = new PrismaClient();

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      authorization: {
        params: {
          prompt: "select_account",
        },
      },
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const schema = z.object({
            email: z.string().email(),
            password: z.string().min(6),
          });

          const { email, password } = schema.parse(credentials);

          const user = await prisma.users.findUnique({ where: { email } });

          if (!user) throw new Error("No user found");
          if (!user.password) throw new Error("No password set for user");
          if (!user.verifiedAt) throw new Error("User not verified");

          const valid = await bcrypt.compare(password, user.password);
          if (!valid) throw new Error("Invalid password");

          return {
            id: user.id,
            email: user.email,
            name: user.name,
          };
        } catch (err) {
          console.error("Authorize Error:", err);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        if (!user.email) throw new Error("No email from Google account");

        const existingUser = await prisma.users.findUnique({
          where: { email: user.email },
        });

        if (!existingUser) {
          await prisma.users.create({
            data: {
              name: user.name || "",
              email: user.email,
              verifiedAt: new Date(),
              password: "", // set default empty password for social logins
            },
          });
        } else if (!existingUser.verifiedAt) {
          await prisma.users.update({
            where: { email: user.email },
            data: { verifiedAt: new Date() },
          });
        }
      }

      return true;
    },

    async session({ session, token }) {
      if (token?.sub && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },

  pages: {
    signIn: "/signin",
  },

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export const GET = handler
export const POST = handler

