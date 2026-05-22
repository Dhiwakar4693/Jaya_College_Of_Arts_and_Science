import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "jcas.ac.in" },
      { protocol: "https", hostname: "www.jcas.ac.in" },
    ],
  },
};

export default nextConfig;
