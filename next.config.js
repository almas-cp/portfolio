// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  // For GitHub Pages deployment at root domain
  basePath: '',
  
  // Important for static exports with images
  images: {
    unoptimized: true,
  },
  
  // Allow builds even with ESLint errors
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;