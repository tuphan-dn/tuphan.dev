type ExtendedDree = Omit<import('dree').Dree, 'children'> & {
  title: string
  description: string
  children: ExtendedDree[]
}

type Tree = {
  route: string
  children: Tree[]
  title: string
  description: string
  createdAt: Date
  updatedAt: Date
}
