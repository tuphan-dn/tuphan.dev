import { Injectable, Params } from '@/interceptor'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { tree } from '@/db'

const GetDto = z.object({ slug: z.array(z.string()).default([]) })

function trace(children: Tree[], pathnames: string[]) {
  const [pathname, ...next] = pathnames
  const node = children.find(({ route }) => route === pathname)
  if (!node) throw new Error('Invalid pathname')
  if (!next.length) return node
  return trace(node.children, next)
}

class Route {
  @Injectable()
  static async GET(
    _req: NextRequest,
    @Params(GetDto) { slug }: z.infer<typeof GetDto>,
  ) {
    const [, ...pathnames] = ['/blog', ...slug].map((e, i, a) =>
      [...a.slice(0, i), e].join('/'),
    )
    const data = trace(tree.children, pathnames)
    return NextResponse.json(data)
  }
}

export const { GET } = Route
