import { Injectable } from '@/interceptor'
import { NextResponse } from 'next/server'
import { resolve } from 'path'
import { scan } from 'dree'
import { trielize } from './tree'

class Route {
  @Injectable()
  static async GET() {
    const root = resolve(process.cwd(), './src/app/blog')
    const tree = trielize(
      '',
      scan(root, {
        size: false,
        sizeInBytes: false,
        hash: false,
        matches: '**/page.{md,mdx}',
        extensions: ['md', 'mdx'],
      }),
    )

    return NextResponse.json(tree)
  }
}

export const { GET } = Route
