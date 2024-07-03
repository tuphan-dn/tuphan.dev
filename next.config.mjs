import createMDX from '@next/mdx'
import { visit } from 'unist-util-visit'
import { log } from 'isomorphic-git'
import fs from 'fs'
import { relative } from 'path'

import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkToc from 'remark-toc'
import remarkSlug from 'remark-slug'
import rehypeKatex from 'rehype-katex'
import { rehypeExtendedHighlight } from '@gears-bot/rehype'

export const rehypeContributors = () => async (tree, file) => {
  const {
    history: [filepath],
  } = file
  const commits = await log({
    fs,
    dir: import.meta.dirname,
    filepath: relative(import.meta.dirname, filepath),
    force: true,
    follow: true,
    depth: 10,
  })
  console.log(commits)
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkMath, remarkToc, remarkSlug],
    rehypePlugins: [
      [rehypeExtendedHighlight, { tabsName: 'Tabs', tabName: 'Tab' }],
      rehypeKatex,
      rehypeContributors,
    ],
  },
})

export default withMDX(nextConfig)
