/** @type {import('next').NextConfig} */
import { hostname } from "os";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

// Construct __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Your Next.js config
const nextConfig = {
  // Add your Next.js config options here
  webpack: (config) => {
    // Example: add custom webpack configuration
    config.resolve.alias["@"] = join(__dirname, "src");
    return config;
  },

  // Image config
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "cdn.britannica.com"
      }
    ]
  }
};

export default nextConfig;
