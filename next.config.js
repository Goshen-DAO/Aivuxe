module.exports = {
  basePath: '',
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  env: {
    THIRDWEB_API_KEY: process.env.THIRDWEB_API_KEY,
    SECRET_THIRDWEB_API_KEY: process.env.SECRET_THIRDWEB_API_KEY,
    NEXT_PUBLIC_SANITY_USER_ADDER_TOKEN: process.env.NEXT_PUBLIC_SANITY_USER_ADDER_TOKEN,
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
  },
};
