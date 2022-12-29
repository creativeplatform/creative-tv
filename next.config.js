
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
      '/all-assets': {page: '/All'},
      '/mint-nft-video': {page: '/Mint'},
      '/play-video': {page: '/PlayVideo'},
      '/swiper-controls': {page: '/Swiper'},
      '/upload-video-assets': {page: '/Upload'},
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