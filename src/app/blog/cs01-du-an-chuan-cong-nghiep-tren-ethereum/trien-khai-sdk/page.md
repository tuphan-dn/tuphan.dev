+++
tags = "web3, evm, solidity, 🇻🇳"
date = "18 November, 2024"
+++

# Triển khai SDK

Việc gửi trực tiếp ABI cho các phòng ban ví dụ Frontend, Backend, Data Analysis để có thể tương tác với smartcontract một các thủ công sẽ dẫn đến nhiều bất tiện (Quản lý phiên bản không đồng nhất, các hàm side-effect không được chia sẻ,...). Vì vậy, việc phát triển một [npm](https://www.npmjs.com/) package sẽ tăng tốc quá trình hợp tác giữa các team sẽ tốt hơn rất nhiều.

![npmjs.com](./npmjs.webp)

## Cài đặt

Chúng ta sẽ thiết lập file `tsconfig.json` để hỗ trợ cả `commonjs` và `esmodule`.

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

# Phụ lục

## Conventional Commitment

```bash
pnpm add -D husky
```
