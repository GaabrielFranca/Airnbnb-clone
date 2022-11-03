/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

// module.exports = {
//   images: {
//     domains: ["https://links.papareact.com"],
//   },
// };

module.exports = nextConfig;
