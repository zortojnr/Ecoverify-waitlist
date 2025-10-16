import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Ensure Turbopack uses the project directory as root
    root: __dirname,
  },
};

export default nextConfig;
