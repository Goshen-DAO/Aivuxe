module.exports = {
  basePath: '',
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  env: {
    THIRDWEB_API_KEY: process.env.THIRDWEB_API_KEY,
    TW_SECRET_KEY: process.env.SECRET_THIRDWEB_API_KEY,
  },
};
