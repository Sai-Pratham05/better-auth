import Link  from "next/link";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
    <div className="flex flex-row justify-end p-4 gap-4 border-b">
        <Link href="/">Home</Link>
    </div>
      {children}
    </>
  );
}
