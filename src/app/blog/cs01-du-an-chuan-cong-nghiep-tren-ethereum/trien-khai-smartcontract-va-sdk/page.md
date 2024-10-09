+++
tags = "web3, evm, solidity, 🇻🇳"
date = "16 November, 2024"
+++

# Triển khai smartcontract và SDK

Trong các trường hợp đơn giản [Remix](https://remix.ethereum.org/)[^1] là đủ cho quá trình triển khai on-chain. Tuy nhiên, với các contracts có giá trị đầu vào tính toán phức tạp thì `ignition` trong Hardhat lại phát huy điểm mạnh.

`ignition` cho phép chúng ta có thể viết các kịch bản triển khia on-chain.

[^1]: Remix là một webapp IDE cho phép phát triển smartcontract và khác với [RemixJS](https://remix.run/).

## Cài đặt

Cài và thêm `@nomicfoundation/hardhat-ignition-viem` và `dotenv/config` vào `hardhat.config.ts`.

```bash
pnpm add viem
pnpm add -D @nomicfoundation/hardhat-ignition-viem @nomicfoundation/hardhat-ignition dotenv
```

Ngoài ra ta cũng sẽ định nghĩa mạng `holesky` testnet. Ta có thể đăng ký miễn phí RPC tại [Infura](infura.io).

```ts label="hardhat.config.ts" group="install"
import type { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox-viem'
import 'hardhat-abi-exporter'
import 'hardhat-chai-matchers-viem'
import '@nomicfoundation/hardhat-ignition-viem' // NEW
import 'dotenv/config' // NEW

const config: HardhatUserConfig = {
  solidity: '0.8.27',
  abiExporter: {
    path: './abi',
    runOnCompile: true,
    clear: true,
    flat: true,
  },
  // NEW
  networks: {
    holesky: {
      url: process.env.RPC,
      accounts: [process.env.PRIVKEY || ''],
    },
  },
}

export default config
```

Tạo file `.env`, trong đó `<private_key>` là ví chứa Holesky-ETH[^2] của bạn, và `<api_token>` là token từ infura.

> QUAN TRỌNG! Hãy nhớ thêm `.env` vào `.gitignore` nếu chưa.

```bash label=".env" group="env"
PRIVKEY=<private_key>
RPC=https://holesky.infura.io/v3/<api_token>
```

[^2]: Xin miễn phí Holesky-ETH tại [Google Faucet](https://cloud.google.com/application/web3/faucet/ethereum/holesky).

## Kịch bản Ignition

> Có thể xoá module mẫu của hardhat, `ignition/modules/Lock.ts`.

```ts label="ignition/modules/Counter.ts" group="ignition"
import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'

const CounterModule = buildModule('CounterModule', (m) => {
  const counter = m.contract('Counter')
  return { counter }
})

export default CounterModule
```

Triển khai on-chain với lệnh và quan sát kết quả

```bash
npx hardhat ignition deploy ignition/modules/Counter.ts --network holesky

✔ Confirm deploy to network holesky (17000)? … yes
Hardhat Ignition 🚀

Deploying [ CounterModule ]

Batch #1
  Executed CounterModule#Counter

[ CounterModule ] successfully deployed 🚀

Deployed Addresses

CounterModule#Counter - 0x08921A367D5B3902Ff8f6Cc597Bd37C5fEEdC1a5
```

> Tìm hiểu các cài đặt khác [`ignition/module`](https://hardhat.org/ignition/docs/getting-started#creating-your-first-module).

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

# Phụ lục

## Troubleshoot

💸 Kiểm tra số dư của bạn có lớn hơn 0.005 Holesky-ETH.

⚙️ Lưu ý tuỳ chọn `--network holesky` trong câu lên triển khai on-chain.

## Conventional Commitment

```bash
pnpm add -D husky
```
