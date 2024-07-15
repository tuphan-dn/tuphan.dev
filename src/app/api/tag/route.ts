import { tree } from '@/db'
import { Injectable } from '@/interceptor'
import { NextResponse } from 'next/server'

function flattenTree({
  children = [],
  ...node
}: Tree): Array<Omit<Tree, 'children'>> {
  return [node, ...children.map((child) => flattenTree(child)).flat()]
}

class Route {
  @Injectable()
  static async GET() {
    const nodes = flattenTree(tree)
    const raw = nodes.map(({ tags }) => tags).flat()
    const tags = Object.entries(
      Object.fromEntries(raw.map((tag) => [tag, ''])),
    ).map(([e]) => e)
    return NextResponse.json(tags)
  }
}

export const { GET } = Route
