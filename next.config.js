
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
      '/all-assets': {page: '/all-assets'},
      '/mint-nft-video': {page: '/mint-nft-video'},
      '/play-video': {page: '/play-video'},
      '/swiper-controls': {page: '/swiper-controls'},
      '/upload-video-assets': {page: '/upload-video-assets'},
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