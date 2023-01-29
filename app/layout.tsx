"use client";
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
  const [showHeader, setShowHeader] = useState(false);
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="py-4 h-screen w-screen gap-4 flex flex-col">
        <div className="overflow-x-clip">
          <div
            className={clsx(
              showHeader ? "translate-x-0" : "-translate-x-[80%]",
              "h-12 w-[125vw] flex items-center justify-center transition-transform duration-300 bg-red-300"
            )}
          >
            <h1
              onClick={() => setShowHeader(false)}
              className="flex flex-1 text-2xl justify-center"
            >
              food blog
            </h1>
            <button
              onClick={() => {
                setShowHeader(true);
                router.push("/");
              }}
              className="flex flex-[0.25] justify-center"
            >
              {"<"}
            </button>
          </div>
        </div>
        {children}
        <NavBar />
      </body>
    </html>
  );
}
