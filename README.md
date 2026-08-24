# SHOU 生存指北 🌊

<p align="center">
  <strong>上海海洋大学校园生活与进阶指南</strong>
</p>

<p align="center">
  <a href="https://github.com/Douglassgs/shou-guide/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-CC--BY--NC--SA--4.0-lightgrey.svg" alt="License">
  </a>
  <a href="https://vitepress.dev/">
    <img src="https://img.shields.io/badge/Powered%20by-VitePress-646cff.svg" alt="VitePress">
  </a>
  <a href="https://pnpm.io/">
    <img src="https://img.shields.io/badge/Package%20Manager-pnpm-F69220.svg" alt="pnpm">
  </a>
  <a href="https://github.com/Douglassgs/shou-guide/pulls">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome">
  </a>
</p>

---

## 📖 项目简介

**《SHOU 生存指北》** 是一份由海大师生与校友共同编写维护的开源校园指南。

受启发于 **南科手册（[sustech.online](https://sustech.online)）** 等优秀开源社区项目，本项目旨在打破信息壁垒，将分散在各处的选课、转专业、评优保研、考研出国、宿舍生活、食堂美食及周边交通等第一手经验系统化整理，为每一位海大人提供实用、中立、靠谱的指南。

---

## 🗂️ 目录大纲

指南分为 **9 大核心模块**：

| 模块目录 | 章节分类 | 核心内容 |
| :--- | :--- | :--- |
| `00-intro` | **序言与导读** | 关于项目、编写原则、贡献指南与开源许可协议 |
| `01-freshman` | **新生起步** | 行前行李清单、迎新报到流程、军训生存指南与校园防诈提醒 |
| `02-life` | **校园生活** | 宿舍园区、水电充值、食堂档口、周边商圈外卖、快递网点与就医报销 |
| `03-transport` | **交通出行** | 校内车辆规范、轨交16号线、临港中运量T1/T2、往返各大枢纽与节假日班车 |
| `04-facilities` | **设施场馆** | 图文信息中心借阅选座、体育馆/游泳馆、期末考研自习室与学生活动空间 |
| `05-service` | **信息化服务** | 校园网认证、WebVPN 远程接入、一网通办、校园卡与全校正版软件福利 |
| `06-academic` | **学在海大** | 选课避坑、GPA 绩点换算、转专业政策、学科竞赛（大创/挑战杯等）、外语考级与毕业要求 |
| `07-future` | **进阶发展** | 推免保研综测、考研备考攻略、出国留学申请与校招求职 |
| `08-culture` | **校园文化** | 百团大战社团招新、进博会小叶子志愿服务、校史传统与地标文化 |
| `09-help` | **常用速查** | 24小时应急电话簿、常用系统网址导航与高频 FAQ 汇总 |

---

## 🛠️ 本地运行与开发

本项目基于 [VitePress](https://vitepress.dev/)构建。

### 环境要求
- [Node.js](https://nodejs.org/) `>= 18.0.0`
- [pnpm](https://pnpm.io/) `>= 9.0.0`

### 启动步骤

1. **克隆仓库**
   ```bash
   git clone https://github.com/Douglassgs/shou-guide.git
   cd shou-guide
   ```

2. **安装依赖**
   ```bash
   pnpm install
   ```

3. **启动本地开发服务器**
   ```bash
   pnpm run docs:dev
   ```
   启动后在浏览器打开即可实时预览。

4. **构建静态页面**
   ```bash
   pnpm run docs:build
   ```

5. **预览构建产物**
   ```bash
   pnpm run docs:preview
   ```

---

## ✍️ 如何参与贡献

我们非常欢迎任何形式的贡献！如果你发现了过时的信息、有用的避坑技巧或想分享自己的心得：

1. **快速修改**：在网页端点击每篇文章底部的 **"一起完善该手册！"**，直接在 GitHub 网页发起编辑；
2. **新增文章**：
   - 在对应模块的文件夹下创建 `.md` 文件；
   - 在文件顶部添加 `order` 序号（无需修改任何配置文件，侧边栏会自动排序）：
     ```markdown
     ---
     order: 1
     ---

     # 文章标题
     ```
3. **提交规范**：提交 Pull Request 时请简要说明修改的原因与背景。

---

## 📄 开源许可与免责声明

- **版权协议**：本项目所有文字内容采用 **[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh)**（知识共享 署名-非商业性使用-相同方式共享 4.0 国际许可协议）发布。
- **免责声明**：本项目由学生及校友自发维护，非上海海洋大学官方组织。涉及学籍异动、转专业、学位授予等关键政策请以学校官方最新文件为准。