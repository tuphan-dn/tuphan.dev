import { type Dree } from 'dree'
// import { readFileSync } from 'fs'
// import { fromMarkdown } from 'mdast-util-from-markdown'
// import { toc } from 'mdast-util-toc'
// import { toHast } from 'mdast-util-to-hast'
// import { toHtml } from 'hast-util-to-html'

export type Tree = {
  route: string
  children: Tree[]
}

export function trielize(
  parentRoute: string,
  { name, children = [] }: Dree,
): Tree {
  const route = `${parentRoute}/${name}`
  const index = children.findIndex(({ type }) => type === 'file')
  if (index >= 0) children.splice(index, 1)
  return {
    route,
    children: children.map((child) => trielize(route, child)),
  }
  // const [{ path }] = children.splice(index, 1)
  // const file = readFileSync(path)
  // const md = fromMarkdown(file)
  // const { map } = toc(md)
  // console.log(map)
  // if (map) console.log(toHtml(toHast(map)))
}
