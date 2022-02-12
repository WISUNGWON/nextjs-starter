/** @type {import('next').NextConfig} */
const env = require("./env-config.js");

const nextConfig = {
  reactStrictMode: true,
  target: "serverless",
  env: {
    NEXT_PUBLIC_UNSPLASH_API_KEY: process.env.NEXT_PUBLIC_UNSPLASH_API_KEY,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
  plugins: [["transform-define", env]],
};

module.exports = nextConfig;
