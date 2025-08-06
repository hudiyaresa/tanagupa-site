
// import { PrismaClient } from '@prisma/client';
// import bcrypt from 'bcrypt';

// const prisma = new PrismaClient();

// async function main() {
//   // Hash password
//   const adminPassword = await bcrypt.hash('admin123', 10);
//   const userPassword = await bcrypt.hash('user123', 10);

//   // Admin user
//   await prisma.users.upsert({
//     where: { email: 'admin@tanagupa.com' },
//     update: {},
//     create: {
//       name: 'Admin',
//       email: 'admin@tanagupa.com',
//       password: adminPassword,
//       verifiedAt: new Date(),
//     },
//   });

//   // Regular user
//   await prisma.users.upsert({
//     where: { email: 'user@tanagupa.com' },
//     update: {},
//     create: {
//       name: 'Regular User',
//       email: 'user@tanagupa.com',
//       password: userPassword,
//       verifiedAt: new Date(),
//     },
//   });

// }

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
