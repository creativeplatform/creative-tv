
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  exportPathMap: async function (
    defaultpathMap, 
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/All': {page: '/all-assets'},
      '/Mint': {page: '/mint-nft-video'},
      '/PlayVideo': {page: '/play-video'},
      '/Swiper': {page: '/swiper-controls'},
      '/Upload': {page: '/upload-video-assets'},
    }
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
}

module.exports = nextConfig