/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'tecnologia.vamtam.com', 
      'cedarapp.b-cdn.net'
    ],
    unoptimized: true,
  },
  output: 'export',
}

module.exports = nextConfig 