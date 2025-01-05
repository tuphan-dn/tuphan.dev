+++
tags = "math, 🇻🇳"
date = "29 August, 2020"
+++

# Chương II. Vành và Trường

## 1. Khái niệm về vành

### 1.1. Định nghĩa

_Vành_ là một tập hợp $R$ cùng với hai phép toán cộng và nhân thoả các tính chất sau:

$(R_1)$ $(R,+)$ là nhóm Abel;

$(R_2)$ $(R,.)$ là nửa nhóm;

$(R_3)$ Phép nhân phân phối đối với phép cộng, nghĩa là với mọi $x,y,z \in R$, ta có

$$
\begin{align*}
x(y+z) = xy+xz;\\
(y+z)x = yx+zx.
\end{align*}
$$

Phần tử trung hoà của phép cộng được gọi là _phần tử không_, ký hiệu là 0; phần tử đối xứng của phần tử $x \in R$ là _phần tử đối_ của $x$ ký hiệu là $-x$. Nếu phép nhân giao hoán thì ta nói vành $R$ _giao hoán_; nếu phép nhân có phần tử đơn vị thì vành $R$ được gọi là _vành có đơn vị_. Phần tử đơn vị được ký hiệu là $e$ hay $1$.

### 1.2. Nhận xét

Cho $R$ là vành có đơn vị $e$. Phần tử $x \in R$ được gọi là khả nghịch nếu $x$ khả đối xứng với phép nhân, nghĩa là tồn tại $y \in R$ sao cho $xy=yx=e$. Ký hiệu $R^* = \{x \in R\}$ với $x$ khả nghịch.

Khi đó $R^*$ là một nhóm đối với phép nhân, gọi là _nhóm các phần tử khả nghịch_ của $R$.

### 1.3. Ví dụ

1. Tập hợp các số nguyên $\mathbb{Z}$ với phép cộng và phép nhân thông thường là vành giao hoán, có đơn vị, gọi là _vành các số nguyên_. Tương tự ta cũng có _vành các số hữu tỷ_ $\mathbb{Q}$, _vành các số thực_ $\mathbb{R}$, _vành các số phức_ $\mathbb{C}$.

2. Trên nhóm cộng $\mathbb{Z}_n$ các số nguyên modulo $n$, ta định nghĩa phép toán nhân như sau: với mọi $\bar{x}, \bar{y} \in \mathbb{Z}_n, \bar{x}\bar{y} = \overline{xy}$. Khi đó $\mathbb{Z}_n$ trở thành vành giao hoán có đơn vị $\bar{1}$.

3. Tập $M(n,\mathbb{R})$ các ma trận vuông cấp $n$ với hệ số thực cùng với phép cộng và nhân ma trận thông thường là vành có đơn vị. Vành này không giao hoán nếu $n \ge 2$.

4. Cho $(G,+)$ là một nhóm Abel. Tập hợp $End(G)$ các tự đồng cấu của nhóm $G$ là vành có đơn vị với phép cộng định bởi:

$$
(f+g)(x) = f(x) + g(x), \forall f,g \in End(G), \forall x \in G,
$$

và phép nhân là phép hợp nối ánh xạ. Vành này không giao hoán nếu $|G| \ge 2$.

5. Giả sử $R_1, R_2, ..., R_n$ là các vành. Khi đó tích Descartes

$$
\prod_{i=1}^n R_i = \{ (x_1,x_2, ..., x_n) \mid x_1 \in R_1, x_2 \in R_2, ..., x_n \in R_n\}
$$

cùng với phép cộng $(x_i)+(y_i) = (x_i+y_i)$ và phép nhân $(x_i)(y_i)=(x_iy_i)$, là một vành, gọi là _vành tích trực tiếp_ của $R_1,R_2,...,R_n$. Hiển nhiên nếu mọi vành $R_i$ đều giao hoán (tương ứng, có đơn vị) thì vành tích trực tiếp cũng giao hoán (tương ứng, có đơn vị).

