import { NotionAPI } from 'notion-client'
import { ExtendedRecordMap } from 'notion-types'

import deplConfig from '@/configs/depl.config'
import { extractProperties } from './utils'

export const getDatabase = async () => {
  const api = new NotionAPI()
  const map = await api.getPage(deplConfig.notionDatabaseId)
  const block = { ...map.block }
  Object.keys(block).forEach((pageId) => {
    const {
      value: { type, parent_table, content },
    } = block[pageId]
    if (type !== 'page' || parent_table !== 'collection' || !content)
      delete block[pageId]
  })

  // Metadata
  const metadata: PageMap = {}
  Object.keys(block).forEach((pageId) => {
    const { value } = block[pageId]
    const page = extractProperties(value, map, pageId)
    metadata[pageId] = page
  })

  // Sorted pages
  const pageIds = Object.keys(block).sort((prevPageId, nextPageId) => {
    const { publishedAt: prevPublishedTime } = metadata[prevPageId]
    const { publishedAt: nextPublishedTime } = metadata[nextPageId]
    if (prevPublishedTime < nextPublishedTime) return 1
    else if (prevPublishedTime > nextPublishedTime) return -1
    else return 0
  })

  return { pageIds, metadata }
}

export const getPageMap = async (pageId: string) => {
  const notion = new NotionAPI()
  const map = await notion.getPage(pageId)
  return map
}

export const getRecommends = async (pageId: string) => {
  const { pageIds, metadata } = await getDatabase()
  const { tags } = metadata[pageId]

  const recommends: string[] = []
  for (const tag of tags) {
    for (const _pageId of pageIds) {
      const { tags: _tags } = metadata[_pageId]
      if (_pageId === pageId) continue
      if (recommends.includes(_pageId)) continue
      if (_tags.includes(tag)) recommends.push(_pageId)
      if (recommends.length >= 4) return recommends
    }
  }
  return recommends
}

export const getPageMetadata = (map: ExtendedRecordMap) => {
  const [{ value }] = Object.values(map.block)
  const page = extractProperties(value, map)
  return page
}
