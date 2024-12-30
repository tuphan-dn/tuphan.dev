+++
tags = "cryptography, math"
date = "30 December, 2024"
+++

# The Groth16 Intuition

_"Hi, saw you on twitter. I'm trying to understand groth16. I have a quick question, why is alpha and beta used? The paper says it ensures A,B,C are consistent with each other in choice of public and private inputs. Not sure, how that is ensured."_, Saksham Thapa asked me via email.

![The twitter Saksham Thapa mentioned.](./twitter-me.jpg)

Hostnestly, I just followed the paper without asking the motivation behind $\alpha, \beta$ and $\gamma, \delta$ furthermore. In this article, I won't go through the math details cause the assumption that the readers was familiar with Eliptic Curve, Pairing-based Cryptosystem, R1CS, QAP, Lagrange Intherpolation, ...

## Notation

Given 3 elliptic curve groups $\mathbb{G}_1, \mathbb{G}_2, \mathbb{G}_T$ with an pairing $\mathbf{e}$: $\mathbb{G}_1 \times \mathbb{G}_2 \rightarrow \mathbb{G}_T$, we can write that $\mathbf{e}([x]_1,[x]_2) = [x]_T$ where $[x]_1 \in \mathbb{G}_1$, $[x]_2 \in \mathbb{G}_2$, $[x]_T \in \mathbb{G}_T$.

Capital letters (e.g. a matrix $M$) usually refer matrice. Otherwise, lowercase letters (e.g. a vector $v$) refer vectors and $v_i$ refers the element $i$-th in the vector $v$.

Finally, $\mathbb{F}_q$ refers a finite field with order $q$.

## An unsafe approach

It's necessary to recall that Groth16 is a ZK framework. It can "zk-ish" problems that can be defined under the form of algebraic circuits (i.e. binary inputs and NAND gates).

### R1CS

However, we can computationally improve the performance of proving and verifying by tranforming the algebraic circuit to a Rank-1 Constraint System (R1CS), which is a basic arithmetic circuit (i.e. interger inputs and adddition/multiplication gates).

For example, you know the tuple $(x,y)$ so that $z = xy + 7y - 5$ where $z$ is public and a product of 2 large primes. Importantly, all computation is in $\mathbb{F}_q$. Then you can transform both the problem and the solution to R1CS.

$$
\begin{aligned}
t &= xy\\
5+z-t &= 7y\\
\end{aligned}
$$

and the witness vector would be $a = (1,z,t,x,y)^{\top}$.

To compact the system of equations, we rewrite them as an agebraic product:

$$
\begin{bmatrix}
0 & 0 & 1 & 0 & 0\\
5 & 1 & -1 & 0 & 0\\
\end{bmatrix}

\begin{bmatrix}
1 \\
z \\
t \\
x \\
y \\
\end{bmatrix}

=

\begin{bmatrix}
0 & 0 & 0 & 1 & 0\\
7 & 0 & 0 & 0 & 0\\
\end{bmatrix}

\begin{bmatrix}
1 \\
z \\
t \\
x \\
y \\
\end{bmatrix}

\circ
\begin{bmatrix}
0 & 0 & 0 & 0 & 1\\
0 & 0 & 0 & 0 & 1\\
\end{bmatrix}

\begin{bmatrix}
1 \\
z \\
t \\
x \\
y \\
\end{bmatrix}
$$

In short, $Oa = La \circ Ra$. Here, we intuitively realize that the first element of $1$ in the witness vector is always required to secure the case of adding scalar. Moreover, the segment $(1,z)$ in the witness is public and the segment $(t,x,y)$ is private. $\quad \blacksquare$

### QAP

Now we got $O$, $L$, $R$ are $(m \times n)$ matrice and $a$ is the witness $(n \times 1)$ vector. To verify the equation, $Oa \overset{?}{=} La \circ Ra$, the verifier may process all matrix computation. With a very big R1CS, the work is pretty heavy to the verifier.

Because Lagrange interpolation is homomorphic, we can compress the equation $Oa = La \circ Ra$ to

$$
\begin{bmatrix}
w_1(x) \dots w_n(x)
\end{bmatrix}

\begin{bmatrix}
a_1 \\
\vdots \\
a_n
\end{bmatrix}

=

\begin{bmatrix}
u_1(x) \dots u_n(x)
\end{bmatrix}

\begin{bmatrix}
a_1 \\
\vdots \\
a_n
\end{bmatrix}

\circ

\begin{bmatrix}
v_1(x) \dots v_n(x)
\end{bmatrix}

\begin{bmatrix}
a_1 \\
\vdots \\
a_n
\end{bmatrix}
$$

or

$$
\sum_{i=1}^n w_i(x)a_i
=
\sum_{i=1}^n u_i(x)a_i
\circ
\sum_{i=1}^n v_i(x)a_i
$$

where $u_i(x)$ is the $m$-degree polynomial interpolating the $i$-th column vector in $L$; similarly to $v_i(x)$ with $R$, and $w_i(x)$ with $O$. In other words, $w_i(j) = O_{ji}$, $u_i(j) = L_{ji}$, $v_i(j) = R_{ji}$. Especially, $\circ$ now doesn't refer a polynomial multiplication but a scalar multiplication that is only defined at $x = 1, \dots, m$.

It's clear to see that the matrix production equation verification is equivalent to the polynomial evaluation at $x = 1, \dots, m$.

Let's $t(x)=(x-1) \dots (x-m)$, then $w(x) = \sum_{i=1}^n w_i(x)a_i | t(x)$, $u(x) = \sum_{i=1}^n u_i(x)a_i | t(x)$, and $v(x) = \sum_{i=1}^n v_i(x)a_i | t(x)$ due to the factor theorem. Now, we are able to translate the $\circ$ to a polinomial multiplcation.

$$
w(x) = u(x) \circ v(x) \Leftrightarrow w(x) + h(x)t(x) = u(x)v(x)
$$

However, we can make the verification process succint by the Schwartz-Zippel Lemma. Roughly speaking, if 2 polynomials $f(x)$ and $g(x)$ with the same degree $d$ both aggree on a random $\tau$, i.e. $f(\tau)=g(\tau)$, then $f(x)=g(x)$ with a very high probability.

It means we don't have to compute every coefficients of $w(x) + h(x)t(x)$ and $u(x)v(x)$ for comparison, instead evaluating the equation at a random $\tau$,

$$
w(\tau) + h(\tau)t(\tau) \overset{?}{=} u(\tau)v(\tau)
$$

, is pretty enough for any conclusion. $\quad \blacksquare$
