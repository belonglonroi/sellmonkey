/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  i18n: {
    locales: ["vi", "en"],
    defaultLocale: "vi",
    localeDetection: false,
  },
};

module.exports = nextConfig;
