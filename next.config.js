/** @type {import('next').NextConfig} */

const ENV = process.env["ENV"] || 'local';

const nextConfig = {
  reactStrictMode: false,
  publicRuntimeConfig: {
    ENV,
  },
  env: {
    ENV,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
