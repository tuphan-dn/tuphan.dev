import { readFileSync } from 'fs'
import { scan } from 'dree'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { select, selectAll } from 'unist-util-select'
import { toString } from 'mdast-util-to-string'

export function onDreeFile(node: ExtendedDree) {
  const file = readFileSync(node.path)
  const md = fromMarkdown(file)
  const heading = select('heading > text', md) || {}
  const paragraph = select('paragraph', md) || {}
  const value = selectAll('heading, paragraph', md)
  console.log('======================================================')
  value.forEach((e) => {
    console.log(e)
    const raw = toString(e)
    console.log(raw)
  })
  node.title = toString(heading)
  node.description = toString(paragraph)
}

export function dreelize(root: string): ExtendedDree | null {
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
    onDreeFile,
  )
  return dree
}

export function trielize(
  parentRoute: string,
  { name, children = [], stat }: ExtendedDree,
): Tree {
  const route = `${parentRoute}/${name}`
  const index = children.findIndex(({ type }) => type === 'file')
  const [only = { title: '', description: '', value: '' }] =
    index >= 0 ? children.splice(index, 1) : []
  return {
    route,
    children: children.map((child) => trielize(route, child)),
    title: only.title,
    description: only.description,
    updatedAt: stat?.mtime || new Date(),
    createdAt: stat?.birthtime || new Date(),
  }
}
