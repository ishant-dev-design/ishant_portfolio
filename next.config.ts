import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Enable source maps in production
  productionBrowserSourceMaps: true,

  webpack: (config) => {
    config.module.rules.push({
      test: /\.html$/,
      type: "asset/source", // Allows importing HTML as a string
    });
    return config;
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
