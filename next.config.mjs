/** @type {import('next').NextConfig} */
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
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  output: 'export',
  images: { unoptimized: true },
}

export default withMDX(nextConfig)
