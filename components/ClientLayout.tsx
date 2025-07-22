"use client";

import React from "react";
import { Navbar } from "@/components/navbar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
