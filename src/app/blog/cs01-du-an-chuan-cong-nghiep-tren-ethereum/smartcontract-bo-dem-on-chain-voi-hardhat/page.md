+++
tags = "web3, evm, solidity, 🇻🇳"
date = "12 November, 2024"
+++

# Smartcontract bộ đếm on-chain với Hardhat

Bạn có thể tăng tốc quá trình phát triển Web App với Javascript/NextJS, Web Server với Rust/Rocket.rs, Mobile App với Dash/Flutter, và cùng nguyên tắc đó ta có phát triển smartcontract với Solidity/Hardhat.

## Khởi tạo dự án

```bash label="npm" group="setup"
mkdir cs01
cd cs01
npm init
npm i -D ts-node typescript @types/node tsc-alias
mkdir src
```

```bash label="yarn" group="setup"
mkdir cs01
cd cs01
yarn init
yarn add -D ts-node typescript @types/node tsc-alias
mkdir src
```

```bash label="pnpm" group="setup"
mkdir cs01
cd cs01
pnpm init
pnpm add -D ts-node typescript @types/node tsc-alias
mkdir src
```

## Quan hệ giữa Smartcontract, Solidity, và ABI

Bạn sẽ phát triển smartcontract bằng Solidity và biên dịch ra mã máy bằng Solidity Compiler. Blockchain sẽ lưu trữ và thực thi mã máy này. Tuy nhiên để tương tác với smartcontract thông qua các ngôn ngữ lập trình như Javascript, Python,... chúng ta cần định nghĩa lại interface của contract một cách thủ công. Điều này được chuẩn hoá bởi Solidity Compiler bằng cách tạo ra một sản phẩm phụ mang tên ABI (Application Binary Interface) trong quá trình biên dịch. Với ABI, các ngôn ngữ lập trình có thể nhanh chóng hiểu và tương tác với smartcontract.

![Sản phẩm của Solidity Compiler. Nguồn ảnh: https://medium.com/coinmonks/smart-contract-and-its-compilation-process-34868abccb69](./solidity.jpeg)

## Bộ đếm on-chain

Chúng ta sẽ viết một smartcontract đơn giản với biến `counter` được khởi tạo bằng `0` và một hàm `increase` để tăng `+1` cho mỗi lần gọi.

```solidity label="Counter.sol" group="contract"
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Counter {
  uint256 public counter;

  constructor() {
    counter = 0;
  }

  function increase() public returns (uint256) {
    counter = counter + 1;
    return counter;
  }
}
```

```json label="Counter.json" group="contract"
[
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "counter",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "increase",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
```

## Appendix

### Autoformat trong VSC

```json label=".prettierrc.json" group="prettier"
{
  "trailingComma": "all",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true,
  "printWidth": 80
}
```

### Conventional Commitment

```bash label="npm" group="husky"
npm i -D husky
```

```bash label="yarn" group="husky"
yarn add -D husky
```

```bash label="pnpm" group="husky"
pnpm add -D husky
```