Từ [Định nghĩa 1.1](#11-định-nghĩa) ta có mệnh đề sau:

### 1.4. Mệnh đề

_Cho $R$ là một vành. Khi đó với mọi $x,y,z \in R$ và $n \in \mathbb{Z}$ ta có_

_(i) $x(y-z) = xy-xz$ và $(y-z)x=yx-zx$._

_(ii) $0x=x0=0$._

_(iii) $x(-y)=(-x)y=-(xy)$ và $(-x)(-y)=xy$._

_(iv) $(nx)y=x(ny)=n(xy)$. Đặc biệt, nếu $R$ có đơn vị $e$ thì $nx=(ne)x=x(ne)$._

**Chứng minh.** (i) Do tính phân phối của phép nhân đối với phép cộng ta có

$$
xy=x[(y-z)+z)]=x(y-z)+xz.
$$

$x(y-z)=xy-xz$. Đăng thức còn lại được chứng minh tương tự.

(ii) Do(i) ta có $0x=(y-y)x=yx-yx=0$. Tương tự $x0=0$.

(iii) Từ (i) và (ii) ta có $x(-y)=x(0-y)=x0-xy=-xy$. Tương tự $(-x)y=-(xy)$. Hơn nữa, $(-x)(-y)=-(-xy)=xy$.

(iv) Ta chứng minh $(nx)y=n(xy)$. Với $n=0$, đẳng thức hiển nhiên đúng. Xét $n >0$, ta có

$$
(nx)y=(x+x+...+x)y=xy+xy+...+xy=n(xy).
$$

Với $n<0$, đặt $m=-n>0$, ta có

$$
(nx)y=[m(-x)]y=m[(-x)y)]=m(-xy)=(-m)(xy)=n(xy).
$$

Vậy $(nx)y=n(xy)$ với mọi $n \in \mathbb{Z}$. Tương tự $x(ny)=n(xy)$.

Nếu $R$ có đơn vị thì $nx=n(ex)=(ne)x$. Tương tự, $nx=x(ne)$. $\quad \blacksquare$

## 2. Vành con, Ideal và vành thương

### 2.1. Định nghĩa

Cho $R$ là một vành.

(i) Tập con $A$ khác rỗng của $R$ được gọi là một _vành con_ của $R$ nếu $A$ ổn định đối với hai phép toán trong vành $R$ và $A$ cùng với hai phép toán cảm sinh là một vành.

(ii) Vành con $I$ của $R$ được gọi là một _ideal trái_ (tương ứng, _ideal phải_) của $R$ nếu với ọi $r \in R$ và $x \in I$ ta có $rx \in I$ (tương ứng, $xr \in I$). Ta nói $I$ là một \_ideal_của $R$ nếu $I$ vừa là ideal trái, vừa là ideal phải của $R$.

### 2.2. Định lý (Đặc trưng của vành con)

_Cho $A$ là một tập con khác rỗng của vành $R$. Các mệnh đề sau tương đương:_

_(i) $A$ là một vành con của $R$;_

_(ii) Với mọi $x,y \in A, x+y \in A, xy \in A, -x \in A$;_

_(iii) Với mọi $x,y \in A, x-y \in A$ và $xy \in A$._

**Chứng minh.** (i) $\Rightarrow$ (ii). Vì $A$ là một vành con của $R$ nên $A$ ổn định đối với phép cộng và phép nhân, nghĩa là $x+y \in A$, và $xy \in A$. Mặt khác, do $(A,+)$ là một nhóm con của $(R,+)$ nên $-x \in A$.

(ii) $\Rightarrow$ (iii). Với mọi $x,y \in A$, ta có $x,(-y) \in A$ nên $x-y=x+(-y) \in A$.

