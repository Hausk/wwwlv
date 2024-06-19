/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        domains: ['images.unsplash.com', 'tailwindui.com', 'source.unsplash.com', 'res.cloudinary.com', 'picsum.photos'],
    },
};

export default nextConfig;
