'use client'

import Editor from '@monaco-editor/react'

export default function Page() {
  return (
    <div className="w-full h-full grid grid-cols-12 gap-0">
      <div className="col-span-6 h-full">
        <Editor theme="vs-dark" defaultLanguage="markdown" defaultValue="" />
      </div>
      <div className="col-span-6"></div>
    </div>
  )
}
