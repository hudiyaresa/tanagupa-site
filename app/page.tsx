"use client";

// components
import ClientLayout from "@/components/ClientLayout";
import { Footer } from "@/components/footer";

// sections
import Hero from "./hero";
import Content from "./content";
import Comments from "./comments";

export default function Campaign() {
  return (
    <ClientLayout>
      <Hero />
      <Content />
      <Comments />
      <Footer />
    </ClientLayout>
  );
}
