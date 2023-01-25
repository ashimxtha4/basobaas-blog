/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["basobaas.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_APP_IMAGE_DOMAIN,
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "basobaas.com",
      },
      {
        protocol: "https",
        hostname: "pocketbase.asterdio.xyz",
      },
    ],
  },
  typescript: { ignoreBuildErrors: true },
};

module.exports = nextConfig;
