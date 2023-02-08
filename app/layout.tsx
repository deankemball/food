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
      <body className="h-fit w-screen flex flex-col font-ibm border-x-[2px] border-light bg-dark">
        <TitleBar showHeader={showHeader} setShowHeader={setShowHeader} />
        {children}
        <NavBar />
      </body>
    </html>
  );
}
