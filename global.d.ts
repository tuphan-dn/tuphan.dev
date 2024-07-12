type ExtendedDree = Omit<import('dree').Dree, 'children'> & {
  title: string
  tags: string[]
  description: string
  content: string
  children?: ExtendedDree[]
}

type Tree = {
  route: string
  children: Tree[]
  title: string
  tags: string[]
  description: string
  content: string
  createdAt: Date
  updatedAt: Date
}
