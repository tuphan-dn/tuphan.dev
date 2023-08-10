import { getBlockTitle, getPageImageUrls, getPageProperty } from 'notion-utils'
import { Block, ExtendedRecordMap } from 'notion-types'

const normalizeImageUrl = (url: string, id: string) => {
  if (!/^https?:\/\//.test(url)) url = `https://www.notion.so${url}`
  return `https://www.notion.so/image/${encodeURIComponent(
    url,
  )}?table=block&id=${id}&cache=v2`
}

export const extractProperties = (
  block: Block,
  map: ExtendedRecordMap,
  pageId?: string,
): PageMetadata => {
  const title = getBlockTitle(block, map)
  const publishedAt = getPageProperty<number>('Date', block, map) || Date.now()
  const tags = getPageProperty<string[]>('Tags', block, map) || []
  const description = getPageProperty<string>('Description', block, map) || ''
  const [thumbnail] = getPageImageUrls(map, {
    mapImageUrl: (url, { id }) => {
      if (!!pageId && id !== pageId) return null
      return normalizeImageUrl(url, id)
    },
  })
  const pinned = getPageProperty<boolean>('Pinned', block, map) || false

  return {
    publishedAt,
    tags,
    title,
    description,
    thumbnail: thumbnail || 'https://placehold.co/1600x900',
    pinned,
  }
}
