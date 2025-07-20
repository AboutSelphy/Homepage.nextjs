import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./loader.js",
  },
  crossOrigin: "anonymous",
};

export default nextConfig;
