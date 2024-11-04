import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import React from "react";


export const metadata: Metadata = {
  title: "My pinterest",
  description: "Pinterest clone by Nurkhon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
