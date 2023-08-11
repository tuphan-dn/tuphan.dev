'use client'
import { Fragment } from 'react'
import { CodeBlock } from 'notion-types'
import { Text, useNotionContext } from 'react-notion-x'
import { getBlockTitle } from 'notion-utils'
import classNames from 'classnames'
import { ocean } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import SyntaxHighlighter from 'react-syntax-highlighter'
import Clipboard from '@/components/clipboard'

export function Code({
  block,
  defaultLanguage = 'typescript',
  className,
}: {
  block: CodeBlock
  defaultLanguage?: string
  className?: string
}) {
  const { recordMap } = useNotionContext()
  const content = getBlockTitle(block, recordMap)
  const language = (
    block.properties?.language?.[0]?.[0] || defaultLanguage
  ).toLowerCase()
  const caption = block.properties.caption

  return (
    <Fragment>
      <pre
        className={classNames('notion-code', 'group', className)}
        style={{ padding: 0 }}
      >
        <SyntaxHighlighter language={language} style={ocean}>
          {content}
        </SyntaxHighlighter>
        <span className="absolute top-1 right-1 invisible group-hover:visible">
          <Clipboard content={content} className="btn btn-sm btn-square" />
        </span>
      </pre>

      {caption && (
        <figcaption className="notion-asset-caption">
          <Text value={caption} block={block} />
        </figcaption>
      )}
    </Fragment>
  )
}
