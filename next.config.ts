import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's2.coinmarketcap.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tascen.site',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
