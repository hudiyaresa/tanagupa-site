"use client";

import React from "react";
import ClientLayout from "@/components/ClientLayout";
import { Footer } from "@/components/footer";

export default function AboutUsPage() {
  return (
    <ClientLayout>
      <div className="max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Visi dan Misi</h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Visi Kemenhut</h2>
          <p className="text-lg leading-relaxed">
            Entitas tapak yang mengalirkan manfaat ekologi, ekonomi, sosial dan
            berkelanjutan mendukung pembangunan ekonomi hijau
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Misi Kemenhut</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>
              Memelihara keanekaragaman dan ketahanan ekosistem hutan untuk
              pembangunan yang berkelanjutan
            </li>
            <li>
              Menumbuhkan produksi barang dan jasa untuk menopang pembangunan
              wilayah, ketahanan pangan, energi dan konservasi sumberdaya air
            </li>
            <li>
              Menggerakkan entitas tapak hutan sebagai pendulum peradaban
              masyarakat dan peningkatan jaringan pengaman sosial
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </ClientLayout>
  );
}
