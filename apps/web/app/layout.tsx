import type { Metadata } from "next";
import "./globals.css";
import { SideNav } from "@/components/layout/SideNav";

export const metadata: Metadata = {
  title: "MoIAT Strategy Intelligence",
  description:
    "Evidence-led decision support prototype for the UAE Ministry of Industry and Advanced Technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <div className="flex min-h-screen">
          <SideNav />
          <main className="flex-1 min-w-0">
            <div className="max-w-6xl mx-auto px-8 py-8">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
