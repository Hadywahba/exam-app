/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'exam-app.elevate-bootcamp.cloud',
      'www.elevate-bootcamp.cloud',
      'elevate-bootcamp.cloud', // ✅ مهم جدًا
    ],
  },
};

export default nextConfig;
