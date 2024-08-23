+++
tags = "math, 🇻🇳"
date = "22 August, 2020"
+++

# Chương I. Nhóm

## 1. Phép toán hai ngôi

_Phép toán hai ngôi_ (gọi tắt là phép toán) trên tập hợp $X$ là một ánh xạ

$$
\begin{aligned}
f: X \times X &\rightarrow X\\
(x,y) &\mapsto f(x,y)
\end{aligned}
$$

### 1.1. Định nghĩa

Ta dùng ký hiệu $xfy$ thay cho $f(x,y)$. Như vậy, ứng với các phép toán $*$, $\circ$, $+$, $\cdot$,... ta có các ký hiệu $x*y$, $x \circ y$, $x+y$, $x \cdot y$,... Khi ký hiệu phép toán là $\cdot$ ta gọi đây là phép toán nhân và thường viết $xy$ thay cho $x \cdot y$ mà ta gọi là tích của $x$ và $y$. Còn khi ký hiệu phép toán là $+$ ta gọi đây là phép toán cộng và $x+y$ là tổng của $x$ và $y$.

### 1.2. Ví dụ

1. Phép cộng và phép nhân thông thường trên các tập hợp $\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$, $\mathbb{C}$ là các phép toán; phép trừ thông thường là phép toán trên các tập hợp $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$, $\mathbb{C}$ nhưng không là phép toán trên $\mathbb{N}$.
2. Phép cộng và phép nhân ma trận là các phép toán trên $M(n, \mathbb{R})$ gồm các ma trận vuông cấp $n$ với hệ số thực.

### 1.3. Định nghĩa

Cho phép toán $*$ trên tập hợp $X$. Ta nói phép toán $*$:

1. _giao hoán_, nếu với mọi $x,y \in X, x*y = y*x$;
2. _kết hợp_, nếu với mọi $x,y,z \in X, (x*y)*z = x*(y*z)$;
3. có _phần tử trung hòa trái_ (tương ứng, _phải_) là $e$ nếu $e \in X$ và với mọi $x \in X, e*x=x$ (tuơng ứng, $x*e=x$). Nếu $e$ vừa là phần tử trung hòa trái vừa là phần tử trung hòa phải thì ta nói $e$ là phần tử trung hòa của phép toán $*$.

### 1.4. Mệnh đề

_Một phép toán có nhiều nhất một phần tử trung hòa._

**Chứng minh.** Giả sử $e'$ và $e''$ là hai phần tử trung hòa của phép toán $*$. Xét phần tử $e'*e''$. Vì $e'$ là phần tử trung hòa trái nên $e' * e'' = e''$. Mặt khác, vì $e''$ là phần tử trung hòa phải nên $e' * e'' = e'$. Suy ra $e'=e''$. $\blacksquare$

### 1.5. Nhận xét

