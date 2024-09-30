import { Injectable, Query } from '@/interceptor'
import { NextResponse } from 'next/server'
import ogs from 'open-graph-scraper'
import { z } from 'zod'

const GetDto = z.object({
  url: z.string().url(),
})

class Route {
  @Injectable()
  static async GET(@Query(GetDto) { url }: z.infer<typeof GetDto>) {
    const { result } = await ogs({ url })
    return NextResponse.json(result)
  }
}

export const { GET } = Route
