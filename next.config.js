/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.goollodging.com']
  },
  env: {
    LOGIN_URL: process.env.LOGIN_URL,
    MARKER: process.env.MARKER,
  },
}
