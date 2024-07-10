type ExtendedDree = Omit<import('dree').Dree, 'children'> & {
  title: string
  description: string
  content: string[]
  children?: ExtendedDree[]
}

type Tree = {
  route: string
  children: Tree[]
  title: string
  description: string
  content: string
  createdAt: Date
  updatedAt: Date
}
