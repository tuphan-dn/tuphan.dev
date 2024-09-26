+++
tags = "math, cryptography"
date = "26 September, 2024"
+++

# Fast Fourier Transform in Efficient Polynomial Multiplication

Fast Fourier Transforms (FFT) can be used for efficient polynomial multiplication, which is particularly useful when dealing with large polynomials in several cryptography applications, for example, Shamir Secret Sharing, Multiparty Computation, Pairing-based Elliptic Curve, and many others.

## Fourier Transform (FT)

The Fourier Transform of a function $f(t)$ on a continuous-time domain:

$$
F(\omega) = \int_{-\infty}^{\infty} f(t) e^{-i \omega t} dt
$$

## Discrete Fourier Transform (DFT)

Let $x_0, ..., x_{n-1}$ be complex numbers. The Discrete Fourier Transform:

$$
X_{k=0..n-1} = \sum_{m=0}^{n-1} x_m e^{-i2 \pi km / n}
$$

where $e^{-i2 \pi km / n}$ is a primitive $n$-th root of 1 (also known as $n$-th root of unity).

> To work with points $(x,y) \in \mathbb{R}^2$ on a Cartesian coordinate, we can map $\mathbb{R}^2 \rightarrow \mathbb{C}$.

![DFT from time domain to frequency domain](./dft.png)

## Problem

_Giving 2 polynomials $A(x)$ and $B(x)$ with high degrees $m$ and $n$ respectively, compute $C(x) = A(x) \times B(x)$. As we see that $|C(x)| = m + n$._

**Solution.** Let's represent polynomials as coefficient vectors $A=[a_0,a_1,...,a_n], B=[b_0,b_1,...,b_n]$, where:

$$
\begin{aligned}
A(x) &= a_0 + a_1x + a_2x^2 + ... + a_nx^n\\
B(x) &= b_0 + b_1x + b_2x^2 + ... + b_nx^n
\end{aligned}
$$

Pad zeros to the both coefficient vetors so that they're both length $N \ge n+m+1$ and $N$ is a power of 2.
