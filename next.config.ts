import type { NextConfig } from "next";

const baseConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "jcas.ac.in" },
      { protocol: "https", hostname: "www.jcas.ac.in" },
    ],
  },
};

// Bundle analyzer is enabled by setting ANALYZE=true when running the build.
// Example: `ANALYZE=true npm run build`
const withBundleAnalyzer = require("@next/bundle-analyzer")({ enabled: process.env.ANALYZE === "true" });

module.exports = withBundleAnalyzer(baseConfig);
