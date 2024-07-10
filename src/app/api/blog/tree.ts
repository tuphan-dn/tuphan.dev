import { readFileSync } from 'fs'
import { scan } from 'dree'
import { fromMarkdown } from 'mdast-util-from-markdown'
// import { gfm } from 'micromark-extension-gfm'
// import { gfmFromMarkdown } from 'mdast-util-gfm'
// import { math } from 'micromark-extension-math'
// import { mathFromMarkdown } from 'mdast-util-math'
import { select, selectAll } from 'unist-util-select'
import { toString } from 'mdast-util-to-string'

export function onDreeFile(node: ExtendedDree) {
  const file = readFileSync(node.path)
  const md = fromMarkdown(file)
  const heading = select('heading > text', md) || {}
  const paragraph = select('paragraph', md) || {}
  const text = selectAll('heading, paragraph', md)
  node.title = toString(heading)
  node.description = toString(paragraph)
  node.content = text.map((e) => toString(e))
}

// export function onDreeSearch(node: ExtendedDree) {
//   const file = readFileSync(node.path)
//   const md = fromMarkdown(file)
//   const text = selectAll('heading, paragraph', md)
//   node.content = text.map((e) => toString(e))
// }

// export function onDreeSpeech(node: ExtendedDree) {
//   const file = readFileSync(node.path)
//   const md = fromMarkdown(file, {
//     extensions: [gfm(), math()],
//     mdastExtensions: [gfmFromMarkdown(), mathFromMarkdown()],
//   })
//   const text = selectAll('heading, paragraph', md)
//   node.content = text.map((e) => toString(e))
// }

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
  const [only = { title: '', description: '', value: '', content: [] }] =
    index >= 0 ? children.splice(index, 1) : []
  return {
    route,
    children: children.map((child) => trielize(route, child)),
    title: only.title,
    description: only.description,
    updatedAt: stat?.mtime || new Date(),
    createdAt: stat?.birthtime || new Date(),
    content: only.content.join('\n') || '',
  }
}
