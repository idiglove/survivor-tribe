import createMDX from "@next/mdx";
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, experimental: {
    reactRoot: true,
  },
  compiler: {
    reactRemoveProperties: true,
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    domains: ["ik.imagekit.io", "thumbnails.cbsig.net", "upload.wikimedia.org"],
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
