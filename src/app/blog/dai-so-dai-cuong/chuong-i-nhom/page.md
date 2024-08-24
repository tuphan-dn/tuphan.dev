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
\begin{aligned}
x' &= x' * e\\
&= x' * (x * x'')\\
&= [x' * x) * x''\\
&= e * x'' = x'' \quad \blacksquare
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
= &x_1(x_2 ... x_n) = x_1 ... x_n \quad \blacksquare
\end{aligned}
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
\begin{aligned}
x_1...x_n &= (x_1...x_{k-1})[x_k(x_{k+1}...x_n)]\\
&= (x_1...x_{k-1})[(x_{k+1}...x_n)x_k]\\
&= (x_1...x_{k-1}x_{k+1}...x_n)x_k\\
&= (x_{\sigma(1)}...x_{\sigma(n-1)})x_{\sigma(n)}\\
&= x_{\sigma(1)}...x_{\sigma(n)} \quad \blacksquare
\end{aligned}
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
3. Với $X=\{1,2,...,n\}$, đặt $ S_n = {\sigma | \sigma: X \rightarrow X}$ là một song ánh. Khi đó $S_n$ với phép hợp nối ánh xạ là một nhóm (có phần tử đơn vị là ánh xạ đồng nhất $Id_X$ và phần tử nghịch đảo của $\sigma \in S_n$ chính là ánh xạ ngược $\sigma^{-1}$). Ta gọi $(S_n,\circ)$ là nhóm hoán vị hay nhóm đối xứng bậc $n$. Đây là một nhóm hữu hạn có cấp $n!$ ([xem 4](#4-nhóm-hoán-vị)).
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
\begin{aligned}
&(x_1...x_n)(x_n^{-1}...x_1^{-1})\\
&= (x_1...x_{n-1})(x_nx_n^{-1})(x_{n-1}^{-1}...x_1^{-1})\\
&= (x_1...x_{n-1})(x_{n-1}^{-1}...x_1^{-1})\\
&= ...\\
&= e
\end{aligned}
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
\begin{aligned}
xx'&=e(xx')=(x''x')(xx')\\
&=x''(x'x)x'=x''ex'=x''x'=e
\end{aligned}
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
   \begin{aligned}
   \sigma&=(1\;2\;5\;3)\\
   \tau&=
   \begin{pmatrix}
   1&2&3&4&5\\
   4&3&5&1&2
   \end{pmatrix}
   \end{aligned}
   $$

   Ta có

   $$
   \begin{aligned}
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
   \end{aligned}
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
   \sigma'_k(i_1)=\sigma(i_1)=\sigma_1(i_1)=i_2,\\
   \sigma'_k(i_2)=\sigma(i_2)=\sigma_1(i_2)=i_3,\\
   \cdots\\
   \sigma'_k(i_r)=\sigma(i_r)=\sigma_1(i_r)=i_1,\\
   $$

   Do đó $\sigma'_k=\sigma_1$. Không mất tính tổng quát ta có thể giả sử $\sigma'_1=\sigma_1$. Khi đó $\sigma_2...\sigma_p=\sigma'_2...\sigma'_q$. Tiếp tục thực hiện như trên, cuối cùng ta được $p=q$ và $\sigma'_i=\sigma_i$ với mọi $1 \le i \le p$. Định lý được chứng minh. $\quad \blacksquare$

   Ví dụ: Trong nhốm hoán vị $S_{10}$ ta có

   $$
   \begin{aligned}
   \sigma &=
   \begin{pmatrix}
   1&2&3&4&5&6&7&8&9&10\\
   3&2&7&9&1&4&8&5&6&10\\
   \end{pmatrix}\\
   &= (1\;3\;7\;8\;5)(4\;9\;6)
   \end{aligned}
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
\begin{aligned}
\sigma &=
\begin{pmatrix}
1&2&3&4&5&6&7&8&9&10\\
3&5&6&4&8&1&7&10&2&9
\end{pmatrix}\\
&= (1\;3\;6)(2\;5\;8\;10\;9\;)\\
&= (1\;6)(1\;3)(2\;9)(2\;10)(2\;8)(2\;5)
\end{aligned}
$$

Vì $\sigma$ được viết dưới dạng tích của 6 chuyển vị nên $sgn(\sigma)=1$ nghĩa là $\sigma$ là một hoán vị chẵn.

### 4.11. Hệ quả

_Nếu $\sigma$ là một $r$-chu trình thì_

_(i) $sgn(\sigma)=(-1)^{r-1}$;_

_(ii) $\sigma$ chẵn $\Leftrightarrow$ $r$ lẻ; và $\sigma$ lẻ $\Leftrightarrow$ $r$ chẵn._

## 5. Nhóm con

## 6. Nhóm con cyclic và nhóm cyclic

## 7. Nhóm con chuẩn tắc và nhóm thương

## 8. Đồng cấu
