import { Injectable } from '@/interceptor'
import { NextResponse } from 'next/server'
import { scan } from 'dree'
import { resolve } from 'path'
import { readFileSync } from 'fs'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { select } from 'unist-util-select'
import { toString } from 'mdast-util-to-string'
import { trielize } from './tree'

class Route {
  @Injectable()
  static async GET() {
    const root = resolve(process.cwd(), './src/app/blog')
    const dree = scan<ExtendedDree>(
      root,
      {
        size: false,
        sizeInBytes: false,
        hash: false,
        matches: '**/page.{md,mdx}',
        extensions: ['md', 'mdx'],
        stat: true,
      },
      async (node) => {
        const file = readFileSync(node.path)
        const md = fromMarkdown(file)
        const heading = select('heading > text', md) || {}
        const paragraph = select('paragraph', md) || {}
        node.title = toString(heading)
        node.description = toString(paragraph)
      },
    )
    const tree = trielize('', dree)

    return NextResponse.json(tree)
  }
}

export const { GET } = Route
