import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'placehold.co',
        port: ''
      },
      {
        protocol: "https",
        hostname: 'images.app.goo.gl',
        port: ''
      },
      {
        protocol: "https",
        hostname: 'www.disthai.com',
        port: ''
      },
      {
        protocol: "https",
        hostname: 'upload.wikimedia.org',
        port: ''
      },
      {
        protocol: "https",
        hostname: 'kaset.today',
        port: ''
      }
    ]
  }
};

export default nextConfig;
