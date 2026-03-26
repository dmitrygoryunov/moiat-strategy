import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Server-side environment variables only — OPENAI_API_KEY must never reach the browser
  serverExternalPackages: [],
};

export default nextConfig;
