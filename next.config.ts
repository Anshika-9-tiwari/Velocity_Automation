/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Export static HTML (needed for cPanel)

  eslint: {
    ignoreDuringBuilds: true,
  },
  
  images: {
    unoptimized: true,
  },

  // ✅ Helps avoid 404s by creating folder-based pages
  trailingSlash: true,
};

module.exports = nextConfig;
