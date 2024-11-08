import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import React from "react";
import Provider from "./Provider";


export const metadata: Metadata = {
  title: "My pinterest",
  description: "Pinterest clone by Nurkhon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Header/>
          {children}
      </Provider>
        </body>
    </html>
  )
}
