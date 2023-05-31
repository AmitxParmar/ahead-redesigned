/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fonts.cdnfonts.com',
            },
        ],
    },
}

module.exports = nextConfig
