import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "i.postimg.cc",
      "images.unsplash.com",
      "upload.wikimedia.org",
      "source.unsplash.com",
    ],
  },
};

export default nextConfig;
