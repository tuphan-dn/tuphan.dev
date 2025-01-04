+++
tags = "math, 🇻🇳"
date = "22 August, 2020"
+++

# Chương I. Nhóm

## 1. Phép toán hai ngôi

_Phép toán hai ngôi_ (gọi tắt là phép toán) trên tập hợp $X$ là một ánh xạ

$$
\begin{align*}
f: X \times X &\rightarrow X\\
(x,y) &\mapsto f(x,y)
\end{align*}
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

**Chứng minh.** Giả sử $e'$ và $e''$ là hai phần tử trung hòa của phép toán $*$. Xét phần tử $e'*e''$. Vì $e'$ là phần tử trung hòa trái nên $e' * e'' = e''$. Mặt khác, vì $e''$ là phần tử trung hòa phải nên $e' * e'' = e'$. Suy ra $e'=e''$. $\quad \blacksquare$

### 1.5. Nhận xét

Từ chứng minh của [Mệnh đề 1.4](#14-mệnh-đề) ta thấy nếu $e'$ là phần tử trung hòa trái và $e''$ là phần tử trung hòa phải của phép toán $*$ thì $e'=e''$. Đặc biệt, nếu trong $X$ tồn tại phần tử trung hòa $e$ thì đó là phần tử trung hòa trái duy nhất đồng thời cũng là phần tử trung hòa phải duy nhất.

### 1.6. Định nghĩa

Cho $*$ là một phép toán trên tập hợp $X$ có phần tử trung hòa $e$ và $x$ là một phần tử tùy ý của $X$. Ta nói $x$ _khả đối xứng trái_ (tuơng ứng, _phải_) nếu tồn tại $x' \in X$ sao cho $x' * X = e$ (tương ứng, $x * x' = e$). Khi đó $x'$ được gọi là _phần tử đối xứng trái_ (tương ứng, _phải_) của $x$. Trường hợp $x$ vừa khả đối xứng trái, vừa khả đối xứng phải thì ta nói $x$ khả đối xứng và phần tử $x' \in X$ thỏa $x*x' = x'*x = e$ được gọi là phần tử đối xứng của $x$.

### 1.7. Mệnh đề

_Nếu phép toán $*$ kết hợp thì một phần tử có nhiều nhất một phần tử đối xứng._

**Chứng minh.** Giả sử $x'$ và $x''$ là hai phần tử đối xứng của $x$. Khi đó
$x' * x = e$ và $x * x'' = e$. Do đó

$$
\begin{align*}
x' &= x' * e\\
&= x' * (x * x'')\\
&= [x' * x) * x''\\
&= e * x'' = x'' \quad \blacksquare
\end{align*}
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
\begin{align*}
&(x_1 ... x_i) (x_{i+1} ... x_j) ... (x_{k+1} ... x_j)\\
= &(x_1 ... x_i) [(x_{i+1} ... x_j) ... (x_{k+1} ... x_j)]\\
= &[x_1(x_2 ... x_i)][(x_{i+1} ... x_n)]\\
= &x_1(x_2 ... x_n) = x_1 ... x_n \quad \blacksquare
\end{align*}
$$

### 2.5. Ký hiệu

Trong nửa nhóm $(X,\cdot)$ tích của $n$ phần tử, mỗi phần tử đều bằng $x$ được gọi là _luỹ thừa_ bậc $n$ của $x$ và được ký hiệu là $x^n$. Do Định lý [2.4](#24-định-lý) ta có

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
\begin{align*}
x_1...x_n &= (x_1...x_{k-1})[x_k(x_{k+1}...x_n)]\\
&= (x_1...x_{k-1})[(x_{k+1}...x_n)x_k]\\
&= (x_1...x_{k-1}x_{k+1}...x_n)x_k\\
&= (x_{\sigma(1)}...x_{\sigma(n-1)})x_{\sigma(n)}\\
&= x_{\sigma(1)}...x_{\sigma(n)} \quad \blacksquare
\end{align*}
$$

## 3. Khái niệm về nhóm

### 3.1. Định nghĩa

_Nhóm_ là một vị nhóm mà mọi phần tử đều khả đối xứng. Nói cách khác, tập hợp $G$ khác rỗng với phép toán nhân được gọi là một nhóm nếu các tính chất sau được thoả:

$(G_1)$ Với mọi $x,y,z \in G, (xy)z=z(yz)$;

$(G_2)$ Tồn tại $e \in G$ sao cho với mọi $x \in G, ex=xe=x$;

$(G_3)$ Với mọi $x \in G$, tồn tại $x^{-1} \in G$ sao cho $xx^{-1}=x^{-1}x=e$.

Nếu phép toán trên $G$ là phép cộng thì các tính chất trên trở thành:

$(G_1)$ Với mọi $x,y,z \in G, (x+y)+z=z+(y+z)$;

$(G_2)$ Tồn tại $0 \in G$ sao cho với mọi $x \in G, 0+x=x+0=x$;

$(G_3)$ Với mọi $x \in G$, tồn tại $-x \in G$ sao cho $x+(-x)=(-x)+x=0$.

Trường hợp phép toán trên nhóm $G$ giao hoán thì $G$ là _nhóm giao hoán_ hay là _nhóm Abel_.

Nhóm $G$ được gọi là _nhóm hữu hạn_ khi tập hợp $G$ hữu hạn. Khi đó số phần tử của $G$ được gọi là _cấp_ của nhóm $G$. Nếu nhóm $G$ không hữu hạn thì ta nói $G$ là _nhóm vô hạn_.

### 3.2. Ví dụ

1. Tập hợp các số nguyên $\mathbb{Z}$ cùng với phpes cộng thông thường là một nhóm giao hoán mà ta gọi là nhóm cộng các số nguyên. Tương tự ta có nhóm công các số hữu tỷ $\mathbb{Q}$, nhóm cộng các số thực $\mathbb{R}$ và nhóm cộng các số phức $\mathbb{C}$.
2. Tập hợp các số hữu tỷ khác không $\mathbb{Q^*}$ cùng với phép nhân thông thường là một nhóm giao hoán mà ta gọi là nhóm nhân các số hữu tỷ khác không. Tương tự ta có nhóm nhân các số thực khác không $\mathbb{R^*}$, và nhóm nhân các số phức khác không $\mathbb{C^*}$.
3. Với $X=\{1,2,...,n\}$, đặt $S_n = {\sigma \mid \sigma: X \rightarrow X}$ là một song ánh. Khi đó $S_n$ với phép hợp nối ánh xạ là một nhóm (có phần tử đơn vị là ánh xạ đồng nhất $Id_X$ và phần tử nghịch đảo của $\sigma \in S_n$ chính là ánh xạ ngược $\sigma^{-1}$). Ta gọi $(S_n,\circ)$ là nhóm hoán vị hay nhóm đối xứng bậc $n$. Đây là một nhóm hữu hạn có cấp $n!$ ([xem 4](#4-nhóm-hoán-vị)).
4. Tập hợp $GL(n,\mathbb{R})$ gồm các ma trận vuông cấp $n$, khả nghịch với hệ số thực cùng với phép nhân ma trận là một nhóm không giao hoán với mọi $n \gt 1$ (với phần tử đơn vị là mà trận đơn vị $I_n$ và phần tử nghịch đảo của $A \in GL(n,\mathbb{R})$ chính là ma trận nghịch đảo $A^{-1}$). Ta gọi $GL(n,\mathbb{R})$ là _nhóm tuyến tính đầu đủ_ bậc $n$ (hay _nhóm tuyến tính tổng quát_ bậc $n$) trên $\mathbb{R}$.

### 3.3. Định lý

_Cho nhóm $(G,\cdot)$ và $x,y,x_1,...,x_n \in G$ Khi đó:_

_(i) Phần tử đơn vị $e$ là duy nhất._

_(ii) Phần từ nghịch đảo $x^{-1}$ của $x$ là duy nhất và $(x^{-1})^{-1}=x$._

_(iii) $xy=e$ khi và chỉ khi $yx=e$. Hơn nữa khi đó $y=x^{-1}$._

_(iv) $(x_1...x_n)^{-1} = x_n^{-1}...x_1^{-1}$. Đặc biệt $(x^n)^{-1}=(x^{-1})^n$ với mọi $n$ nguyên dương._

_(v) Phép toán nhân có tính giản ước, nghĩa là với mọi $x,y,z \in G$, từ dẳng thức $xy=xz$ hay $yx=zx$ đều dẫn đến $y=z$._

**Chứng minh.** (i) Suy từ [Mệnh đề 1.4](#14-mệnh-đề).

(ii) Suy từ [Mệnh đề 1.7](#17-mệnh-đề).

(iii) Suy từ [Nhận xét 1.8](#18-nhận-xét).

(iv) Chỉ cần nhận xét rằng

$$
\begin{align*}
&(x_1...x_n)(x_n^{-1}...x_1^{-1})\\
&= (x_1...x_{n-1})(x_nx_n^{-1})(x_{n-1}^{-1}...x_1^{-1})\\
&= (x_1...x_{n-1})(x_{n-1}^{-1}...x_1^{-1})\\
&= ...\\
&= e
\end{align*}
$$

sau đó sử dụng (iii).

(v) Từ đẳng thức $xy=xz$ ta suy ra $x^{-1}(xy)=x^{-1}(xz)$ hay $(x^{-1}x)y=(x^{-1}x)z$, nghĩa là $y=z$. Tương tự, từ đẳng thức $yx=zx$ cũng dẫn đến $y=z$. $\quad \blacksquare$

### 3.4. Ký hiệu

Trong nhóm nhân $(G,\cdot)$ ta dùng ký hiệu $x^{-n}$ để chỉ phần tử $(x^{-1})^n$ với mọi số $n$ nguyên dương và đặt $x^0=e$. Như vậy ta đã định nghĩa luỹ thừa bận $n$ của một phần tử bất kỳ trong một nhóm nhân với $n$ nguyên. Chú ý rằng, do tính chất (iv) trong [Định lý 3.3](#33-định-lý), các công thức $x^mx^n = x^{m+n}$ và $(x^m)^n=x^{mn}$ (hay $mx+nx = (m+n)x$ và $m(nx)=n(mx)$ đối với nhóm cộng) vẫn còn đúng với mọi $m,n$ nguyên.

### 3.5. Định lý

_Cho $(G,\cdot)$ là một nửa nhóm khác rỗng. Các mệnh đề sau tương đương:_

_(i) $(G,\cdot)$ là một nhóm;_

_(ii) Với mọi $a,b \in G$, các phương trình $ax=b$ và $ya=b$ đều có nghiệm trong $G$;_

_(iii) Trong $G$ có phần tử đơn vị trái $e$ và với mọi $x \in G$, tồn tại $x' \in G$ sao cho $x'x=e$;_

_(iv) Trong $G$ có phần tử đơn vị phải $e'$ và với mọi $x \in G$, tồn tại $x' \in G$ sao cho $xx''=e'$._

**Chứng minh.** (i) $\Rightarrow$ (ii) Ta có $x=a^{-1}b$ và $y=ba^{-1}$ lần lượt là các nghiệm của phương trình $ax=b$ và $ya=b$.

(ii) $\Rightarrow$ (iii) Do $G \neq \text{\O}$ nên tồn tại $a_0 \in G$. Gọi $e$ là nghiệm của phương trình $ya_0=a_0$. Khi đó $e$ là phần tử đơn vị trái. Thật vậy, với $b$ là một phần tử tuỳ ý của $G$, gọi $c$ là nghiệm của phương trình $a_0x=b$, khi đó $a_0c=b$ nên

$$
eb=e(a_0c)=(ea_0)c=a_0c=b
$$

Vậy $e$ là phần tử đơn vị trái. Tính chất sai cùng trong (iii) được suy từ giả thuyết mọi phương trình dạng $ya=e$ đều có nghiệm trong $G$.

(iii) $\Rightarrow$ (ii) Giả sử trong $G$ có phần tử đơn vị trái $e$ và với mọi $x \in G$, tồn tại $x' \in G$ sao cho $x'x=e$. Ta chứng minh $e$ là phần tử đơn vị và $x'$ là phần tử nghịch đảo của $x$. Theo giả thuyết, với $x'$ như trên tồn tại $x'' \in G$ sao cho $x''x'=e$. Do đó

$$
\begin{align*}
xx'&=e(xx')=(x''x')(xx')\\
&=x''(x'x)x'=x''ex'=x''x'=e
\end{align*}
$$

Suy ra

$$
xe=x(x'x)=(xx')x=ex=x
$$

Các kết quả trên chứng tỏ $e$ là phần tử đơn vị và $x'=x^{-1}$. Do đó $(G,\cdot)$ là một nhóm.

Tương tự ta cũng có (i) $\Rightarrow$ (ii); (ii) $\Rightarrow$ (iv) và (iv) $\Rightarrow$ (i). Do đó định lý được chứng minh. $\quad \blacksquare$

## 4. Nhóm hoán vị

### 4.1. Định nghĩa

Cho tập hợp $X \neq \text{\O}$ gồm $n$ phần tử (ta có thể đồng nhất $X$ với $\{1,2,...,n\}$). Khi đó tập hợp $S_n$ gồm tất cả các song ánh từ $X$ vào $X$ là một nhóm với phép hợp nối ánh xạ. Tạ gọi $S_n$ là _nhóm hoán vị_ bậc $n$.

Nhóm hoán vị $S_n$ là nhóm hữu hạn có cấp $n!$, có phần tử trung hoà là ánh xạ đồng nhất $Id_X$ và phần tử nghịch đảo của $\sigma \in S_n$ là ánh xạ ngược $\sigma^{-1}$. Nhóm này không giao hoán nếu $n \ge 2$.

### 4.2. Một số thuật ngữ và ký hiệu

1. Mỗi phần tử $\sigma \in S_n$ được gọi là một _phép hoán vị_ hay một _phép thế_ bậc $n$ và có thể được biểu diễn bởi một ma trận loại $2 \times n$:
   $$
   \begin{pmatrix}
   1 & 2 & \cdots & n\\
   \sigma(1) & \sigma(2) & \cdots & \sigma(n)
   \end{pmatrix}
   $$
   trong đó ở dòng thứ nhất, các phần tử của tập $X$ được sắp xếp theo một thứ tự nào đó (thường là $1,2,...,n$), dòng thứ hai gồm ảnh của các phần tử tương ứng ở dòng thứ nhất qua song ánh $\sigma$.
2. Phép hoán vị $\sigma \in S_n$ được gọi là một $r$-_chu trình_ hay một _chu trình có chiều dài_ $r$ nếu tồn tại các phần tử phân biệt $i_1,i_2,...,i_r \in X$ sao cho $\sigma(i_1)=i_2,...,\sigma(i_{r-1})=i_r,\sigma(i_r)=i_1$ và $\sigma(i)=i, \forall i \in X \backslash \{i_1,i_2,...i_r\}$. Khi đó ta viết $\sigma=(i_1i_2...i_r)$.

   Hai chu trình $\sigma=(i_1i_2...i_r)$, $\sigma'=(j_1j_2...j_s)$ được gọi là _rời nhau_ hay _độc lập_ nếu $\{i_1,i_2,...,i_r\} \cap \{j_1,j_2,...,j_s\} = \text{\O}$.

3. Mỗi 2-chu trình trong $S_n$ được gọi là một chuyển vị. Như vậy mỗi chuyển vị có dạng $(i,j)$ với $1 \le i \ne j \le n$.

   Ví dụ:

   a. Trong nhóm hoán vị $S_6$, phép hoá vị $\sigma$ xác định bởi $\sigma(1)=2,\sigma(2)=5,\sigma(3)=4,\sigma(4)=1,\sigma(5)=3,\sigma(6)=6$ được mô tả như sau:

   $$
   \sigma =
   \begin{pmatrix}
   1&2&3&4&5&6\\
   2&5&4&1&3&6
   \end{pmatrix}
   $$

   b. Trong nhóm hoán vị $S_7$, chu trình $\sigma=(1\;3\;4\;7)$ có chiều dài 4 và là phép hoán vị:

   $$
   \sigma =
   \begin{pmatrix}
   1&2&3&4&5&6&7\\
   3&2&4&7&5&6&1
   \end{pmatrix}
   $$

   c. Trong nhóm hoá vị $S_8$, chuyển vị (2 \; 5) là phép hoán vị:

   $$
   \sigma =
   \begin{pmatrix}
   1&2&3&4&5&6&7&8\\
   1&5&3&4&2&6&7&8
   \end{pmatrix}
   $$

   d. Trong nhóm hoán vị $S_5$, cho

   $$
   \begin{align*}
   \sigma&=(1\;2\;5\;3)\\
   \tau&=
   \begin{pmatrix}
   1&2&3&4&5\\
   4&3&5&1&2
   \end{pmatrix}
   \end{align*}
   $$

   Ta có

   $$
   \begin{align*}
   \sigma\tau&=
   \begin{pmatrix}
   1&2&3&4&5\\
   4&1&3&2&5
   \end{pmatrix}=(1\;4\;2)\\
   \tau\sigma&=
   \begin{pmatrix}
   1&2&3&4&5\\
   3&2&4&1&5
   \end{pmatrix}=(1\;3\;4)\\
   \sigma^{-1}&=(3\;5\;2\;1)\\
   \tau^{-1}&=
   \begin{pmatrix}
   1&2&3&4&5\\
   4&5&2&1&3
   \end{pmatrix}\\
   \end{align*}
   $$

### 4.3. Nhận xét

Hai chu trình $\sigma$ và $\tau$ rời nhau thì chúng giao hoán lẫn nhau, nghĩa là $\sigma\tau=\tau\sigma$.

### 4.4. Định lý

_Mọi phép hoán vị bậc $n$ khác ánh xạ đồng nhất đều được phân tích thành tích các chu trình rời nhau có chiều dài lớn hơn hay bằng 2. Cách phân tích là duy nhất sai khác một sự đổi chỗ các chu trình._

**Chứng minh.**

1. _Sự tồn tại:_ Gọi $k$ là số các phần tử $i$ sao cho $\sigma(i) \ne i$. Chọn $i_1$ sao cho $i_2=\sigma(i_1) \ne i_1;i_3=\sigma(i_2);...;i_{j+1}=\sigma(i_j);...$ Gọi $r$ là số nhỏ nhất sao cho $\sigma(i_r) \in \{i_1;...;i_{r-1}\}$, khi đó $\sigma(i_r)=i_1$ (vì nếu $\sigma(i_r)=i_j \ne i_1$ thì ta có $\sigma(i_r)=i_j=\sigma(i_{j-1})$ nên $\sigma$ không là song ánh).

   Đặt $\sigma_1 = (i_1i_2...i_r)$ và $X_1=\{i_1,i_2,...,i_r\}$. Khi đó, nếu $r=k$ thì $\sigma_1=\sigma$ nên $\sigma$ là một chu trình, nếu $r \lt k$, ta gọi $i_{r+1} \notin X_1$ là một phần tử thoả $\sigma(i_{r+1}) \ne i_{r+1}$. Thực hiện tương tự quá trình trên cho tập hợp $X_2=X \backslash X_1$ ta được chu trình $\sigma_2$ rời nhau với $\sigma_1$. Tiếp tục thực hiện như vậy, cuối cùng ta nhận được các chu trình $\sigma_1,\sigma_2,...,\sigma_p$ rời nhau từng đôi một và $\sigma=\sigma_1\sigma_2...\sigma_p$.

2. _Sự duy nhất:_ Giả sử $\sigma \ne Id_X$ và $\sigma$ được phân tích dưới dạng

   $$
   \sigma = \sigma_1\sigma_2...\sigma_p = \sigma'_1\sigma'_2...\sigma'_p
   $$

   Trong đó $\sigma_1,\sigma_2,...,\sigma_p$ là các chu trình rời nhau và $\sigma'_1,\sigma'_2,...,\sigma'_p$ cũng là các chu trình rời nhau. Đặt $\sigma_1=(i_1i_2...i_r)$. Khi đó tồn tại $1 \le k \le q$ sao cho

   $$
   \begin{align*}
   \sigma'_k(i_1)=\sigma(i_1)=\sigma_1(i_1)=i_2,\\
   \sigma'_k(i_2)=\sigma(i_2)=\sigma_1(i_2)=i_3,\\
   \cdots\\
   \sigma'_k(i_r)=\sigma(i_r)=\sigma_1(i_r)=i_1,\\
   \end{align*}
   $$

   Do đó $\sigma'_k=\sigma_1$. Không mất tính tổng quát ta có thể giả sử $\sigma'_1=\sigma_1$. Khi đó $\sigma_2...\sigma_p=\sigma'_2...\sigma'_q$. Tiếp tục thực hiện như trên, cuối cùng ta được $p=q$ và $\sigma'_i=\sigma_i$ với mọi $1 \le i \le p$. Định lý được chứng minh. $\quad \blacksquare$

   Ví dụ: Trong nhốm hoán vị $S_{10}$ ta có

   $$
   \begin{align*}
   \sigma &=
   \begin{pmatrix}
   1&2&3&4&5&6&7&8&9&10\\
   3&2&7&9&1&4&8&5&6&10\\
   \end{pmatrix}\\
   &= (1\;3\;7\;8\;5)(4\;9\;6)
   \end{align*}
   $$

### 4.5. Bổ đề

_Mọi chu trình trong $S_n$ đều được phân tích thành tích của các chuyển vị._

**Chứng minh.** Cho $\sigma=(i_1i_2...i_r)$ là một chu trình. Ta có $\sigma=(i_1i_r)(i_1i_{r-1})...(i_1i_2)$. $\quad \blacksquare$

### 4.6. Định lý

_Mọi phép hoán vị trong $S_n$ đều được phân tích thành tích của các chuyển vị._

**Chứng minh.** Suy từ [Định lý 4.4](#44-định-lý) và [Bổ đề 4.5](#45-bổ-đề). $\quad \blacksquare$

Ví dụ: Với $\sigma$ như trong ví dụ trên, ta có

$$
\sigma = (1\;5)(1\;8)(1\;7)(1\;3)(4\;6)(4\;9)
$$

Nhận xét rằng sự phân tích thành tích các chuyển vị của một chu trình là không duy nhất. Do đó sự phân tích trong [Định lý 4.6](#46-định-lý) là không duy nhất. Tuy nhiên chúng ta sẽ chứng minh rằng tính chẵn lẻ của số các chuyển vị trong các phân tích là không thay đổi.

### 4.7. Định nghĩa

Cho $\sigma \in S_n$. Ta nói rằng $\{i,j\}$ tạo thành một _nghịch thế_ đối với $\sigma$ nếu

$$
(i-j)[\sigma(i)-\sigma(j)] \lt 0
$$

Nếu số các nghịch thế đối với $\sigma$ là $k$ thì dấu của $\sigma$, ký hiệu $sgn(\sigma)$, là hàm được định nghĩa bởi

$$
sgn(\sigma)=(-1)^k
$$

Nếu $sgn(\sigma)=1$ thì $\sigma$ được gọi là _hoán vị chẵn_, nếu $sgn(\sigma)=-1$ thì $\sigma$ được gọi là _hoán vị lẻ_.

### 4.8. Nhận xét

(i) $sgn(Id_X) = 1$.

(ii) $sgn(\sigma) = sgn(\sigma^{-1})$.

(iii) Nếu $\sigma$ là một chuyển vị thì $sgn(\sigma) = -1$.

### 4.9. Định lý

_Với mọi $\sigma,\tau \in S_n$ thì_

$$
sgn(\sigma\tau)=sgn(\sigma)sgn(\tau)
$$

**Chứng minh.** Gọi $k_1,k_2$ và $k$ lần lượt là số nghich thế trong $\sigma.\tau$ và $\sigma\tau$. Giả sử $1 \le i \lt j \le n$. Hoán vị $\sigma$ có thể được biểu diễn như sau:

$$
\sigma=
\begin{pmatrix}
\cdots & \tau(i) \cdots & \tau(j) \cdots\\
\cdots & \sigma\tau(i) \cdots & \sigma\tau(j) \cdots
\end{pmatrix}
$$

Khi đó

1. Nếu $\tau(i) \lt \tau(j)$ và $\sigma\tau(i) \lt \sigma\tau(j)$ thì $\{i,j\}$ không là nghịch thế trong $\tau$; $(\tau(i),\tau(j))$ không là nghịch thế trong $\sigma$ và $\{i,j\}$ không là nghịch thế trong $\sigma\tau$.
2. Nếu $\tau(i) \lt \tau(j)$ và $\sigma\tau(i) \gt \sigma\tau(j)$ thì $\{i,j\}$ không là nghịch thế trong $\tau$; $(\tau(i),\tau(j))$ là nghịch thế trong $\sigma$ và $\{i,j\}$ là nghịch thế trong $\sigma\tau$.
3. Nếu $\tau(i) \gt \tau(j)$ và $\sigma\tau(i) \lt \sigma\tau(j)$ thì $\{i,j\}$ là nghịch thế trong $\tau$; $(\tau(i),\tau(j))$ là nghịch thế trong $\sigma$ và $\{i,j\}$ không là nghịch thế trong $\sigma\tau$.
4. Nếu $\tau(i) \gt \tau(j)$ và $\sigma\tau(i) \gt \sigma\tau(j)$ thì $\{i,j\}$ là nghịch thế trong $\tau$; $(\tau(i),\tau(j))$ không là nghịch thế trong $\sigma$ và $\{i,j\}$ là nghịch thế trong $\sigma\tau$.

Kết hợp 4 trường hợp trên ta được $k+k_1+k_2$ là một số chẵn nên $(-1)^k=(-1)^{k_1}(-1)^{k_2}$, nghĩa là

$$
sgn(\sigma\tau)=sgn(\sigma)sgn(\tau) \quad \blacksquare
$$

Từ [Bổ đề 4.5](#45-bổ-đề), [Nhận xét 4.8](#48-nhận-xét) và [Định lý 4.9](#49-định-lý) ta suy ra:

### 4.10. Định lý

\_Với mọi hoán vị $\sigma \in S_n$, ta có

$$
sgn(\sigma) = (-1)^l
$$

_với $l$ là số chuyển vị trong phân tích $\sigma$ thành tích các chuyển vị. Đặc biệt, tính chẵn lẻ của số các chuyển vị trong [Định lý 4.6](#46-định-lý) là duy nhất._

Ví dụ: Xét tính chẵn lẻ của phép hoán vị $\sigma \in S_{10}$ sau:

$$
\begin{align*}
\sigma &=
\begin{pmatrix}
1&2&3&4&5&6&7&8&9&10\\
3&5&6&4&8&1&7&10&2&9
\end{pmatrix}\\
&= (1\;3\;6)(2\;5\;8\;10\;9\;)\\
&= (1\;6)(1\;3)(2\;9)(2\;10)(2\;8)(2\;5)
\end{align*}
$$

Vì $\sigma$ được viết dưới dạng tích của 6 chuyển vị nên $sgn(\sigma)=1$ nghĩa là $\sigma$ là một hoán vị chẵn.

### 4.11. Hệ quả

_Nếu $\sigma$ là một $r$-chu trình thì_

_(i) $sgn(\sigma)=(-1)^{r-1}$;_

_(ii) $\sigma$ chẵn $\Leftrightarrow$ $r$ lẻ; và $\sigma$ lẻ $\Leftrightarrow$ $r$ chẵn._

## 5. Nhóm con

### 5.1. Định nghĩa

Một tập con $H$ của nhóm $(G,\cdot)$ được gọi là tập con _ổn định_ của nhóm $G$ nếu với mọi $x,y \in H, xy \in H$. Khi đó phép toán nhân thu hẹp trên $H$ xác định một phép toán trên $H$ mà ta gọi là phép toán cảm sing trên $H$ (từ phép toán trên $G$).

### 5.2. Định nghĩa

_Nhóm con_ $H$ của nhóm $G$ là một tập con ổn định của nhóm $G$ sao cho cùng với phép toán cảm sing $H$ là một nhóm. Ký hiệu $H \le G$ để chỉ $H$ là một nhóm con của $G$.

Định lý sau đây cho ta dấu hiệu để nhận biết nhóm con của một nhóm cho trước.

### 5.3. Định lý

_Cho $H$ là một tập con khác rỗng của nhóm $(G,\cdot)$. Các mệnh đề sau tương đương:_

_(i) $H \le G$;_

_(ii) Với mọi $x,y \in H,xy \in H$ và $x{^-1} \in H$;_

_(iii) Với mọi $x,y \in H, x^{-1}y \in H$._

**Chứng minh.** (i) $\Rightarrow$ (ii) Trước hết ta chứng minh phần tử đơn vị $e'$ của nhóm con $H$ cũng chính là phần tử đơn vị $e$ của $G$. Thật vậy, với mọi $x \in H$ ta có $e'x=x=ex$ nên do tính giản ước ta suy ra $e'=e$. Bây giờ gọi $x'$ là phần tử nghịch đảo của $x$ trong đó nhóm con $H$, ta có $x'x=e=x^{-1}x$, do đó $x^{-1}=x' \in H$. Tính chất $xy \in H$ được suy từ tính chất nhóm con $H$ là tập hợp con ổn định của $G$.

(ii) $\Rightarrow$ (iii) Với mọi $x,y \in H$, giả thuyết (ii) cho ta $x^{-1} \in H$ và do đó $x^{-1}y \in H$.

(iii) $\Rightarrow$ (i) Vì $H \ne \text{\O}$ nên tồn tại $a \in H$ vả do đó $e=a^{-1}a \in H$. Bây giờ với mọi $x \in H, x^{-1} = x^{-1}e \in H$. Cuối cùng, với mọi $x,y \in H$, do $x^{-1} \in H$ nên $xy = (x^{-1})^{-1}y \in H$. Suy ra $H \le G$. $\quad \blacksquare$

### 5.4. Ví dụ

1. Các tập hợp $\{e\}$ và $G$ đều là các nhóm con của $G$. Ta gọi đậy là các _nhóm con tầm thường_ của $G$.
2. Từ [Ví dụ 3.2](#32-ví-dụ) ta thấy $\mathbb{Z} \le \mathbb{Q} \le \mathbb{R} \le \mathbb{C}$ và $\mathbb{Q}^* \le \mathbb{R}^* \le \mathbb{C}^*$.
3. Gọi $A_n$ là tập hợp gồm tất cả những hoán vị chẵn trong nhóm hoán vị $S_n$. Khi đó từ [Nhận xét 4.8](#48-nhận-xét) và các [Định lý 4.9](#49-định-lý), [5.3](#53-định-lý) ta thấy $A_n \le S_n$. Ta gọi $A_n$ là nhóm _thay phiên bậc $n$._
4. Tập hợp $SL(n,\mathbb{R})$ gồm các ma trận vuông cấp $n$ với hệ số thực có định thức bằng 1 là một nhóm con của nhóm tuyến tính đầy đủ $GL(n,\mathbb{R})$. Ta gọi $SL(n,\mathbb{R})$ là _nhóm tuyến tính đặc biệt_ bậc $n$ trên $\mathbb{R}$.

### 5.5. Định lý

_Giao của một họ không rỗng các nhóm con của một nhóm $G$ cũng là nhóm con của $G$._

**Chứng minh.** Giả sử $\{H_i\}_{i \in I}$ là một họ không rỗng các nhóm con của nhóm $(G,\cdot)$. Đặt $H=\cap_{i \in I} H_i$. Khi đó $H \ne \text{\O}$ vì $e \in H$. Với mọi $x,y \in H$ ta có $x,y \in H_i, \forall i \in I$ nên theo [Định lý 5.3](#53-định-lý), $x^{-1}y \in H_i, \forall i in I$, nghĩa là $x^{-1}y \in H$. Suy ra $H \le G$. $\quad \blacksquare$

Bây giờ cho $S$ là một tạp hợp con của nhóm $G$. Ta xét họ tất cả các nhóm con của $G$ chứa $S$. Họ này không rỗng vì chứa $G$. Thẹo [Định lý 5.5](#55-định-lý) giao của họ đó là một nhóm con của $G$. Hiển nhiên đây là một nhóm con nhỏ nhất của $G$ chứa $S$. Ta có định nghĩa sau:

### 5.6. Định nghĩa

Cho $S$ là một tập con của nhóm $G$. _Nhóm con sinh bởi_ $S$ là nhóm con nhỏ nhất của $G$ chứa $S$ và được ký hiệu là $\left< S \right>$. Tập hợ $S$ được gọi là _tập sinh_ của nhóm $\left< S \right>$. Nếu $S$ hữu hạn: $S=\{x_1,...,x_n\}$ thì ta nói $\left< S \right>$ là _nhóm hữu hạn sinh_ với phần tử sinh $x_1,...,x_n$ mà ta thường ký hiệu nhóm này là $\left< x_1,...,x_n \right>$.

Định lý sau đây mô tả các nhóm con sinh bởi một tập hợp:

### 5.7. Định lý

_CHo $S$ là một tập con của $G$. Khi đó:_

_(i) Nếu $S \ne \text{\O}$ thì $\left< S \right> = \{e\}$._

_(ii) Nếu $S \ne \text{\O}$ thì_

$$
\left< S \right> = \{ x_1^{\varepsilon_1}...x_n^{\varepsilon_n} \mid n \in \mathbb{N}^*, x_i \in S, \varepsilon_i=\pm 1 \}
$$

**Chứng minh.** Khẳng định (i) là hiển nhiên. Ta chứng minh (ii). Thật vậy, ký hiệu vế phải của đẳng thức trong (ii) là $H$. Vì nhóm con $\left< S \right>$ chứa tất cả các phần tử $x_i$ của $S$ nên $\left< S \right>$ chứa $H$. Mặt khác, do cách đặt $H$ ta thấy nếu $x,y \in H$ thì $xy \in H$ và $x^{-1} \in H$ nên $H$ là một nhóm con của $G$. Từ đây, do $H$ chứa $S$ nên ta có $H$ chứa $\left< S \right>$. Suy ra $H = \left< S \right>$. $\quad \blacksquare$

### 5.8. Ví dụ

1. Ta có $\mathbb{Z} = \left< 1 \right>$ và $\mathbb{Q} = \left< \frac{1}{n} \mid n \in \mathbb{N}^* \right>$.
2. Ta có $\mathbb{Q}^* = \left< P \right>$, trong đó $P=\{{-1} \cup p \}$ với $p$ nguyên tố dương.
3. Xét nhóm hoá vị $S_n$. Vì mỗi phpeps hoán vị dều được phân tích thành tích các chuyển vị nên $S_n$ là nhóm sinh bởi các chuyển vị.

### 5.9. Chú ý

Nếu $H$ và $K$ là hai nhóm con của nhóm $G$ thì $H \cup K$ không nhất thiết là một nhóm con của $G$ (Xem [bài tập 1.20](/blog/dai-so-dai-cuong/chuong-i-nhom/bai-tap-chuong-i#bài-120)). Ta ké hiệu $H \vee K$ để chỉ nhóm con sinh bởi $H \cup K$.

## 6. Nhóm con cyclic và nhóm cyclic

### 6.1. Định nghĩa

Cho $G$ là một nhóm. Nhóm con $\left< a \right>$ của $G$ sinh bởi phần tử $a \in G$ đuọc gọi là _nhóm con cyclic sinh bởi_ $a$. Nếu tồn tại phần tử $a \in G$ sao cho $\left< a \right> = G$ thì ta nói $G$ là một _nhóm cyclic_ và $a$ là _phần tử sinh_ của $G$.

Từ [Định lý 5.7](#57-định-lý) ta suy ra mệnh đề sau:

### 6.2. Mệnh đề

_Nhóm con cyclic sinh bởi $a$ là tập hợp gồm tất cả các lũy thừa $a^n$ với $n \in \mathbb{Z}$, nghĩa là $\left< a \right> = \{ a^n \mid n \in \mathbb{Z} \}$._

Cho $(G,\cdot)$ là một nhóm và $a \in G$. Xét nhóm con cyclic $\left< a \right>$. Khi đó có hai trường hợp có thể xảy ra:

**Trường hợp 1.** Tất cả các luỹ thừa $a^n(n \in \mathbb{Z})$ đều khác nhau từng đôi một. Trong trường hợp này $\left< a \right>$ là nhóm vô hạn.

**Trường hợp 2.** Tồn tại những luỹ thừa của $a$ bằng nhau, chẳng hạn $a^k = a^l(k > l)$. Khi đó $a^{k-l}=e$ với $k-l > 0$. Do đó tồn tại những số nguyên dương $m$ sao cho $a^m=e$. Gọi $n$ là số nguyên dương nhỏ nhất sao cho $a^n=e$. Khi đó các phần tử $e,a,...,a^{n-1}$ đôi một khác nhau và $\left< a \right> =\{e,a,...,a^{n-1}\}$, Thật vậy, với $0 \le i < j \le n-1$, vì $0 < j-i < n$ nên do tính chất nhỏ nhất của $n$ suy ra $a^{j-i} \ne e$, nghĩa là $a^j \ne a^i$. Hơn nữa, với $x \in \left< a \right>$, tồn tại $m \in \mathbb{Z}$ sao cho $x=a^m$. Chia $m$ cho $n$ ta tìm được $q,r \in \mathbb{Z}$ với $0 \le r \le n-1$ sao cho $m=qn+r$. Khi đó

$$
x=a^m=a^{qn+r}=(a^n)^q a^r=e^qa^r=a^r
$$

và khẳng định trên được chứng minh. $\quad \blacksquare$

Tóm lại, nếu tất cả các luỹ thừa của $a$ đều khách nhau thì $\left< a \right>$ là nhóm vô hạn, còn nếu tồn tại những luý thừa của $a$ bằng nhau thì $\left< a \right>$ là nhóm hữu hạn cấp $n: \left< a \right> = \{e,a,...,a^{n-1}\}$, trong đó $n$ là số nguyên dương nhỏ nhất sao cho $a^n=e$. Từ đây ta có định nghĩa sau:

### 6.3. Định nghĩa

_Cấp_ của một phần tử $a$ trong nhóm $G$ là cấp của nhóm con cyclic $\left< a \right>$. Ta thường ký hiệu $o(a)$ hay $\left| a \right|$ để chỉ cấp của phần tử $a$.

Từ [Định nghĩa 6.3](#63-định-nghĩa) và theo lý luận trên ta có hệ quả sau:

### 6.4. Hệ quả

_Cho $(G,\cdot)$ là một nhóm và $a \in G$. Ta có:_

_(i) $a$ có cấp vô hạn khi và chỉ khi với mọi $k \in \mathbb{Z}$, nếu $a^k=e$ thì $k=0$._

_(ii) $a$ có cấp hữu hạn khi và chỉ khi tồn tại $k \in \mathbb{Z}^*$ sao cho $a^k=e$._

_(iii) Nếu $a$ có cấp hữu hạn thì cấp của $a$ là số nguyên dương $n$ nhỏ nhất sao cho $a^n=e$. Hơn nữa, khi đó với mọi $k \in \mathbb{Z}, a^k=e$ khi và chỉ khi $k$ là bội số của $n$._

### 6.5. Ví dụ

1. Nhóm cộng các số nguyên $\mathbb{Z}$ là nhóm cyclic sinh bởi 1.
2. Với mỗi $n$ nguyên dương, quan hệ đồng dư modulo $n$ trên $\mathbb{Z}$ định bởi $z \equiv y \mod n \Leftrightarrow x-y$ chia hết cho $n$.

   Đây là một quan hệ tương đương trên $\mathbb{Z}$ với các lớp tương đương là $\overline{x} = \{x+kn \mid k \in \mathbb{Z}\}$.

   Tập thương của $\mathbb{Z}$ theo quan hệ đồng dư modulo $n$ định bởi $\mathbb{Z}_n=\{\overline{x} \mid x \in \mathbb{Z}\}=\{\overline{0},\overline{1},...,\overline{n-1}\}$.

   Trên $\mathbb{Z}_n$ ta định nghĩa phép toán cộng như sau: $\overline{x}+\overline{y}=\overline{x+y}$.

   Kiểm chứng dễ dàng rằng định ghĩa trên được hoàn toàn xác định và $\mathbb{Z}_n$ trở thành một nhóm giao hoán, Hơn nữa, $\mathbb{Z}_n$ là nhóm cyclic hữu hạn cấp $n$ sinh bởi $\overline{1}$. Ta gọi $\mathbb{Z}_n$ là _nhóm cộng các số nguyên modulo $n$._

3. Trong nhóm hoán vị $S_n$, một $r$-chu trình $\sigma=\{i_1 \; i_2 \; ... \; i_r\}$ luôn luôn có cấp $r$ vì $\sigma^r=Id$ và $\sigma^l \ne Id$ với mọi $0<l<r$.

### 6.6. Định lý

_Mọi nhóm con của nhóm cyclic đều là nhóm cyclic. Hơn nữa, nếu $H \le \left< a \right>$ và $H \ne \{e\}$ thì $H=\left< a^n \right>$ trong đó $n$ là số nguyên dương nhỏ nhất sao cho $a^n \in H$._

**Chứng minh.** Giả sử $H \subset \left< a \right>$. Nếu $H=\{e\}$ thì hiển nhiên $H$ là nhóm con cyclic sinh bởi $e$. Xét trường hợp $H \ne \{e\}$. Khi đó tồn tại $k \in \mathbb{Z}^*$ sao cho $a^k \in H$. Vì $a^k$ và $a^{-k}=(a^k)^{-1}$ đều thuộc $H$ nên có thể khẳng định rằng tồn tại $l \in \mathbb{N}^*$ sao cho $a^l \in H$. Gọi $n$ là sô nguyên dương nhỏ nhất sao cho $a^n \in H$. Ta chứng minh $H = \left< a^n \right>$. Thật vậy, hiển nhiên $\left< a^n \right> \subseteq H$. Ngược lại, cho $x=a^m \in H$. Lấy $m$ chia cho $n$ ta tìm được $q,r \in \mathbb{Z}$ sao cho $m=qn+r$ với $0 \le r < n$. Vì $a^r=a^m(a^n)^{-q} \in H$ nên theo định nghĩa của $n$ ta phai có $r=0$, nghĩa là $m=qn$ và $x=(a^n)^q \in \left< a^n \right>$. Điều này chứng tỏ $H \subset \left< a^n \right>$. Vậy $H = \left< a^n \right>$. $\quad \blacksquare$

Từ [Định lý 6.6](#66-định-lý) ta suy ra hệ quả sau:

### 6.7. Hệ quả

$H$ _là một nhóm con của nhóm cộng các số nguyên $\mathbb{Z}$ khi và chỉ khi $H$ có dạng $n \mathbb{Z}$ với $n \in \mathbb{N}$, trong đó_

$$
n \mathbb{Z} = \{ nk \mid k \in \mathbb{Z} \}
$$

## 7. Nhóm con chuẩn tắc và nhóm thương

### 7.1. Định lý

_Cho $(G,\cdot)$ là một nhóm và $H$ là một nhóm con của $G$. Xét quan hệ $\sim$ trên $G$ như sau:_

$$
x \sim y \Leftrightarrow x^{-1}y \in H
$$

_Khi đó_

_(i) $\sim$ là một quan hệ tương đương trên $G$._

_(ii) Lớp tương đương chứa $x$ là $\overline{x} = xH$, trong đó_

$$
xH = \{ xh \mid h \in H \}
$$

Ta gọi $xH$ là _lớp ghép_ của $H$ (bởi phần tử $x$). Tập hợp thương của $G$ theo quan hệ $\sim$, ký hiệu là $G/H$, được gọi là _tập thương_ của $G$ trên $H$ và $\left| G/H \right|$ là _chỉ số_ của nhóm con $H$ trong $G$, ký hiệu là $[G:H]$.

**Chứng minh.** (i) Tính phản xạ: Với mọi $x \in G, x \sim x$ vì $x^{-1}x = e \in H$.

Tính đối xứng: Với mọi $x,y \in G$, nếu $x \sim y$ thì $x^{-1}y \in H$ nên $y^{-1}x = (x^{-1}y)^{-1} \in H$, nghĩa là $y \sim x$.

Tính bắc cầu: Với mọi $x,y,z \in G$, nếu $x \sim y$ và $y \sim z$ thì $x^{-1}y \in H$ và $y^{-1}z \in H$ nên $x^{-1}z = (x^{-1}y)(y^{-1}z) \in H$, nghĩa là $x \sim z$.

Vậy $\sim$ là một quan hệ tương đương trên $G$.

(ii) Ta có

$$
\begin{align*}
x \sim y &\Leftrightarrow x^{-1}y \in H\\
&\Leftrightarrow \exist h \in H, x^{-1}y = h\\
&\Leftrightarrow \exist h \in H, y = xh\\
\end{align*}
$$

Suy ra $\overline{x} = \{ y \in G \mid x \sim y \} = \{ xh \mid h \in H \} = xh$. $\quad \blacksquare$

### 7.2. Chú ý

Hoàn toàn tương tự, ta định nghĩa được quan hệ $\sim'$ trên $G$ như sau:

$$
x \sim' y \Leftrightarrow xy^{-1} \in H
$$

Khi đó $\sim'$ cũng là một quan hệ tương đương trên $G$ và lớp tương đương chứa $x$ là $\overline{x} = Hx$, trong đó $Hx=\{ hx \mid h \in H \}$. Ta gọi $Hx$ là _lớp ghép phải_ của $H$ (bởi phần tử $x$).

Định lý sau đây cho ta thông tin về cấp của các nhóm con của các nhóm hữu hạn.

### 7.3. Định lý Lagrange

_Cho $G$ là một nhóm hữu hạn và $H$ là một nhóm con của $G$. Khi đó_

$$
|G| = |H||G:H|
$$

**Chứng minh.** Trước hết nhận xét rằng nếu $xH$ là một lớp ghép trái thì ánh xạ

$$
\begin{align*}
\varphi: H &\rightarrow xH\\
h &\mapsto xh
\end{align*}
$$

là một song ánh. Thật vậy, $\varphi$ là toàn ánh do định nghĩa của tập hợp $xH$, $\varphi$ là đơn ánh vì nếu $xh=xk$ thì $h=k$ do tính giản ước của phép toán nhân trong nhóm $G$. Như vậy số phần tử của các lớp ghép trái đều bằng nhau và bằng $|H|$, số lớp ghép là $[G:H]$. Do đó

$$
|G|=|H||G:H| \quad \blacksquare
$$

TỪ [Định lý Lagrange](#73-định-lý-lagrange) ta suy ra ngay hệ quả sau:

### 7.5. Hệ quả

_Cho $G$ là một nhóm hữu hạn. Khi đó:_

_(i) Cấp của mỗi nhóm con của $G$ là một ước số của cấp của $G$._

_(ii) Cấp của mỗi phần tử thuộc $G$ là một ước số của cấp của $G$._

_(iii) Nếu $G$ có cấp nguyên tố thì $G$ là nhóm cyclic và $G$ được sinh bởi một phần tử bất kỳ khác $e$._

Chú ý rằng nếu $H$ là một nhóm con tuỳ ý của $G$ thì tập thương $G/H$ như đã xây dựng trong [Định lý 7.1](#71-định-lý) không nhất thiết là một nhóm. Sau đây chúng ta đề cập đến một loại nhóm con đặc biệt mà ứng với nhóm con loại đó tập hợp thương trở thành một nhóm.

### 7.5. Định nghĩa

Một nhóm con $H$ của nhóm $(G,\cdot)$ được gọi là _chuẩn tắc_ nếu với mọi $x \in G$ và $h \in H, x^{-1}hx \in H$. Ký hiệu $H \triangleleft G$ để chỉ $H$ là một nhóm con chuẩn tắc của $G$.

### 7.6. Mệnh đề

_Cho $H$ là một nhóm con của nhóm $(G,\cdot)$. Các mệnh đề sau tương đương:_

_(i) $H \triangleleft G$;_

_(ii) $\forall x \in G, x^{-1}Hx \subset H$;_

_(iii) $\forall x \in G, x^{-1}Hx = H$;_

_(iv) $\forall x \in G, xH = Hx$;_

_trong đó $x^{-1}Hx=\{ x^{-1}hx \mid h \in H \}$._

**Chứng minh.** (i) $\Leftarrow$ (ii) Hiển nhiên do định nghĩa.

(ii) $\Leftarrow$ (iii) Với giả thuyết (ii) ta có $x^{-1}Hx \subset H$. Mặt khác $xHx^{-1} = (x^{-1})^{-1}H(x^{-1}) \subset H$ nên $H \subset x^{-1}Hx$. Từ đó $x^{-1}Hx=H$.

(iii) $\Leftarrow$ (iv) Theo giải thuyết (iii), $x^{-1}Hx=H$ nên $xH=x(x^{-1}Hx)=Hx$.

(iv) $\Leftarrow$ (i) Với mọi $x \in G$ và $h \in H$ ta có $hx \in Hx = xH$ nên tồn tại $k \in H$ sao cho $hx = xk$. Suy ra $x^{-1}hx = k \in H$. Điều này chứng tỏ $H \triangleleft G$. $\quad \blacksquare$

### 7.7. Nhận xét

1. Nếu $G$ giao hoán thì mọi nhóm con của $G$ đều chuẩn tắc.
2. Các nhóm con tầm thường $\{e\}$ và $G$ đều chuẩn tắc trong $G$.

### 7.8. Ví dụ

1. Nhóm thay phiên bậc $n$ (Xem [Ví dụ 5.4](#54-ví-dụ)) là nhóm con chuẩn tắc của nhóm hoán vị $S_n$ vì mọt hoán vị chẵn $\tau$ ta có $\sigma^{-1}\tau\sigma$ cũng là hoán vị chẵn với mọi hoán vị $\sigma \in S_n$.

2. Nhóm tuyến tính đặc biệt $SL(n,\mathbb{R})$ (Xem [Ví dụ 5.4](#54-ví-dụ)) là nhóm on chuẩn tắc của nhóm tuyến tính đầy đủ $GL(n,\mathbb{R})$ vì với mọi $X \in GL(n,\mathbb{R})$ và $A \in SL(n,\mathbb{R})$ ta có

   $$
   \begin{align*}
   &\det(X^-1AX)\\
   &= (\det X)^{-1} (\det A) (\det X)\\
   &= \det(A) = 1
   \end{align*}
   $$

   nghĩa là $X^{-1}AX \in SL(n,\mathbb{R})$.
   Khi $H$ là một nhóm con chuẩn tắc của $G$ thì tập thương $G/H$ trở thành một nhóm như trong định lý sau:

### 7.9. Định lý

_Cho $G$ là một nhóm và $H$ là nhóm con chuẩn tắc của $G$. Khi đó:_

_(i) Lớp $xyH$ chỉ phụ thuộc vào các lớp $xH$ và $yH$ mà không phụ thuộc vào sự lựa chọn của các phần tử đại diện $x,y$ của các lớp đó._

_(ii) Tập thương $G/H$ cùng với phép toán nhân định bởi $(xH)(yH) = xyH$ là một nhóm, gọi là nhóm thương của $G$ trên $H$._

**Chứng minh.** (i) Giả sử $x_iH=xH$ và $y_qH=yH$, nghĩa là $x^{-1}x_1 \in H$ và $y^{-1}y_1 \in H$. Ta cần chứng minh $x_1y_1H=xyH$, nghĩa là $(xy)^{-1}(x_1y_1) \in H$. Thật vậy

$$
\begin{align*}
&(xy)^{-1}(x_1y_1)\\
&= y^{-1}x^{-1}x_1y_1\\
&= [y^{-1}x^{-1}x_1y](y^{-1}y_1)
\end{align*}
$$

Phần tử sau cùng thuộc $H$ do $x^{-1}x_1$ và $y^{-1}y_1$ đều thuộc $H$ và $H \triangleleft G$.

(ii) Do (i) phép toán nhân được định nghĩa như trong (ii) được hoàn toàn xác định. Tính kết hợp của phép toán nhân trên $G/H$ được suy từ tính kết hợp của phép toán nhân trên $G$. Phần tử đơn vị trong $G/H$ chính là lớp $eH=H$, trong đó $e$ là phần tử đơn vị của $G$, còn phần tử nghịch đảo của lớp $xH$ chính là $x^{-1}H$.

### 7.10. Nhận xét

1. Nếu $G$ là một nhóm giao doán thì nhóm thương $G/H$ cũng giao hoán. Chiều đảo không đúng.
2. Với $H \le G$, nếu tập thương $G/H$ là một nhóm với phép toán được định nghĩa như trên $((xH)(yH)=xyH)$ thì $H \triangleleft G$. Thật vậy, với mọt $x \in G$ và $h \in H$ ta có $x^{-1}hxH = (x^{-1}H)(hH)(xH) = (x^{-1}H)H(xH) = (x^{-1}H)(xH) = x^{-1}xH = H$ nên $x^{-1}hx \in H$.

### 7.11. Ví dụ

1. Vì nhóm cộng các số nguyên $\mathbb{Z}$ giao hoán nên với mỗi $n$ nguyên dương nhóm con $n\mathbb{Z}$ chuẩn tắc trong $\mathbb{Z}$. Ứng với nhóm con $H=n\mathbb{Z}$, quan hệ $\sim$ trong [Định lý 7.1](#71-định-lý) định bởi $x \sim y \Leftrightarrow x-y \in n\mathbb{Z} \Leftrightarrow x-y$ chia hết cho $n$.
   Như vậy, $\sim$ chính là quan hệ đồng dư $\mod n$ trên $\mathbb{Z}$ và nhóm thương $\mathbb{Z}/n\mathbb{Z}$ chính là nhóm cộng $\mathbb{Z}_n$ các số nguyên $\mod n$ trong [Ví dụ 6.5](#65-ví-dụ),
2. Theo [Ví dụ 7.8](#78-ví-dụ), $A_n \triangleleft S_n$. Nếu $\sigma$ và $\tau$ là hai hoán vị lẻ thì $\sigma^{-1}\tau$ là hoán vị chẵn nên $\sigma^{-1}\tau \in A_n$, từ đó $\sigma A_n = \tau A_n$. Điều này chứng tỏ nhóm thương $S_n/A_n$ có đúng hai phần tử: $S_n/A_n = \{A_n, \overline{A_n}\}$, trong đó $\overline{A_n} = S_n \backslash A_n$.

## 8. Đồng cấu

### 8.1. Định nghĩa

Một ánh xạ $f$ từ nhóm $G$ vào nhóm $G'$ được gọi là _đồng cấu (nhóm)_ nếu $f$ bảo toàn phép toán, nghĩa là với mọi $x,y \in G$,

$$
f(xy)=f(x)f(y)
$$

Một dồng cấu từ nhóm $G$ và $G$ được gọi là một _tự đồng cấu_ của $G$. Một đồng cấu đồng thời là đơn ánh, toàn ánh, hay song ánh được gọi lần lượt là _đơn cấu_, _toàn cấu_, hay _đẳng cấu_. Một tự đồng cấu song ánh được gọi là một tự đẳng cấu. Nếu tồn tại một dẳng cấu từ nhóm $G$ vào nhóm $G'$ thì ta nói $G$ đẳng cấu với $G'$, ký hiệu $G \simeq G'$.

### 8.2. Ví dụ

1. Ánh xạ đồng nhất $id_G$ của nhóm $G$ là một tự đẳng cấu, gọi là _tự đẩng cấu đồng nhất_ của $G$.
2. Giải sử $H$ là một nhóm con của nhóm $G$. Khi đó ánh xạ bao hàm $i_H: H \rightarrow G$ $(i_H(x)=x)$ là một đơn cấu, gọi là _đơn cấu_ chính tắc.
3. Giả sử $H$ là một nhóm con chuẩn tắc của nhóm $G$. Khi đó ánh xạ $\pi: G \rightarrow G/H$ định bởi $\pi(x)=xH$ là một toàn cấu, gọi là _toàn cấu chính tắc_.
4. Giả sử $G$ và $G'$ là hai nhóm tuỳ ý. Khi đó ánh xạ $f: G \rightarrow G'$ định bởi $f(x)=w'$ ($e'$ là phần tử trung hoà của $G'$) là một đồng cấu, gọi là _đồng cấu tầm thường_.
5. Ánh xạ $x \mapsto \cos 2 \pi x + i \sin 2 \pi x$ là một đồng cấu từ nhóm cộng các số thực $\mathbb{R}$ vào nhóm nhân các số phức khách không $\mathbb{C}^*$.
6. Ánh xạ $x \mapsto e^x$ là một dẳng cấu từ nhóm cộng các số thực $\mathbb{R}$ lên nhóm nhân $\mathbb{R}^+$ các số thực dương.
7. Ánh xạ $x \mapsto \ln x$ là một đẳng cấu từ nhóm nhân $\mathbb{R}^+$ các số thực dương lên nhóm cộng các số thực $\mathbb{R}$.
8. Ánh xạ $sgn: S_n \rightarrow (\{-1;1\},.)$ là một đồng cấu.
9. Ánh xạ $\det: GL(n,\mathbb{R}) \rightarrow \mathbb{R}^*$ là một toàn cấu.
10. Cho $(G,.)$ là một nhóm và $a \in G$. Ánh xạ $\varphi: G \rightarrow G$ định bởi $\varphi_a(x)=axa^{-1}$ là một tự dẵng cấu của $G$. Thật vậy, $\varphi_a$ là một đồng cấu vì $\forall x,y \in G, \varphi_a(xy)=a(xy)a^{-1}=(axa^{-1})(aya^{-1})=\varphi_a(x)\varphi_a(y)$.

    Mặc khác, $\varphi_a$ là một song ánh vì với mỗi $y \in G$, tồn tại duy nhất $x=a^{-1}ya \in G$ sao cho $y=\varphi_a(x)$. Ta gọi $\varphi_a$ là một _tự dẳng cấu trong_ của nhóm $G$.

Từ [Định nghĩa 8.1](#81-định-nghĩa) ta suy ra các tính chất cơ bản của đồng cấu nhóm như sau:

### 8.3. Mệnh đề

_Nếu $f: G \rightarrow G'$ là một đồng cấu nhóm thì $f(e)=e'$ và $f(x^{-1})=(f(x))^{-1}$ với mọi $x \in G$ ($e$ và $e'$ lần lượt là các phần tử đơn vị của các nhóm $G$ và $G'$)._

**Chứng minh.** Từ đẳng thức $ee=e$ ta có $f(e)f(e)=f(e)$ và tính giản ước của phép nhân trong nhóm $G'$ cho ta $f(e)=e'$. Mặt khác, với mọi $x \in G$, từ đẳng thức $x^{-1}x=w$ ta suy ra $f(x^{-1})f(x)=e'$ nên $f(x^{-1})=(f(x))^{-1}$. $\quad \blacksquare$

### 8.4. Mệnh đề

_Tích của hai đồng cấu nhóm là một đồng cấu nhóm. Đặc biệt, tích của hai đơn cấu (tương ứng: toàn cấu, đẳng cấu) là một đơn cấu (tương ứng: toàn cấu, đẳng cấu)._

**Chứng minh.** Giả sử $f: G \rightarrow G'$ và $g: G' \rightarrow G''$ là các đồng cấu nhóm. Xét ánh xạ tích $g \circ f$, ta có với mọi $x,y \in G$. $(g \circ f)(xy)=g(f(xy))=g(f(x)f(y))=g(f(x))g(f(y))(g \circ f)(x)(g \circ f)(y)$ nên $g \circ f$ vẫn còn là đồng cấu nhóm. $\quad \blacksquare$

### 8.5. Mệnh đề

_Ánh xạ ngược của một dẳng cấu nhóm là một đẳng cấu nhóm._

**Chứng minh.** Giả sử $f: G \rightarrow G'$ là một đẳng cấu nhóm. Vì $f^{-1}: G' \rightarrow G$ cũng là song ánh nên ta chỉ cần chứng minh $f^{-1}$ là đồng cấu. Thật vậy, với mọi $x',y' \in G'$, tồn tại $x,y \in G$ sao cho $x'=f(x)$ và $y'=f(y)$ nên $f^{-1}(x'y')=f^{-1}(f(x)f(y))=f^{-1}(f(xy))=(f^{-1} \circ f)(xy) = xy = f^{-1}(x') f^{-1}(y')$. Vậy $f^{-1}$ là đồng cấu và do đó là đẳng cấu. $\quad \blacksquare$

### 8.6. Chú ý

Do các [Mệnh đề 8.4](#84-mệnh-đề) và [8.5](#85-mệnh-đề) ta thấy quan hệ đẵng cấu $\simeq$ giữa các nhóm là một quan hệ tương đương, nghĩa là có ba tính chất phản xạ, đối xứng, và bắc cầu.

### 8.7. Định lý

_Cho đồng cấu nhóm $f: G \rightarrow G'$ và $H$ là một nhóm con của $G$, $H'$ là một nhóm con của $G'$. Khi đó:_

_(i) $f(H)$ là một nhóm con của $G'$._

_(ii) $f^{-1}(H')$ là một nhóm con củ $G$. Hơn nữa, nếu $H'$ là nhóm con chuẩn tắc của $G'$ thì $f^{-1}(H')$ là nhóm con chuẩn tắc của $G$._

_Đặc biệt, $Imf = f(G)$ là nhóm con của $G'$ và $Kerf = f^{-1}(e')$ là nhóm con chuẩn tắc của $G$._

Ta gọi $Imf$ là _ảnh_ của $f$ và $Kerf$ là _hạt nhân_ của $f$.

**Chứng minh.** (i) Vì $e \in H$ nên $e' = f(e) \in f(H)$. Với mọi $x',y' \in f(H)$, tồn tại $x,y \in H$ sao cho $x'=f(x), y'=f(y)$ nên $(x')^{-1}y'=f(x)^{-1}f(y)=f(x^{-1})f(y)=f(x^{-1}y) \in f(H)$ do $x^{-1}y \in H$. Theo [Định lý 5.3](#53-định-lý), $f(H) \le G'$.

(ii) Vì $f(e)=e' \in H'$ nên $e=f^{-1}(H')$. Với mọi $x,y \in f^{-1}(H')$ ta có $f(x) \in H'$ và $f(y) \in H'$ nên $f(x^{-1}y)=(f(x))^{-1}f(y) \in H'$, nghĩa là $x^{-1}y \in f^{-1}(H')$. Điều này chứng tỏ $f^{-1}(H') \le G$. Bây giờ giả sử $H' \triangleleft G'$. Khi đó với mọi $x \in G$ và $h \in f^{-1}(H')$ ta có $f(h) \in H'$ nên $f(x^{-1}hx)=(f(x))^{-1}f(h)f(x) \in H'$ do $H'$ chuẩn tắc. Từ đó $x^{-1}hx \in f^{-1}(H')$. Lý luận trên chứng tỏ $f^{-1}(H') \triangleleft G$.

Cuối cùng nhận xét rằng $G \le G$ và $\{e'\} \triangleleft G'$ nên theo kết quả trên ta có khẳng định sau cùng của định lý. $\quad \blacksquare$

Theo lý thuyết ánh xạ, hiển nhiên một đồng cấu nhóm $f: G \rightarrow G'$ là toàn cấu khi và chỉ khi $Imf=G'$. Định lý sau đây cho ta một dấu hiệu rất đơn giản để nhận biết một đồng cấu có là đơn cấu hay không.

### 8.8. Định lý

_Đồng cấu nhóm $f: G \rightarrow G'$ là đơn cấu khi và chỉ khi $Kerf=\{e\}$._

**Chứng minh.** Chiều thuận là hiển nhiên vì $Kerf \le G$ và $Kerf$ chứa không quá một phần tử do $f$ là đơn ánh. Đảo lại, giả sử $Kerf=\{e\}$. Khi đó với mọi $x,y \in G$ thoả $f(x)=f(y)$ ta có $f(x^{-1}y)=(f(x))^{-1}f(y)=e'$ nên $x^{-1}y \in Kerf$, suy ra $x^{-1}y=e$, nghĩa là $x=y$. Vậy $f$ đơn ánh. $\quad \blacksquare$

### 8.9. Định lý đẳng cấu 1

_Cho đồng cấu nhóm $f: G \rightarrow G'$. Khi đó ánh xạ $\overline{f}: G/Kerf \rightarrow G'$ định bởi $\overline{f}(xKerf)=f(x)$ là một đơn cấu. Đặc biệt, $G/Kerf \simeq Imf$._

**Chứng minh.** Đặt $H=Kerf$. Vì $H \triangleleft G$ nên ta lập được nhóm thương $G/H$. Xét tương ứng $f: G/H \rightarrow G'$ định bởi $\overline{f}(xH)=f(x)$ ta có với mọi $x,y \in G$:

$$
\begin{align*}
\overline{f}(xH) = \overline{f}(yH) &\Leftrightarrow f(x)=f(y)\\
&\Leftrightarrow (f(x))^{-1}f(y)=e'\\
&\Leftrightarrow f(x^{-1})f(y)=e'\\
&\Leftrightarrow f(x^{-1}y)=e'\\
&\Leftrightarrow x^{-1}y \in H\\
&\Leftrightarrow xH=yH\\
\end{align*}
$$

Chiều ($\Leftarrow$) chứng tỏ $\overline{f}$ là một ánh xạ, chiều ($\Rightarrow$) chứng tỏ $\overline{f}$ là một đơn ánh. Bây giờ ta kiểm chứng $\overline{f}$ là một đồng cấu. Thật vậy, với mọi $x,y \in G$:

$$
\begin{align*}
\overline{f}((xH)(yH)) &= \overline{f}(xyH)\\
&= f(xy)\\
&= f(x)f(y)\\
&= \overline{f}((xH)\overline{f}(yH))
\end{align*}
$$

Vậy $\overline{f}$ là đơn cấu. Khẳng định sau cùng trong Định lý được suy tiwf lý thuyết về ánh xạ. $\quad \blacksquare$

### 8.10. Định lý đẳng cấu 2

_Cho $G$ là một nhóm và $H$, $K$ là hai nhóm con của $G$, hơn nữa $H$ chuẩn tắc trong $G$. Khi đó $HK \le G$, $H \triangleleft HK$, $H \cap K \triangleleft K$, và $K/H \cap K \simeq HK/H$ qua đẳng cấu $k(H \cap K) \mapsto kH$, trong đó $HK=\{ hk \mid h \in H, k \in K \}$._

**Chứng minh.**

1. $HK \le G$: Hiển nhiên $e = ee \in HK$. Giả sử $h_1k_1, h_2k_2$ là hai phần tử của $HK$. Khi đó:

   $$
   \begin{align*}
   (h_1k_1)^{-1}(h_2k_2) &= h_1^{-1}k_1^{-1}h_2k_2\\
   &= [k_1^{-1}(h_1^{-1}h_2)k_1][k_1^{-1}k_2]
   \end{align*}
   $$

   Chú ý rằng $h_1^{-1}h_2 \in H$ nên $k_1^{-1}(h_1^{-1}h_2)k_1 \in H$ do $H \triangleleft G$, hơn nữa $k_1^{-1}k_2 \in K$ do $K \le G$. Do đó $(h_1k_1)^{-1}(h_2k_2) \in HK$. Suy ra $HK \le G$.

2. $H \triangleleft HK$: Vì $H \subset HK$ và $H \triangleleft G$ nên $H \triangleleft HK$.

3. Xét ánh xạ $f: K \rightarrow HK / H$ định bởi $f(k) = kH$. Hiển nhiên $f$ là một đồng cấu nhóm, hơn nữa $f$ còn là toàn cấu vì với mọi $hkH \in HK/H$ ta có $hkH=(hH)(kH)=H(kH)=kH=f(k)$. Mặt khác:

$$
\begin{align*}
\text{Ker} f &= \{ k \in K \mid f(k)=H \}\\
&= \{ k \in K \mid kH=H \}\\
&= \{ k \in K \mid k \in H \}\\
&= H \cap K\\
\end{align*}
$$

Do đó $H \cap K \triangleleft K$ và theo [Định lý 8.9](#89-định-lý-đẳng-cấu-1) ta có đẳng cấu $K/H \cap K \simeq HK/H$, trong đó $k(H \cap K) \mapsto kH$

### 8.11. Định lý đẳng cấu 3

_Cho $G$ là một nhóm và $H$ là một nhóm con chuẩn tắc của $G$. Ta có_

_(i) $\mathcal{K}$ là một nhóm con của $G/H$ khi và chỉ khi $\mathcal{K}$ có dạng $\mathcal{K}=K/H$ và $K \le G$ và $H \le K$._

_(ii) $\mathcal{K}$ là một nhóm con chuẩn tắc của $G/H$ khi và chỉ khi $\mathcal{K}$ có dạng $\mathcal{K}=K/H$ với $K \triangleleft G$ và $H \le K$. Hơn nữa, khi đó $(G/H)/(K/H) \simeq G/K$ qua đẳng cấu $xH(K/H) \mapsto xK$._

**Chứng minh.** Xét toàn cấu chính tắc $\pi: G \rightarrow G/H$. Với $\mathcal{K} \le G/H$, đặt $K = \pi^{-1}(\mathcal{K})$ thì $H \le K \le G$ và $\pi(K)=\mathcal{K}$. Do đó khẳng định (i) được chứng minh. Mặt khác, nếu $\mathcal{K} \triangleleft G/H$ thì $K \triangleleft G$ nên ta có khẳng định đầu trong (ii). Hơn nữa, khi đó xét tương ứng $f: G/H \rightarrow G/K$ định bởi $f(xH)=xK$ ta thấy ngay $f$ là một ánh xạ vì nếu $xH=yH$ thì $x^{-1}y \in H$, từ đó $x^{-1}y \in K$, nghĩa là $xK=yK$. Hiển nhiên $f$ là toàn ánh. Ngoài ra do $f((xH)(yH)) = f(xyH) = xyK = (xK)(yK) = f(xH)f(yH)$ nên $f$ là đồng cấu. Cuối cùng ta có

$$
\begin{align*}
\text{Ker}f &= \{ xH \in G/H \mid f(xH)=K \}\\
&= \{ xH \in G/H \mid xK=K \}\\
&= \{ xH \in G/H \mid x \in K \}\\
&= K/H\\
\end{align*}
$$

nên theo [Định lý 8.9](#89-định-lý-đẳng-cấu-1) $(G/H)/(K/H) \simeq G/K$ trong đó $(xH)(KH)\mapsto xK$. $\quad \blacksquare$

### 8.12. Hệ quả

_Mọi nhóm cyclic vô hạn đều đẳng cấu với nhóm cộng các số nguyên $\mathbb{Z}$. Mọi nhóm cyclic hữu hạn cấp $n$ đều đẳng cấu với nhóm cộng $\mathbb{Z}_n$ các số nguyên $\mod n$._

**Chứng minh.** Giả sử $G$ là nhóm cyclic sinh bởi $x$. Xét ánh xạ $f: \mathbb{Z} \rightarrow G$ định bởi $f(m)=x^m$. Dễ thấy $f$ là một đồng cấu từ nhóm cộng các số nguyên $\mathbb{Z}$ và $G$. Khi đó $\text{Ker}f$ là một nhóm con của $\mathbb{Z}$ nên $\text{Ker}f$ có dạng $\text{Ker}f=n\mathbb{Z}$ với $n \in \mathbb{N}$ ([Hệ quả 6.7](#67-hệ-quả)).

Nếu $n=0$ thì $\text{Ker}f=\{0\}$ nên $f$ là đơn cấu và do đó cũng là đẳng cấu. Trong trường hợp này $G$ vô hạn và $G \simeq \mathbb{Z}$.

Nếu $n \gt 0$ thì theo [Định lý 8.9](#89-định-lý-đẳng-cấu-1) $\mathbb{Z}/n\mathbb{Z} \simeq G$. Vì nhóm thương $\mathbb{Z}/n\mathbb{Z}$ chính là nhòm $\mathbb{Z}_n$ (Xem [Ví dụ 7.11](#711-ví-dụ)) nên trong trường hợp này $G$ hữu hạn cấp $n$ và $G \simeq \mathbb{Z}_n$. $\quad \blacksquare$

### 8.13. Ví dụ

Từ [Ví dụ 8.2](#82-ví-dụ) ta thấy

1. Đồng cấu $f: \mathbb{R} \rightarrow \mathbb{C}^*$ định bởi $f(x) = \cos 2 \pi x + i \sin 2 \pi x$ có $\text{Ker}f = \mathbb{Z}$ và $\text{Im}f = U$ trong đó $U= \{ z \in \mathbb{C}^*, |z| = 1 \}$. Do đó theo [Định lý 8.9](#89-định-lý-đẳng-cấu-1) $\mathbb{R}/\mathbb{Z} \simeq U$.

2. Đồng cấu $f = \text{sgn}: S_n \rightarrow (\{-1;1\}, .)$ có $\text{Ker}f=A_n$ và $\text{Im}f=\{\pm 1\}$ nên $S_n/A_n \simeq \{\pm 1\}.$

3. Toàn cấu $f:GL(n,\mathbb{R}) \rightarrow \mathbb{R}^*$ định bởi $f(A)=\det A$ có $\text{Ker}f=\{ A \in GL(n, \mathbb{R}), \det A=1 \} = SL(n,\mathbb{R})$ nên $GL(n,\mathbb{R})/SL(n,\mathbb{R}) \simeq \mathbb{R}^*$.
