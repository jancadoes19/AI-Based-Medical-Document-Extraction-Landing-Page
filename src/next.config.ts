import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
    {
      // Proxy all /api/* requests to the Flask backend
      source: '/api/:path*',
      destination: `${process.env.BACKEND_URL ?? 'http://localhost:8000'}/api/:path*`
    }];

  },
  // Allow images from any origin (for document previews)
  images: {
    remotePatterns: [
    {
      protocol: 'https',
      hostname: '**'
    }]

  }
};

export default nextConfig;