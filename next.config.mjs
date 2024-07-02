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
    visit(tree, (node) => {
      if (node?.type === 'element' && node?.tagName === 'pre') {
        const [child] = node.children
        if (child.tagName === 'code') {
          const attr = parseAttrs(child.data?.meta)
          node.properties['data-content'] = child.children?.[0].value
          node.properties['data-filename'] = attr['filename']
          node.properties['data-group'] = attr['group']
          node.properties['data-label'] = attr['label']
        }
      }
    })
    rehypeHighlight(options)(tree, file)
  }

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkMath, remarkToc, remarkSlug],
    rehypePlugins: [rehypeExtendedHighlight, rehypeKatex],
  },
})

export default withMDX(nextConfig)
