/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  reactStrictMode: true,
  // Optimization: Compress images and use modern formats
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
  poweredByHeader: false,
  // Optimization: Production source maps can be heavy, usually better off
  productionBrowserSourceMaps: false,
};

export default nextConfig;
