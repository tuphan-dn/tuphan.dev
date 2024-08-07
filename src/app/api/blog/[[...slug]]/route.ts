import { Body, Injectable, Params } from '@/interceptor'
import { type NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { Index } from 'lunr'
import { index, table } from '@/db'

const GetDto = z.object({ slug: z.array(z.string()).default([]) })
const PostDto = z.object({
  q: z
    .string()
    .min(3)
    .transform((e) => e.replace(/[^a-zA-Z0-9]/g, ' ')),
})

class Route {
  @Injectable()
  static async GET(
    _req: NextRequest,
    @Params(GetDto) { slug }: z.infer<typeof GetDto>,
  ) {
    const pathname = ['/blog', ...slug].join('/')
    const data = table.find(({ route }) => route === pathname)
    return NextResponse.json(data)
  }

  @Injectable()
  static async POST(
    _req: NextRequest,
    @Body(PostDto) { q }: z.infer<typeof PostDto>,
  ) {
    const document = Index.load(index)
    const results = document.search(q)
    const data = results.filter(({ score }) => score >= 1).map(({ ref }) => ref)
    return NextResponse.json(data)
  }
}

export const { GET, POST } = Route
