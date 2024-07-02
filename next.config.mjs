import createMDX from '@next/mdx'
import { visit } from 'unist-util-visit'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeMdxCodeProps from 'rehype-mdx-code-props'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

const preprocess = () => (/** @type {import('hast').Root} */ tree) => {
  visit(tree, (node) => {
    if (node?.type === 'element' && node?.tagName === 'pre') {
      const [codeEl] = node.children
      if (codeEl.tagName !== 'code') return
      node.raw = codeEl.children?.[0].value
    }
  })
}

const postprocess = () => (/** @type {import('hast').Root} */ tree) => {
  visit(tree, (node) => {
    if (node?.type === 'element' && node?.tagName === 'pre') {
      node.properties['defaultValue'] = node.raw
    }
  })
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      preprocess,
      rehypeHighlight,
      rehypeMdxCodeProps,
      rehypeKatex,
      postprocess,
    ],
  },
})

export default withMDX(nextConfig)
