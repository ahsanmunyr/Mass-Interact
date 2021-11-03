
const withVideos = require('next-videos')
const withImages = require('next-images')
const securityHeaders = []
module.exports = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  devIndicators: {
    buildActivity: false
  },
  images: {
    domains: ['https://webprojectmockup.com/custom/mass_interact/public/api'],
  },
  env: {
    PUBLIC_URL: 'https://webprojectmockup.com/custom/mass_interact/public/api',
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: 'https://webprojectmockup.com/custom/mass_interact/public/api',
  },
  reactStrictMode: true,
}
module.exports =  withImages({
  webpack(config, options) {
    return config
  }
})
module.exports = withVideos()