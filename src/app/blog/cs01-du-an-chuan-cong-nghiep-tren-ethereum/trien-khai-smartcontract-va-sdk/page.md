+++
tags = "web3, evm, solidity, 🇻🇳"
date = "14 November, 2024"
+++

# Triển khai smartcontract và SDK

## Khởi tạo SDK

Thêm file `tsconfig.json`.

```json label="tsconfig.json" group="ts"
{
  "compilerOptions": {
    "baseUrl": "./",
    "target": "es2020",
    "lib": ["es2020"],
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "skipLibCheck": true,
    "declaration": true,
    "sourceMap": true,
    "removeComments": true,
    "resolveJsonModule": true
  },
  "include": ["index.ts", "src", "abi"],
  "exclude": ["node_modules", "dist"],
  "tsc-alias": {
    "resolveFullPaths": true
  },
  "typedocOptions": {
    "entryPoints": ["./src/index.ts"],
    "out": "docs"
  }
}
```

```json label="tsconfig.cjs.json" group="ts"
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/cjs",
    "module": "commonjs"
  }
}
```

```json label="tsconfig.esm.json" group="ts"
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/esm",
    "module": "esnext",
    "moduleResolution": "bundler"
  }
}
```

Thay dòng `"main": "index.js",` trong `package.json` thành

```json label="package.json" group="package"
  ...
  "main": "./dist/cjs/index.js",
  "module": "./dist/esm/index.js",
  "files": [
    "dist"
  ],
  "exports": {
    ".": {
      "require": "./dist/cjs/index.js",
      "import": "./dist/esm/index.js"
    },
    "./package.json": "./package.json"
  },
  ...
```
