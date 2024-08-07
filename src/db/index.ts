import 'server-only'
import { z } from 'zod'
import tablejson from './table.json'
import indexjson from './index.json'

const TableDto: z.ZodType<Blog[]> = z.array(
  z.object({
    route: z.string(),
    title: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
    content: z.string(),
    date: z.coerce.date(),
    children: z.array(z.string()),
  }),
)

export const table = TableDto.parse(tablejson)

const IndexDto = z.object({
  version: z.string(),
  fields: z.array(z.string()),
  fieldVectors: z.array(z.tuple([z.string(), z.array(z.number())])),
  invertedIndex: z.array(z.tuple([z.string(), z.any()])),
  pipeline: z.array(z.string()),
})

export const index = IndexDto.parse(indexjson)
