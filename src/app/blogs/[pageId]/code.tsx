'use client'
import dynamic from 'next/dynamic'

export const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then(async ({ Code }) => {
    await Promise.all([
      require('prismjs/components/prism-markup-templating.js'),
      require('prismjs/components/prism-markup.js'),
      require('prismjs/components/prism-bash.js'),
      require('prismjs/components/prism-c.js'),
      require('prismjs/components/prism-cpp.js'),
      require('prismjs/components/prism-csharp.js'),
      require('prismjs/components/prism-docker.js'),
      require('prismjs/components/prism-java.js'),
      require('prismjs/components/prism-js-templates.js'),
      require('prismjs/components/prism-coffeescript.js'),
      require('prismjs/components/prism-diff.js'),
      require('prismjs/components/prism-git.js'),
      require('prismjs/components/prism-go.js'),
      require('prismjs/components/prism-graphql.js'),
      require('prismjs/components/prism-handlebars.js'),
      require('prismjs/components/prism-less.js'),
      require('prismjs/components/prism-makefile.js'),
      require('prismjs/components/prism-markdown.js'),
      require('prismjs/components/prism-objectivec.js'),
      require('prismjs/components/prism-ocaml.js'),
      require('prismjs/components/prism-python.js'),
      require('prismjs/components/prism-reason.js'),
      require('prismjs/components/prism-rust.js'),
      require('prismjs/components/prism-sass.js'),
      require('prismjs/components/prism-scss.js'),
      require('prismjs/components/prism-solidity.js'),
      require('prismjs/components/prism-sql.js'),
      require('prismjs/components/prism-stylus.js'),
      require('prismjs/components/prism-swift.js'),
      require('prismjs/components/prism-wasm.js'),
      require('prismjs/components/prism-yaml.js'),
    ])
    return Code
  }),
)
