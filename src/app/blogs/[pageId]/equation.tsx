'use client'
import { InlineMath, BlockMath } from 'react-katex'
import { useNotionContext } from 'react-notion-x'
import { EquationBlock } from 'notion-types'
import { getBlockTitle } from 'notion-utils'

import 'katex/dist/katex.min.css'

export const Equation = ({
  block,
  math,
  inline = false,
  className,
}: {
  block: EquationBlock
  math?: string
  inline?: boolean
  className?: string
}) => {
  const { recordMap } = useNotionContext()
  math = math || getBlockTitle(block, recordMap)
  if (!math) return null
  if (inline)
    return (
      <span
        role="button"
        tabIndex={0}
        className={'notion-equation notion-equation-inline ' + className}
      >
        <InlineMath math={math} />
      </span>
    )
  return (
    <span
      role="button"
      tabIndex={0}
      className={'notion-equation notion-equation-block ' + className}
    >
      <BlockMath math={math} />
    </span>
  )
}
