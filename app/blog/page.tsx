import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

const BLOGS = [
  { id: 1, title: "Blog Post 1", excerpt: "This is the first blog post." },
  { id: 2, title: "Blog Post 2", excerpt: "This is the second blog post." },
  { id: 3, title: "Blog Post 3", excerpt: "This is the third blog post." },
];

export default function BlogListPage() {
  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Blog</h1>
        <div className="space-y-6">
          {BLOGS.map((blog) => (
            <div key={blog.id} className="border rounded-lg p-6 bg-white shadow">
              <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
              <p className="mb-4 text-gray-700">{blog.excerpt}</p>
              <Link href={`/blog/${blog.id}`} className="text-blue-600 underline hover:text-blue-800 transition">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
