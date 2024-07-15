import 'server-only'
import { z } from 'zod'
import treejson from './tree.json'

const TreeDto: z.ZodType<Tree> = z
  .object({
    route: z.string(),
    title: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
    content: z.string(),
    date: z.coerce.date(),
  })
  .extend({
    children: z.lazy(() => TreeDto.array()),
  })

export const tree = TreeDto.parse(treejson)
