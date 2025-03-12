import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.html$/,
      type: "asset/source", // Allows importing HTML as a string
    });
    return config;
  },
};

export default nextConfig;
