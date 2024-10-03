+++
tags = "layer2"
date = "12 October, 2024"
+++

# Part 3: State Trie & Block Proposer

A block header contains the information of previous block header, the transaction trie, and the state trie. Because the tries are Merkle, then the block header becomes a strong proof for security.

## Block Headers

Because a block is produced through the Layer 2 consensus, all nodes agree on a valid submitter and the bundled transactions. As a result, the block header serves as proof of this information.

![Block Header](./block-header.jpg)

Given a hash function $H$:

$$
\begin{aligned}
&\text{blockHeader} = H(\\
&\quad \text{prevBlockHeader},\\
&\quad H(TxTrieRoot, StateTrieRoot)\\
&)
\end{aligned}
$$

Then, it's possible to provide a strong proof of relationship among the previous state, the transactions, and the next state that is valid to a given block header.

> To learn about [Merkle Trie](/blog/merkle-trie-the-definition-and-applications)
