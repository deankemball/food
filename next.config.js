/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // rewrites: {
  //   async rewrites() {
  //     return [
  //       {
  //         source: "/:slug*.md", // Old url with .html
  //         destination: "/:slug*", // Redirect without .html
  //       },
  //     ];
  //   },
  // },
};

module.exports = nextConfig;
