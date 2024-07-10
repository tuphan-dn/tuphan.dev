import createMDX from '@next/mdx'

import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkSlug from 'remark-slug'
import rehypeKatex from 'rehype-katex'
import rehypeMdxImportMedia from 'rehype-mdx-import-media'
import rehypeToc from '@jsdevtools/rehype-toc'
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
    remarkPlugins: [remarkGfm, remarkMath, remarkSlug],
    rehypePlugins: [
      rehypeKatex,
      [rehypeMdxImportMedia, { elementAttributeNameCase: 'html' }],
      rehypeToc,
      [rehypeExtendedHighlight, { tabsName: 'Tabs', tabName: 'Tab' }],
      [rehypeGitContributors, { compName: 'Contributors' }],
    ],
  },
})

export default withMDX(nextConfig)
