'use client'
import Katex from '@matejmazur/react-katex'
import { useNotionContext } from 'react-notion-x'
import { EquationBlock } from 'notion-types'
import { getBlockTitle } from 'notion-utils'

export const Equation = ({
  block,
  math,
  inline = false,
  className,
  ...rest
}: {
  block: EquationBlock
  math?: string
  inline?: boolean
  className?: string
}) => {
  const { recordMap } = useNotionContext()
  math = math || getBlockTitle(block, recordMap)
  if (!math) return null
  return (
    <span
      role="button"
      tabIndex={0}
      className={
        'notion-equation' +
        (inline ? ' notion-equation-inline ' : ' notion-equation-block ') +
        className
      }
    >
      <Katex
        math={math}
        settings={{
          throwOnError: false,
          strict: false,
          displayMode: !inline,
        }}
        {...rest}
      />
    </span>
  )
}
