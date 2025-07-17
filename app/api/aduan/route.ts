import { NextRequest } from "next/server";
import { aduanList } from "@/lib/data";

export async function GET() {
  return new Response(JSON.stringify(aduanList), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const newAduan = {
    id: Date.now(),
    ...body,
    status: "terkirim",
  };
  aduanList.push(newAduan);

  return new Response(JSON.stringify(newAduan), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  const { id, ...updated } = body;

  const index = aduanList.findIndex((a) => a.id === id);
  if (index === -1) {
    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
    });
  }

  aduanList[index] = { ...aduanList[index], ...updated };
  return new Response(JSON.stringify(aduanList[index]), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function DELETE(req: NextRequest) {
  const body = await req.json();
  const { id } = body;
  const index = aduanList.findIndex((a) => a.id === id);
  if (index === -1) {
    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
    });
  }

  const deleted = aduanList.splice(index, 1)[0];
  return new Response(JSON.stringify(deleted), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
