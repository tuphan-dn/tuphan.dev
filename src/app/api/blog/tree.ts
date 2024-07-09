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
