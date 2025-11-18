import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cloud.sysarmy.galicia.dev',
      },
    ],
  },
};

export default nextConfig;
