/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      // Your existing feed rewrites
      {
        source: "/rss.xml",
        destination: "/feed/rss.xml",
      },
      {
        source: "/atom.xml",
        destination: "/feed/atom.xml",
      },
      {
        source: "/feed.json",
        destination: "/feed/feed.json",
      },
      {
        source: "/rss",
        destination: "/feed/rss.xml",
      },
      {
        source: "/feed",
        destination: "/feed/rss.xml",
      },
      {
        source: "/atom",
        destination: "/feed/atom.xml",
      },
      {
        source: "/json",
        destination: "/feed/feed.json",
      },
      
      // New rewrites for Elon Musk project
      {
        source: "/projects/spend-elon-musk-money",
        destination: "https://spend-elon-musk-money-eight.vercel.app",
      },
      {
        source: "/projects/spend-elon-musk-money/:path*",
        destination: "https://spend-elon-musk-money-eight.vercel.app/:path*",
      },
    ];
  },
};

module.exports = nextConfig;