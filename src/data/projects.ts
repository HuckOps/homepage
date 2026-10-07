export interface Project {
  name: string;
  desc: string;
  meta: string;
  url: string;
}

export const projects: Project[] = [
  {
    name: "HuckOps",
    desc: "自己的博客，写点技术，也写点生活。",
    meta: "",
    url: "https://blog.huckops.xyz",
  },
  {
    name: "FaultFlow",
    desc: "一站式混沌工程平台，提供变更、故障全链路管理。",
    meta: "",
    url: "https://github.com/HuckOps/FaultFlow",
  },
  {
    name: "Gaokao-Agent",
    desc: "给高考生用的智能助手，帮忙看看职业方向、评估下志愿。",
    meta: "开发中",
    url: "https://gaokao.huckops.xyz",
  },
  {
    name: "ShortURL",
    desc: "分布式短链接平台，就是那种把长链接变短的东西。",
    meta: "2025 · 前端 + 后端",
    url: "https://s.huckops.xyz",
  },
  {
    name: "Hcoin",
    desc: "基于 ERC20 的公链存证工具，MetaMask、WalletConnect 这些钱包都能用。",
    meta: "开发中",
    url: "https://s.huckops.xyz",
  },
];

export const importent: Project[] = [
  {
    name: "网易云游戏",
    desc: "云游戏，主打高可靠、低延迟——除了容易出问题之外，好像还挺好用的。",
    meta: "",
    url: "https://cg.163.com",
  },
  {
    name: "章鱼云手机",
    desc: "云手机资源，堪称抢票搬砖电商的神器，至于具体用途嘛……那谁知道。",
    meta: "",
    url: "https://zy.16163.com",
  },
  {
    name: "UU远程",
    desc: "远程控制，对标向日葵，想打破向日葵 + TeamViewer 的市场独占。就是太费流量了。",
    meta: "",
    url: "https://uuyc.163.com",
  },
  {
    name: "[R.I.P] Epicoll",
    desc: "一个面向东南亚市场的 NFT 交易平台，已经没了，上三炷香。",
    meta: "",
    url: "",
  },
  {
    name: "小爱同学 & 小米汽车",
    desc: "没别的意思，纯凑个数，只负责做了这俩玩意的后端私有云维护搭建。",
    meta: "",
    url: "https://xiaomi.com",
  },
];