(iii) $\Rightarrow$ (i). Từ giả thuyết (iii), theo [Định lý 5.3, Chương I.](/blog/dai-so-dai-cuong/chuong-i-nhom#53-định-lý) $(A,+)$ là nhóm con của $(R,+)$. Mặt khác, các phép toản cảm sinh cũng có tính chất kết hợp và phân phối nên $A$ là một vành, nghĩa là $A$ là một vành con của $R$. $\quad \blacksquare$

### 2.3. Định lý (Đặc trung của ideal)

Cho $I$ là một tập con khác rỗng của vành $R$. Cá mệnh đề sau tương đương:

_(i) $I$ là một ideal của $R$;_

_(ii) Với mọi $x,y \in I$ và $r \in R, x+y \in I, -x \in I, rx \in I$ và $xr \in I$;_

_(iii) VỚi mọi $x,y \in I$ và $r \in R, x-y \in I, xr \in I$ và $rx \in I$._

**Chứng minh.** Dựa vào [Định lý 2.2](#22-định-lý-đặc-trưng-của-vành-con) và [Định nghĩa 2.1](#21-định-nghĩa). $\quad \blacksquare$

### 2.4. Nhận xét

1. Các tập con $\{0\}$ và $R$ đều là các ideal của $R$, gọi là các _ideal tầm thường_.
2. Nếu vành $R$ giao hoán thì các khái niệm ideal trái, ideal phải và ideal là trùng nhau.
3. Giả sử $R$ là vành có đơn vị và $I$ là một ideal trái hay phải của $R$. Khi đó $I=R \Leftrightarrow I$ chứa ít nhất một phần tử khả nghịch $\Leftrightarrow I$ chứa phần tử đơn vị.
4. Với $I,J$ à hai ideal của $R$, đặt

$$
\begin{align*}
I+J = \{ x+y \mid x\in I, y \in J \}\\
IJ = \{ \sum_{i=1}^n x_iy_i \mid x_i \in I, y_i \in J, n \in \mathbb{N}^* \}
\end{align*}
$$

Khi đó $I+J$ và $IJ$ cũng là các ideal của $R$, gọi là _tổng_ và _tích_ của các ideal $I$ và $J$.

### 2.5. Ví dụ

1. $I$ là ideal của $\mathbb{Z}$ khi và chỉ khi $I$ có dạng $x\mathbb{Z}$ với $n \in \mathbb{Z}$.
2. $M(n,\mathbb{Z})$ là vành con của $M(n,\mathbb{Q})$ nhưng không là ideal.
3. $M(n,2\mathbb{Z})$ là ideal của $M(n,\mathbb{Z})$.

Từ [Định nghĩa 2.1](#21-định-nghĩa) ta thấy giao của một họ khác rỗng các vành con (tương ứng, ideal) của một vành $R$ cũng là một vành con (tương ứng, ideal) của vành $R$.

Giả sử $S$ là một tappj con của vành $R$. Khi đó $S$ chứa trong ít nhất một vành con (tương ứng, ideal) của $R$, chẳng hạn $S \subset R$. Giao của tất cả các vành con (tương ứng, ideal) của $R$ có chứa $S$ là một vành con (tương ứng, ideal) của $R$ có chứa $S$. Ta có định nghĩa sau:

### 2.6. Định nghĩa

Cho $S$ là một tập con khác rỗng của vành $R$. Ta định nghĩa:

(i) Giao của tất cả các vành con của $R$ có chứa $S$ là vành con _sinh bởi_ $S$.

(ii) Giao của tất cả các ideal của $R$ có chứa $S$ là _ideal sinh bởi_ S, ký hiệu là $\left< S \right>$.

Từ định nghĩa ta thấy vành con (tương ứng, ideal) của $R$ sinh bởi tập hợp $S$ chính là vành con (tướng ứng, ideal) nhỏ nhất của $R$ có chứa $S$. Đặc biêt $\{0\}$ là vành con và cũng là idel sinh bởi tập rỗng. Mệnh đề sau đây mô tả vành con và ideal sinh bởi các tập hợp khác rỗng.

### 2.7. Định lý

_Cho $S$ là một tập con khác rỗng của vành $R$. Khi đó_

_(i) Vành con của $R$ sinh bởi $S$ là tập hợp_

$$
\left\{ \sum s_1s_2...s_n \mid s_i \in S, -s_i \in S, n \in \mathbb{N}^* \right\}.
$$

_(ii) Nếu $R$ có đơn vị thì ideal sinh bởi $S$ là tập hợp_

$$
\left< S \right> = \left\{ \sum_{i=1}^n x_i s_i y_i \mid x_i,y_i \in R, s_i \in S, n \in \mathbb{N}^* \right\}.
$$

_(iii) Nếu $R$ giao hoán vó đơn vị thì_

$$
\left< S \right> = \left\{ \sum_{i=1}^n x_i s_i \mid x_i \in R, s_i \in S, n \in \mathbb{N}^* \right\}.
$$

**Chứng minh.** Ta chứng minh (ii). Cá phần còn lại hoàn toàn tương tự và chúng tôi dành cho độc giả. Đặt

$$
I = \left\{ \sum_{i=1}^n x_i s_i y_i \mid x_i,y_i \in R, s_i \in S, n \in \mathbb{N}^* \right\},
$$

ta có $S \subset I$ vì mọi phần tử $s \in S$ đều được viết dưới dạng $s =ese \in I$. Hơn nữa, do cách đặt $I$, theo [Định lý 2.3](#23-định-lý-đặc-trung-của-ideal) ta có ngay $I$ là ideal của $R$. Mặt khác, mọi ideal chứa $S$ đều chứa tất cả các phần tử có dạng

$$
\sum_{i=1}^n x_i s_i y_i (x_i, y_i \in R, s_i \in S)
$$

nên phải chứa $I$. Điều này cho thấy $I$ là ideal nhỏ nhất của $R$ có chứa $S$, nghĩa là $I=\left< S \right>$. $\quad \blacksquare$

### 2.8. Định nghĩa

Cho $S$ là một tập con của vành $R$ và $I = \left< S \right>$. Ta nói $I$ _được sinh ra bởi_ $S$ và $S$ là _tập sinh_ của $I$. Nếu $S$ hữu hạn thì ta nói $I$ _hứu hạn sinh_. Đặc biệt, nếu $S=\{a\}$ thì ta viết $I=\left< a \right>$, gọi là _ideal chính sinh bởi_ $a$.

### 2.9. Nhận xét

Nếu vành $R$ giao hoán, có đơn vị thì ideal chính sinh bởi $a$ là:

$$
\left< a \right> = {xa \mid x \in R}.
$$

Ta có ksy hiệu tập hợp trên là $Ra$.

Xét vành $(R,+,.)$ và $I$ là một ideal tuỳ ý của $R$. Vì phép cộng giao hoán nên nhóm con $(I,+)$ chuẩn tắc trong $(R,+)$ và ta có thể lập được nhóm thương $(R/I,+)$. Định lý sau đây cho thấy ta có thể trang bị cho $(R,+)$ một phép toán nhân để nó trở thành một vành.

### 2.10. Định lý

_Giả sử $I$ là một ideal của vành $(R,+,.)$. Trên nhóm thương $R/I,+)$ ta định nghĩa phép toán nhân như sau:_

$$
(x+I)(y+I)=xy+I
$$

_Khi đó $(R/I,+,.)$ là một vành, gọi là vành thương của $R$ trên ideal $I$._

**Chứng minh.** Trước hết ta chứng minh phép toán nhân được xác định. Thật vậy, gải sử $x+I=x'+I$ và $y+I=y'+I$, nghĩa là $x-x' \in I$ và $y-y' \in I$, hay $x=x'+a$ và $y=y'+b$ với $a,b \in I$ nào đó. Khi đó

$$
xy = (x'+a)(y'+b) =x'y' +x'b +ay' + ab.
$$

Chứ ý rằng $x'b, ay'$ và $ab$ đều thuộc $I$ vì $I$ là ideal của vành $R$. Do đó $xy-x'y' \in I$ hay $xy +I = x'y' +I$. Như vậy phép toán trên $R/I$ được xác định. Do phép nhân trên $R$ có tính kết hợp và phân phối đối với phép cộng nên dễ thấy phép nhân trên $R/I$ được định nghĩa như trêm cũng có tính chất kết hợp và phân phối đối với phép cộng. Điều này chứng tỏ $(R/I,+,.)$ là một vành. $\quad \blacksquare$

### 2.11. Nhận xét

1. Nếu vành $R$ giao hoán thì vành thương $R/I$ cũng giao hoán. Chiều đảo lại không đúng.
2. Nếu vành $R$ có đơn vị $e$ thì vành thương $R/I$ có đơn vị là $e+I$. Chiều đảo lại không đúng.

### 2.12. Ví dụ

Vành thương của vành các số nguyên $,athbb{Z}$ trên ideal $n\mathbb{Z}$ chính là vành $\mathbb{Z}_n$ các số nguyên modulo $n$, trong đó ngoài phép cộng đã biết, ta có phép toán nhân định bởi

$$
(x+n\mathbb{Z})(y+n\mathbb{Z}) = xy +n\mathbb{Z}.
$$

Đây chính là vành mà ta đã xét trong [Ví dụ 1.3](#13-ví-dụ).

## 3. Đồng cấu

## 4. Miền nguyên và trường
