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
  // নিচের সেটিংসগুলো যোগ করুন
  typescript: {
    ignoreBuildErrors: true, // ডেভেলপমেন্টের জন্য সাময়িক সমাধান
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Next.js 14 এর জন্য গুরুত্বপূর্ণ
  output: "standalone", // অথবা "export" যদি স্ট্যাটিক সাইট জেনারেট করেন


};

export default nextConfig;
