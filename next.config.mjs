import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    )
    fileLoaderRule.exclude = /\.svg$/i

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: /url/ }, // exclude if *.svg?url
      use: [
        {
          loader: '@svgr/webpack',
          options: { typescript: true, icon: true },
        },
        'url-loader',
      ],
    })

    return config
  },
}

export default withNextIntl(nextConfig)
