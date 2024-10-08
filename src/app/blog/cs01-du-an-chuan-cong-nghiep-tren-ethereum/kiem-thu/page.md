+++
tags = "web3, evm, solidity, 🇻🇳"
date = "12 November, 2024"
+++

# Kiểm thử

Hardhat cung cấp môi trường sandbox cho phép chúng ta kiểm thử nhanh chóng contracts trong quá trình phát triển. Đồng thời, các tiện ích đi kèm với `mocha` giúp chúng ta có nhiều hướng tiếp cận và nhiều kịch bản kiểm thử.

![Kiểm thử Sandbox](./sandbox.jpg)

Cài đặt và thêm `hardhat-chai-matchers-viem` vào `hardhat.config.ts`

```bash
pnpm add -D hardhat-chai-matchers-viem
```

```ts label="hardhat.config.ts" group="install"
import type { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox-viem'
import 'hardhat-abi-exporter'
import 'hardhat-chai-matchers-viem' // NEW

const config: HardhatUserConfig = {
  solidity: '0.8.27',
  abiExporter: {
    path: './abi',
    runOnCompile: true,
    clear: true,
    flat: true,
  },
}

export default config
```

## Khởi tạo Fixture

> Có thể xoá file test mẫu của hardhat, `test/Lock.ts`.

Trong mỗi lần test với sandbox, `deployFixture` sẽ là cài đặt chuẩn cho các lần test đó. Với mỗi lần gọi `loadFixture(deployFixture)`, hệ thống sẽ tạo một snapshot cho lần test đó, qua lần test khác, hệ thống sự tự reset và tạo snapshot mới.

```ts label="test/Counter.ts" group="test-deploy"
import { loadFixture } from '@nomicfoundation/hardhat-toolbox-viem/network-helpers'
import { expect } from 'chai'
import { viem } from 'hardhat'

describe('contract', function () {
  async function deployFixture() {
    const counter = await viem.deployContract('Counter')
    const [owner, attacker] = await viem.getWalletClients()
    return { counter, owner, attacker }
  }

  describe('deploy Counter', function () {
    it('deploy', async function () {
      const { counter, owner } = await loadFixture(deployFixture)
      expect(await counter.read.counter()).equal(0n)
      expect(await counter.read.owner()).hexEqual(owner.account.address)
    })
  })
})
```

Chạy kiểm thử với `counter = 0` và `owner` sẽ là địa chỉ ví chính khi khởi tạo contract,

```bash
pnpm test

> hardhat compile

Nothing to compile

  contract
    deploy counter
      ✔ deploy (516ms)

  1 passing (517ms)
```

## Tương tác với contract

Gọi `increase` để tăng `counter` lên `+1`.

```ts label="test/Counter.ts" group="test-interact"
...
import { getAddress } from 'viem'

describe('contract', function () {
  ...
  describe('interact counter', function () {
    it('increase', async function () {
      const { counter, owner } = await loadFixture(deployFixture)
      await expect(counter.write.increase())
        .to.emit(counter, 'Increase')
        .withArgs(getAddress(owner.account.address), 1n)
      expect(await counter.read.counter()).equal(1n)
    })
  })
})
```

Combo `emit` và `withArgs` giúp chúng ta nghe và kiểm thử sự kiện từ contract một các gọn gàng.

> Lưu ý, ta phải dùng `getAddress` để tạo address checksum cho ví (tạo chữ hoa và chữ thường trong địa chỉ ví) trước khi so sánh.

## Kiểm sai

Giả sử ta sử dụng một địa chỉ không phải `owner` để gọi `increase`, ta kỳ vọng rằng contract sẽ cho ra lỗi.

```ts label="test/Counter.ts" group="test-not-interact"
...
import { getAddress } from 'viem'

describe('contract', function () {
  ...
  describe('interact counter', function () {
    it('increase', async function () {
      ...
    })

    it('not increase', async function () {
      const { counter, attacker } = await loadFixture(deployFixture)
      await expect(
        counter.write.increase({ account: attacker.account }),
      ).to.be.revertedWithCustomError(counter, 'OwnableUnauthorizedAccount')
    })
  })
})
```

## Kết quả

```bash
pnpm test

> hardhat compile

Nothing to compile

  contract
    deploy counter
      ✔ deploy (441ms)
    interact counter
      ✔ increase
      ✔ not increase

  3 passing (460ms)
```