Từ chứng minh của [Mệnh đề 1.4](#14-mệnh-đề) ta thấy nếu $e'$ là phần tử trung hòa trái và $e''$ là phần tử trung hòa phải của phép toán $*$ thì $e'=e''$. Đặc biệt, nếu trong $X$ tồn tại phần tử trung hòa $e$ thì đó là phần tử trung hòa trái duy nhất đồng thời cũng là phần tử trung hòa phải duy nhất.

### 1.6. Định nghĩa

Cho $*$ là một phép toán trên tập hợp $X$ có phần tử trung hòa $e$ và $x$ là một phần tử tùy ý của $X$. Ta nói $x$ _khả đối xứng trái_ (tuơng ứng, _phải_) nếu tồn tại $x' \in X$ sao cho $x' * X = e$ (tương ứng, $x * x' = e$). Khi đó $x'$ được gọi là _phần tử đối xứng trái_ (tương ứng, _phải_) của $x$. Trường hợp $x$ vừa khả đối xứng trái, vừa khả đối xứng phải thì ta nói $x$ khả đối xứng và phần tử $x' \in X$ thỏa $x*x' = x'*x = e$ được gọi là phần tử đối xứng của $x$.

### 1.7. Mệnh đề

_Nếu phép toán $*$ kết hợp thì một phần tử có nhiều nhất một phần tử đối xứng._

**Chứng minh.** Giả sử $x'$ và $x''$ là hai phần tử đối xứng của $x$. Khi đó
$x' * x = e$ và $x * x'' = e$. Do đó

$$
\begin{aligned}
x' &= x' * e\\
&= x' * (x * x'')\\
&= [x' * x) * x''\\
&= e * x'' = x''. \qquad \blacksquare
\end{aligned}
$$

### 1.8. Nhận xét

Từ chứng minh của [Mệnh đề 1.7](#17-mệnh-đề) ta thấy, khi phép toán $*$ kết hợp, nếu $x'$ là phần tử đối xứng trái của $x$ và $x''$ là phần tử đối xứng phải của $x$ thì $x' = x''$. Đặc biệt, nếu $x$ khả đối xứng và $x'$ là phần tử đối xứng của $x$ thì $x'$ là phần tử đối xứng trái duy nhất và cũng là phần tử đối xứng phải duy nhất của $x$.

### 1.9. Thuật ngữ và ký hiệu

1. Trường hợp phép toán cộng: Phần tử trung hòa được gọi là _phần tử không_ và được ký hiệu là $0$, tính chất khả đối xứng được gọi là _khả đối_, phần tử đối xứng của $x$ được gọi là _phần tử đối_ của $x$ và ký hiệu là $-x$.

2. Trường hợp phép toán nhân: Phần tử trung hòa được gọi là _phần tử đơn vị_ và được ký hiệu là $e$ hay $1$, tính chất khả đối xứng được gọi là _khả nghịch_, phần tử đối xứng của $x$ được gọi là _phần tử nghịch đảo_ của $x$ và ký hiệu là $x^{-1}$.

Từ đây trở về sau, nếu không có gì gây nhầm lẫn, ta dùng phép toán nhân để chỉ một phép toán tùy ý trên tập hợp đang khảo sát.

## 2. Nửa nhóm

### 2.1. Định nghĩa

Cho tập hợp $X$ với phép toán nhân. Ta nói $(X,\cdot)$ (gọi tắt là $X$) là:

1. một _nửa nhóm_ nếu phép toán nhân kết hợp trên $X$;
2. một _vị nhóm_ nếu phép toán nhân kết hợp trên $X$ và có phần tử trung hòa trên $X$.

Một nửa nhóm được gọi là _giao hoán_ hay _Abel_ nếu phép toán tương ứng giao hoán.

### 2.2. Ví dụ

1. Với phép cộng thông thường, các tập hợp $\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$, $\mathbb{C}$ trở thành các vị nhóm giao hoán.
2. Với phép cộng thông thường, tập hợp $\mathbb{N}^*$ gồm các số nguyên dương trở thành một nửa nhóm giao hoán nhưng không là vị nhóm.

### 2.3. Ký hiệu

Trong nửa nhóm $(X,\cdot)$, do phép toán nhân kết hợp nên với mọi $x,y,z$:

$$
(xy)z = x(yz)
$$

Giá trị chung của hai vế trong đẳng thức trên được ký hiệu là $xyz$ và gọi là _tích_ của các phần tử $x,y,z$ theo thứ tự đó. Bằng quy nạp, ta định nghĩa _tích_ của $n$ phần tử $x_1, ..., x_n$ như sau:

$$
x_1 ... x_n = x_1 (x_2 ... x_n)
$$

Ta có định lý sau:

### 2.4. Định lý

_Cho $x_1, ..., x_n$ là $n$ phần tử tuỳ ý của nửa nhóm $(X, \cdot)$ với $n \ge 3$. Khi đó:_

$$
x_1 ... x_n = (x_1 ... x_i) (x_{i+1} ... x_j) ... (x_{k+1} ... x_j)
$$

_trong đó $1 \le i \lt j ... \lt k \lt n$._

**Chứng minh.** Vì $X$ là một nửa nhóm nên định lý đúng với $n=3$. Xét $n \lt 3$, giả sử định lý dúng cho mọi tích có $m$ phần tử với $3 \le m \lt n$. Khi đó sử dụng giả thuyết quy nạp và tính kết hợp ta có

$$
\begin{aligned}
&(x_1 ... x_i) (x_{i+1} ... x_j) ... (x_{k+1} ... x_j)\\
= &(x_1 ... x_i) [(x_{i+1} ... x_j) ... (x_{k+1} ... x_j)]\\
= &[x_1(x_2 ... x_i)][(x_{i+1} ... x_n)]\\
= &x_1(x_2 ... x_n) = x_1 ... x_n \qquad \blacksquare
\end{aligned}
$$

### 2.5. Ký hiệu

Trong nửa nhóm $(X,\cdot)$ tích của $n$ phần tử, mỗi phần tử đều bằng $x$ được gọi là $luỹ thừa$ bậc $n$ của $x$ và được ký hiệu là $x^n$. Do Định lý [2.4](#24-định-lý) ta có

$$
x^m x^n = x^{m+n}, (x^m)^n = x^{mn}, \forall m,n \in \mathbb{N}^*
$$

Trường hợp nửa nhóm cộng $(X,+)$, tổng của $n$ phần tử được gọi là _bội_ $n$ của $x$ và ký hiệu là $nx$. Khi đó các tính chất trên trở thành

$$
mx+nx=(m+n)x, m(nx)=(mn)x
$$

### 2.6. Định lý

_Trong nửa nhóm giao hoán, tích của $n$ phần tử tuỳ ý không phụ thuộc vào thứ tự của các phần tử._

**Chứng minh.** Vì phép toán giao hoán nên định lý đúng với $n=2$. Xét $n \gt 2$. Giả sử định lý đúng với mọi tích của $m$ phần tử với $m \lt n$. Ta chứng minh $x_1 ... x_n = x_{\sigma(1)} ... x_{\sigma(n)}$ với mọi phép hoán vị $\sigma$ của tập hợp $\{1,2,...,n\}$. Thật vậy, đặt $k=\sigma(n)$, bằng cách sử dụng giải thuyết quy nạp và các tính chất giao hoán, kết hợp của phép nhân ta có:

$$
\begin{aligned}
x_1...x_n &= (x_1...x_{k-1})[x_k(x_{k+1}...x_n)]\\
&= (x_1...x_{k-1})[(x_{k+1}...x_n)x_k]\\
&= (x_1...x_{k-1}x_{k+1}...x_n)x_k\\
&= (x_{\sigma(1)}...x_{\sigma(n-1)})x_{\sigma(n)}\\
&= x_{\sigma(1)}...x_{\sigma(n)} \qquad \blacksquare
\end{aligned}
$$

## 3. Khái niệm về nhóm
