/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    '*.app-preview.com',
    '*.app-preview.io',
    'app-preview.com',
    'app-preview.io',
    'localhost',
    '127.0.0.1',
  ],
};

export default nextConfig;
