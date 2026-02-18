import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tascen.site',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
