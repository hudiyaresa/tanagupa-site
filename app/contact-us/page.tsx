"use client";
import React from "react";
import ClientLayout from "@/components/ClientLayout";
import { Footer } from "@/components/footer";

export default function ContactUsPage() {
  return (
    <ClientLayout>
      <div className="max-w-2xl mx-auto pt-32 pb-24 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <div className="mb-8 space-y-2">
          <p className="text-lg"><span className="font-semibold">Address:</span> Jl. Gatot Subroto No. 1, Jakarta, Indonesia</p>
          <p className="text-lg"><span className="font-semibold">Email:</span> <a href="mailto:info@kemenhut.go.id" className="text-blue-600 underline">info@kemenhut.go.id</a></p>
          <p className="text-lg"><span className="font-semibold">Phone:</span> <a href="tel:+62211234567" className="text-blue-600 underline">+62 21 1234567</a></p>
        </div>
        <form className="space-y-4 bg-white p-6 rounded-lg shadow">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input type="text" className="w-full border rounded px-3 py-2" placeholder="Your Name" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input type="email" className="w-full border rounded px-3 py-2" placeholder="Your Email" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea className="w-full border rounded px-3 py-2" placeholder="Your Message" rows={4} required />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Send Message</button>
        </form>
      </div>
      <Footer />
    </ClientLayout>
  );
}
