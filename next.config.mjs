/* @type {import('next').NextConfig} 
const nextConfig = {
   config options here 
};

export default nextConfig;
*/

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    allowedDevOrigins: ['http://localhost:3000'],
  },
};

export default nextConfig;
