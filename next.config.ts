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
    ];
  },
};

export default nextConfig;
