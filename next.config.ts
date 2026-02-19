import type { NextConfig } from "next";

const host = process.env.NEXT_PUBLIC_DOMAIN || "localhost";

const protocols = ["http", "https"] as const;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: protocols.map((protocol) => ({
      protocol,
      hostname: host,
      pathname: "/**",
    })),
  },
};

export default nextConfig;
