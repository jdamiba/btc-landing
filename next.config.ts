import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/book',
        destination: 'https://www.harpercollins.com/pages/thedayafter',
        permanent: true,
      },
      {
        source: '/products/:path*',
        destination: 'https://brian-tyler-cohen.myshopify.com/products/:path*',
        permanent: true,
      },
      {
        source: '/product/:path*',
        destination: 'https://brian-tyler-cohen.myshopify.com/products/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
