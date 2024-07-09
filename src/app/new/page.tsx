'use client'

import Editor from '@monaco-editor/react'

export default function Page() {
  return (
    <div className="w-full h-full flex flex-col sm:flex-row">
      <div className="flex-1">
        <Editor theme="vs-dark" defaultLanguage="markdown" defaultValue="" />
      </div>
      <div className="flex-1 bg-base-300"></div>
    </div>
  )
}
