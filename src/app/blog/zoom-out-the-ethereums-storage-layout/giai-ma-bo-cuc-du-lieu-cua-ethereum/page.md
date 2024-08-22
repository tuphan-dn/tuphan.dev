+++
tags = "evm, 🇻🇳"
date = "23 August, 2024"
+++

# Giải mã bố cục dữ liệu của Ethereum

While I was learning the process of verification in Optimism, the question "How the state in calldata looks like?" just kept buzzing in my head. So this article will solve all the mysterious stuff behind the fancy words of "Merkle Trie" or "Merkle Patricia Trie" once and for all 😤.

## Contract storage

All statically-sized variables in laid out contiguously on a thing named **storage slot**. Each storage slot has its own index, which runs from $0$ to $2^{256}-1$, and point to a 32-bytes storage.
