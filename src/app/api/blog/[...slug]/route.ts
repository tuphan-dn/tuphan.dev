import { Injectable, Params } from '@/interceptor'
import { type NextRequest, NextResponse } from 'next/server'
import { resolve } from 'path'
import { scan } from 'dree'
import { type Tree, trielize } from '../tree'
import { z } from 'zod'

export async function generateStaticParams() {
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
  function trace({ route, children }: Tree): Array<{ slug: string[] }> {
    const slug = route.split('/').filter((e) => !!e && e !== 'blog')
    if (!slug.length) return children.map((child) => trace(child)).flat()
    return [{ slug }, ...children.map((child) => trace(child)).flat()]
  }
  return trace(tree)
}

const GetDto = z.object({ slug: z.array(z.string()).default([]) })

class Route {
  @Injectable()
  static async GET(
    _req: NextRequest,
    @Params(GetDto) { slug }: z.infer<typeof GetDto>,
  ) {
    const route = ['blog', ...slug]
    return NextResponse.json(route)
  }
}

export const { GET } = Route
