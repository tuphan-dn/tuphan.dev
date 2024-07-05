import createMDX from '@next/mdx'

import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkToc from 'remark-toc'
import remarkSlug from 'remark-slug'
import rehypeKatex from 'rehype-katex'
import rehypeMdxImportMedia from 'rehype-mdx-import-media'
import {
  rehypeExtendedHighlight,
  rehypeGitContributors,
} from '@gears-bot/rehype'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkMath, remarkToc, remarkSlug],
    rehypePlugins: [
      rehypeKatex,
      [rehypeMdxImportMedia, { elementAttributeNameCase: 'html' }],
      [rehypeExtendedHighlight, { tabsName: 'Tabs', tabName: 'Tab' }],
      [rehypeGitContributors, { compName: 'Contributors' }],
    ],
  },
})

export default withMDX(nextConfig)
