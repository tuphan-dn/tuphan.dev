/** @type {import('next').NextConfig} */
import configMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'

const isGithubActions = process.env.GITHUB_ACTIONS || false
const repo = (process.env.GITHUB_REPOSITORY || '').replace(/.*?\//, '')
const basePath = isGithubActions ? `/${repo}` : '/'

const withMDX = configMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  },
})

const nextConfig = {
  basePath,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  output: 'export',
  images: { unoptimized: true },
}

export default withMDX(nextConfig)
