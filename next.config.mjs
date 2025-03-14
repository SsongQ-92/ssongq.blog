/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['next-mdx-remote'],
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
};

export default nextConfig;
