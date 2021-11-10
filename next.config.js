/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'images.githubusercontent.com', 'github.com']
  },
  env: {
    LOGIN_URL: process.env.LOGIN_URL,
  },
}
