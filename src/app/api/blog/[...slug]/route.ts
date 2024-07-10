import { Injectable, Params } from '@/interceptor'
import { NextRequest, NextResponse } from 'next/server'
import { resolve } from 'path'
import { dreelize, trielize } from '../tree'
import { z } from 'zod'

const GetDto = z.object({ slug: z.array(z.string()).default([]) })

class Route {
  @Injectable()
  static async GET(
    _req: NextRequest,
    @Params(GetDto) { slug }: z.infer<typeof GetDto>,
  ) {
    const root = resolve(process.cwd(), './src/app/blog/', ...slug)
    const dree = dreelize(root)
    if (!dree) return NextResponse.json('Not Found', { status: 404 })
    const tree = trielize('/blog', dree)
    return NextResponse.json(tree)
  }
}

export const { GET } = Route
