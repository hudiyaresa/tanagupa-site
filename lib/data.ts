export type Aduan = {
  id: number;
  nama: string;
  email: string;
  isi: string;
  tanggal: string;
  status: string;
};

export let aduanList: Aduan[] = [
  {
    id: 1,
    nama: "Mimi Peri",
    email: "mimi@peri.com",
    isi: "Buayanya gigit jemuran mimi.",
    tanggal: "2025-07-17",
    status: "terkirim",
  },
];
