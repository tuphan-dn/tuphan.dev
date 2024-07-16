import 'server-only'
import { z } from 'zod'
import tablejson from './table.json'

const TableDto: z.ZodType<Blog[]> = z.array(
  z.object({
    route: z.string(),
    title: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
    content: z.string(),
    date: z.coerce.date(),
    children: z.array(z.string()),
  }),
)

export const table = TableDto.parse(tablejson)
