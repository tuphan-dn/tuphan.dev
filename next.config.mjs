import createMDX from '@next/mdx'
import { visit } from 'unist-util-visit'
import parseAttrs from 'attributes-parser'

import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkToc from 'remark-toc'
import remarkSlug from 'remark-slug'
import rehypeHighlight from 'rehype-highlight'
import rehypeKatex from 'rehype-katex'

const rehypeExtendedHighlight =
  (
    /** @type {import('rehype-highlight').Options | null | undefined} */ options,
  ) =>
  (
    /** @type {import('hast').Root} */ tree,
    /** @type {import('vfile').VFile} */ file,
  ) => {
    visit(tree, 'element', (node) => {
      if (node.tagName !== 'pre') return
      visit(node, 'element', (child) => {
        if (child.tagName !== 'code') return
        const attr = parseAttrs(child.data?.meta)
        console.log(attr)
        node.properties['data-content'] = child.children?.[0].value
        node.properties['data-group'] = attr['group']
        node.properties['data-label'] = attr['label']
      })
    })
    rehypeHighlight(options)(tree, file)
  }

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkMath, remarkToc, remarkSlug],
    rehypePlugins: [rehypeExtendedHighlight, rehypeKatex],
  },
})

export default withMDX(nextConfig)
