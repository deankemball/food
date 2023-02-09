"use client";
import NavBar from "@/components/NavBar";
import TitleBar from "@/components/TitleBar";

import { useState } from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showHeader, setShowHeader] = useState(false);
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="h-screen w-screen flex flex-col font-ibm bg-dark relative overscroll-none">
        <div className="fixed inset-0 z-50 border-[2px] border-light pointer-events-none rounded-2xl"></div>
        <TitleBar showHeader={showHeader} setShowHeader={setShowHeader} />
        <main className="pt-16">{children}</main>
        <NavBar />
      </body>
    </html>
  );
}
