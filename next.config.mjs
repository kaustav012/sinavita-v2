/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["takeboost.com", "arnias.valktechnologies.tech", "sinavita-admin.flameoflames.com"], // Allow images from takeboost.com
    },
    eslint: {
        ignoreDuringBuilds: true, // Disable ESLint during builds
    },
};

export default nextConfig;
