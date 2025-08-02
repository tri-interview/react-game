/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // Ignore TypeScript errors when running JavaScript version
    ignoreBuildErrors: process.env.USE_JS === 'true',
  },
  distDir: process.env.USE_JS === 'true' ? '.next-js' : '.next',
}

module.exports = nextConfig