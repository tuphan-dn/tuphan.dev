+++
tags = "layer2"
date = "28 September, 2024"
+++

# Part1: P2P Network

In a dencentralized network, nodes (aka. peers) connect directly to thier neightbours. They communicate through a complicated network graph and don't reply on any central server. In this tutorial, we will build a p2p network.

## Env

Install `dotenv` and `zod` to read the env vars.

```bash label="npm" group="install-env"
npm i dotenv zod
```

```bash label="yarn" group="install-env"
yarn add dotenv zod
```

```bash label="pnpm" group="install-env"
pnpm add dotenv zod
```

Create a file `src/config.ts`,

```ts label="src/config.ts" group="config"
import 'dotenv/config'
import { z } from 'zod'

const config = z
  .object({
    PRIVATE_KEY: z.string().optional(),
  })
  .parse(process.env)

export const { PRIVATE_KEY } = config
```

Now we creat a file `.env` in the root directory.

```txt label=".env" group="env"
PRIVATE_KEY=dummy
```

The private key here is the same format of Metamask private key or any Ethereum wallets.

## Install `libp2p`

We will use `libp2p` and its type defs `@libp2p/interface` to build this project.

```bash label="npm" group="install-libp2p"
npm i libp2p
npm i -D @libp2p/interface
```

```bash label="yarn" group="install-libp2p"
yarn add libp2p
yarn add -D @libp2p/interface
```

```bash label="pnpm" group="install-libp2p"
pnpm add libp2p
pnpm add -D @libp2p/interface
```

## Private Key

In our network, a node will be identified by its keypair including 1 privkey and 1 pubkey. In order to load one from `PRIVATE_KEY`, we will use `@libp2p/crypto`.

```bash label="npm" group="install-privkey"
npm i @libp2p/crypto
```

```bash label="yarn" group="install-privkey"
yarn add @libp2p/crypto
```

```bash label="pnpm" group="install-privkey"
pnpm add @libp2p/crypto
```

```ts label="src/index.ts" group="privkey"
import { keys } from '@libp2p/crypto'

import { PRIVATE_KEY } from './config'

const privkey = keys.privateKeyFromRaw(Buffer.from(PRIVATE_KEY, 'hex'))
```

## Swarm Behavior

```bash label="npm" group="install-behavior"
npm i @libp2p/tcp @chainsafe/libp2p-yamux @chainsafe/libp2p-noise @libp2p/identify @chainsafe/libp2p-gossipsub @libp2p/mdns
```

```bash label="yarn" group="install-behavior"
yarn add @libp2p/tcp @chainsafe/libp2p-yamux @chainsafe/libp2p-noise @libp2p/identify @chainsafe/libp2p-gossipsub @libp2p/mdns
```

```bash label="pnpm" group="install-behavior"
pnpm add @libp2p/tcp @chainsafe/libp2p-yamux @chainsafe/libp2p-noise @libp2p/identify @chainsafe/libp2p-gossipsub @libp2p/mdns
```

| Package                       | To                                                                   |
| ----------------------------- | -------------------------------------------------------------------- |
| `@libp2p/tcp`                 | Transport                                                            |
| `@chainsafe/libp2p-yamux `    | Stream multiplexer to achieve a vitrual bidirectional message stream |
| `@chainsafe/libp2p-noise`     | Secure messages through the channels                                 |
| `@libp2p/identify`            | Discover others' multiaddr and Broadcast the multiaddr itself        |
| `@libp2p/mdns `               | Discovery protocol                                                   |
| `@chainsafe/libp2p-gossipsub` | Pubsub protocol                                                      |
