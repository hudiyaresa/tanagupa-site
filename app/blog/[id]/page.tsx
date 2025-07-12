"use client";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import React from "react";
import { useParams } from "next/navigation";

export default function BlogPage() {
  const params = useParams();
  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">Blog Post {params.id}</h1>
        <p className="text-lg mb-4">
          This is a static blog post page for blog ID:{" "}
          <span className="font-semibold">{params.id}</span>.
        </p>
        <div className="prose">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi,
            euismod euismod nisi nisi euismod.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
