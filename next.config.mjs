/** @type {import('next').NextConfig} */
import NextFederationPlugin from '@module-federation/nextjs-mf'
import configMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'

const isGithubActions = process.env.GITHUB_ACTIONS || false
const repo = isGithubActions
  ? `/${process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')}`
  : ''

const withMDX = configMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  },
})

const nextConfig = {
  assetPrefix: repo,
  basePath: repo,
  env: {
    basePath: repo,
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  output: 'export',
  images: { unoptimized: true },
  webpack(config, { isServer }) {
    if (!isServer)
      config.plugins.push(
        new NextFederationPlugin({
          name: 'mario',
          filename: 'index.js',
          remotes: {
            bootstrap:
              'luigi@https://tuphan-dn.github.io/mf.tuphan.dev/index.js',
          },
        }),
      )
    return config
  },
}

export default withMDX(nextConfig)
