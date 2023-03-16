/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
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
