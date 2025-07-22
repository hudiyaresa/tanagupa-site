"use client";
import { useEffect, useState } from "react";
import ClientLayout from "@/components/ClientLayout";
import { Footer } from "@/components/footer";

export type Aduan = {
  id: number;
  nama: string;
  email: string;
  isi: string;
  tanggal: string;
  status: string;
};

export default function AduanPage() {
  const [aduanList, setAduanList] = useState<Aduan[]>([]);
  const [form, setForm] = useState({ nama: "", email: "", isi: "" });

  const fetchAduan = async () => {
    const res = await fetch("/api/aduan");
    const data = await res.json();
    setAduanList(data);
  };

  useEffect(() => {
    fetchAduan();
  }, []);

  const handleSubmit = async () => {
    const res = await fetch("/api/aduan", {
      method: "POST",
      body: JSON.stringify({
        ...form,
        tanggal: new Date().toISOString().slice(0, 10),
      }),
    });
    await res.json();
    setForm({ nama: "", email: "", isi: "" });
    fetchAduan();
  };

  const handleDelete = async (id: number) => {
    await fetch("/api/aduan", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    fetchAduan();
  };

  const handleUpdateStatus = async (id: number, status: string) => {
    await fetch("/api/aduan", {
      method: "PUT",
      body: JSON.stringify({ id, status }),
    });
    fetchAduan();
  };

  return (
    <ClientLayout>
      <main className="max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Daftar Aduan</h1>
        <ul className="mb-8 space-y-4">
          {aduanList.map((aduan) => (
            <li key={aduan.id} className="border rounded-lg p-4 bg-white shadow flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <strong className="text-blue-700">{aduan.nama}</strong> - {aduan.isi} <span className="italic text-sm">({aduan.status})</span>
              </div>
              <div className="flex gap-2 mt-2 md:mt-0">
                <button className="px-3 py-1 rounded bg-yellow-400 text-white" onClick={() => handleUpdateStatus(aduan.id, "diproses")}>Proses</button>
                <button className="px-3 py-1 rounded bg-green-600 text-white" onClick={() => handleUpdateStatus(aduan.id, "selesai")}>Selesai</button>
                <button className="px-3 py-1 rounded bg-red-500 text-white" onClick={() => handleDelete(aduan.id)}>Hapus</button>
              </div>
            </li>
          ))}
        </ul>
        <hr className="my-8" />
        <h2 className="text-2xl font-semibold mb-4">Tambah Aduan</h2>
        <div className="space-y-4">
          <input
            className="w-full border rounded px-3 py-2"
            placeholder="Nama"
            value={form.nama}
            onChange={(e) => setForm({ ...form, nama: e.target.value })}
          />
          <input
            className="w-full border rounded px-3 py-2"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            className="w-full border rounded px-3 py-2"
            placeholder="Isi aduan"
            value={form.isi}
            onChange={(e) => setForm({ ...form, isi: e.target.value })}
          ></textarea>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full" onClick={handleSubmit}>Kirim</button>
        </div>
      </main>
      <Footer />
    </ClientLayout>
  );
}
