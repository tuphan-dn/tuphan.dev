+++
tags = "evm"
date = "23 August, 2024"
+++

# Zoom out the Ethereum's Storage Layout

While I was learning the process of verification in Optimism, the question "How the state in calldata looks like?" just kept buzzing in my head. So this article will solve all the mysterious stuff behind the fancy words of "Merkle Trie" or "Merkle Patricia Trie" once and for all 😤.

## Contract storage

All statically-sized variables are laid out contiguously on **storage slots**. Each storage slot has its own index, which runs from $0$ to $2^{256}-1$, and points to a big-endian 32-bytes storage. Multiple statically-sized variables (except struct and array) could stored in a slot if they all fit in. However, struct and array always take new slots. In case of contract inheritance, it will follow [C3 linearization](https://en.wikipedia.org/wiki/C3_linearization).

Dynamically-sized variables including mapping and dynamic array use a Keccak-256 hash to find the starting position.
