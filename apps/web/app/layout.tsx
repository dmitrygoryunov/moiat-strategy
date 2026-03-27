import type { Metadata } from "next";
import "./globals.css";
import { TopNav } from "@/components/layout/TopNav";

export const metadata: Metadata = {
  title: "Strategy Intelligence",
  description:
    "Evidence-led decision support prototype for industrial strategy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {/* Prototype context banner */}
        <div className="bg-brand-gold/10 border-b border-brand-gold/20 px-6 py-2 text-center">
          <p className="text-[11px] font-medium text-brand-gold tracking-wide">
            Envisioned experience approach and prototype over unconfirmed dataset for the future of strategy intelligence
          </p>
        </div>
        <TopNav />
        <main>
          <div className="max-w-[1400px] mx-auto px-8 py-8">{children}</div>
        </main>
      </body>
    </html>
  );
}
