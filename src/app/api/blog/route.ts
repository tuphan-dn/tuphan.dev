import { Body, Injectable } from '@/interceptor'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import Fuse from 'fuse.js'
import { tree } from '@/db'

const PostDto = z.object({ q: z.string() })

function flattenTree({
  children = [],
  ...node
}: Tree): Array<Omit<Tree, 'children'>> {
  return [node, ...children.map((child) => flattenTree(child)).flat()]
}

class Route {
  @Injectable()
  static async GET() {
    return NextResponse.json(tree)
  }

  @Injectable()
  static async POST(
    _req: NextRequest,
    @Body(PostDto) { q }: z.infer<typeof PostDto>,
  ) {
    if (!q || q.length < 3) throw new Error('Bad Reuqest')
    const nodes = flattenTree(tree)
    const index = new Fuse(nodes, {
      ignoreLocation: true,
      keys: ['title', 'description', 'content'],
    })
    const re = index.search(q).map(({ item }) => item)
    return NextResponse.json(re)
  }
}

export const { GET, POST } = Route
