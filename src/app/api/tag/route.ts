import { table } from '@/db'
import { Body, Injectable } from '@/interceptor'
import { type NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const PostDto = z.object({
  tag: z.string().optional(),
})

class Route {
  @Injectable()
  static async GET() {
    const raw = table.map(({ tags }) => tags).flat()
    const tags = Object.entries(
      Object.fromEntries(raw.map((tag) => [tag, ''])),
    ).map(([e]) => e)
    return NextResponse.json(tags)
  }

  @Injectable()
  static async POST(
    _req: NextRequest,
    @Body(PostDto) { tag }: z.infer<typeof PostDto>,
  ) {
    if (!tag) throw new Error('Empty tag')
    const data = table
      .filter(({ tags }) => tags.includes(tag))
      .map(({ route }) => route)
    return NextResponse.json(data)
  }
}

export const { GET, POST } = Route
