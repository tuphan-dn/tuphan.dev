import { NextRequest, NextResponse } from 'next/server'
import {
  getDatabase,
  getPageMap,
  getPageMetadata,
  getRecommends,
} from './service'

export async function GET(
  _req: NextRequest,
  { params: { pageId } }: { params: { pageId: string } },
) {
  const map = await getPageMap(pageId)
  const metadata = getPageMetadata(map)
  const recommends = await getRecommends(pageId)

  return NextResponse.json({ map, recommends, metadata })
}

export async function generateStaticParams() {
  const { pageIds } = await getDatabase()
  const params = pageIds.map((pageId) => ({ pageId }))
  return params
}
