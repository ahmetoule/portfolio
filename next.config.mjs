/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/CVsnf.pdf',
        destination: '/cvSNF.pdf',
      },
      {
        source: '/cvsnf.pdf',
        destination: '/cvSNF.pdf',
      },
    ]
  },
}

export default nextConfig
