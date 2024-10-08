import "tailwindcss/tailwind.css";

import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "toki",
  description: "Toki Develper Home Page",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="dark">
      <body className="bg-indigo-1 text-indigo-12">
        {/* <header>header</header> */}
        {children}
        <Analytics />
      </body>
    </html>
  );
}
