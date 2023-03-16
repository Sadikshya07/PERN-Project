/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["127.0.0.1"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
      {
        protocol: "https",
        hostname: "i.natgeofe.com",
      },
      {
        protocol: "https",
        hostname: "deerwalk.edu.np",
      },
    ],
  },
};

module.exports = nextConfig;
