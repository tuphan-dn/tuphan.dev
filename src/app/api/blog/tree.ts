import { readFileSync } from 'fs'
import { scan } from 'dree'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { select, selectAll } from 'unist-util-select'
import { toString } from 'mdast-util-to-string'
import { frontmatter } from 'micromark-extension-frontmatter'
import { frontmatterFromMarkdown } from 'mdast-util-frontmatter'
import toml from 'toml'
import { z } from 'zod'

export function onDreeFile(node: ExtendedDree) {
  const file = readFileSync(node.path)
  const md = fromMarkdown(file, {
    extensions: [frontmatter(['yaml', 'toml'])],
    mdastExtensions: [frontmatterFromMarkdown(['yaml', 'toml'])],
  })
  const matter = select('root > toml', md)
  const heading = select('root > heading', md) || {}
  const paragraph = select('root > paragraph', md) || {}
  const text = selectAll('heading, paragraph', md)
  const { tags } = z
    .object({ tags: z.string().default('') })
    .parse(toml.parse(toString(matter)))
  node.title = toString(heading)
  node.tags = tags.split(',').map((e) => e.trim())
  node.description = toString(paragraph)
  node.content = text.map((e) => toString(e))
}

export function dreelize(
  root: string,
  onFile: (node: ExtendedDree) => void = onDreeFile,
): ExtendedDree | null {
  const dree = scan<ExtendedDree>(
    root,
    {
      size: false,
      sizeInBytes: false,
      hash: false,
      matches: '**/page.{md,mdx}',
      extensions: ['md', 'mdx'],
      stat: true,
    },
    onFile,
  )
  return dree
}

export function trielize(
  parentRoute: string,
  { name, children = [], stat }: ExtendedDree,
): Tree {
  const route = `${parentRoute}/${name}`
  const index = children.findIndex(({ type }) => type === 'file')
  const [
    only = { title: '', tags: [], description: '', value: '', content: [] },
  ] = index >= 0 ? children.splice(index, 1) : []
  return {
    route,
    children: children.map((child) => trielize(route, child)),
    title: only.title,
    tags: only.tags,
    description: only.description,
    updatedAt: stat?.mtime || new Date(),
    createdAt: stat?.birthtime || new Date(),
    content: only.content.join('\n') || '',
  }
}
