import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        pathname: "/de3ocpvv8/image/**",
      },
    ],
  },
};

export default nextConfig;
