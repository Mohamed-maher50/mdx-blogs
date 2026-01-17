/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  transpilePackages: ["next-mdx-remote"],

  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
  },
};

// Merge MDX config with Next.js config
export default nextConfig;
