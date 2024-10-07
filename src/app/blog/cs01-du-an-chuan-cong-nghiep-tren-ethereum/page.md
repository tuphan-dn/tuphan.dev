+++
tags = "web3, evm, solidity, 🇻🇳"
date = "8 November, 2024"
+++

# CS01: Dự án chuẩn công nghiệp trên Ethereum

![Chạm tới tiêu chuẩn công nghiệp trong phát triển phần mềm web3. Nguồn ảnh: https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-web3](./what-is-web3.webp)

Trong loạt bài này, chúng ta sẽ xây dựng một ứng dụng đếm số on-chain và cố gắng thực hành theo quy trình công nghiệp hiện nay tại các công ty web3. Thông qua đó, bạn sẽ

- Học cách phát triển và kiểm thử smartcontract trên **Ethereum** với **Hardhat**?
- Triển khai smartcontract cùng với một Typescript SDK bằng **Viem**?
- Xây dựng DApp với **RemixJS** và **TailwindCSS**.
- Cho phép nhiều loại ví kết nối và DApp thông qua **Rainbowkit**.
- Cài đặt **Github Action** cho DevOps và đẩy DApp lên **Cloudflare Worker**.

Đặc biệt, toàn bộ quá trình phát triển và bảo trì ứng dụng sẽ tốn 0 đồng.

## Mục lục

1. [Smartcontract bộ đếm on-chain với Hardhat](/blog/cs01-du-an-chuan-cong-nghiep-tren-ethereum/smartcontract-bo-dem-on-chain-voi-hardhat)
2. [Triển khai smartcontract và SDK](/blog/cs01-du-an-chuan-cong-nghiep-tren-ethereum/trien-khai-smartcontract-va-sdk)
3. [Giao diện DApp](/blog/cs01-du-an-chuan-cong-nghiep-tren-ethereum/giao-dien-dapp)
4. [Kết nối ví](/blog/cs01-du-an-chuan-cong-nghiep-tren-ethereum/ket-noi-vi)
5. [DevOps và hạ tầng](/blog/cs01-du-an-chuan-cong-nghiep-tren-ethereum/devops-va-ha-tang)

## Trước khi bắt đầu

Một điều hiển nhiên rằng sẽ có rất nhiều tiêu chuẩn về ngôn ngữ, techstack, và hạ tầng để triển khai một ứng dụng web3 một cách nhanh chóng, hiệu quả, và an toàn, loạt bài này hướng tới các lập trình viên mới làm quen với web3 có nhu cầu xác định được một quy trình làm việc cơ sở, từ đó có thể vươn xa trên con đường trở thành một lập trình viên web3, và hơn thế nữa là một nhà phát triển ứng dụng web3 độc lập.

Trong phạm vi trình bày, các thuật ngữ cơ bản như block header, smartcontract, transaction call, consensus,... sẽ được hiểu là người đọc đã nắm chắc và thoải mái làm việc với chúng.
