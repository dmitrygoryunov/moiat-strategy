import type { Metadata } from "next";
import "./globals.css";
import { TopNav } from "@/components/layout/TopNav";

export const metadata: Metadata = {
  title: "HORIZONS · Strategy Intelligence",
  description:
    "Working prototype by EPAM — continuous, adaptive intelligence for industrial strategy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {/* HORIZONS prototype context banner */}
        <div className="bg-[#F9F7ED] border-b border-[#E6D7A2] px-6 py-2 text-center">
          <p className="text-[11px] font-medium text-[#7C5E24] tracking-wide">
            <span className="font-bold">HORIZONS</span> — working prototype by EPAM · Directional data over FY 2024 indicators · Final scope and experience to be shaped collaboratively with the Ministry
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
