"use client";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [showHeader, setShowHeader] = useState(true);
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="py-4 h-screen w-screen gap-4 flex flex-col">
        <div
          className={clsx(
            showHeader ? "-translate-x-[12.5vw]" : "-translate-x-[100vw]",
            "h-12 shrink-0 w-[125vw] flex items-center justify-between transition-transform duration-300 bg-red-300"
          )}
        >
          <p className="w-[12.5vw] min-w-[12.5w] flex text-center select-none">
            {"<"}
          </p>
          <h1 className="text-2xl">food blog</h1>
          <Link
            className="w-[12.5vw] min-w-[12.5w] flex text-center"
            href={"/blog"}
          >
            {"<"}
          </Link>
        </div>
        {children}
        <NavBar />
      </body>
    </html>
  );
}
