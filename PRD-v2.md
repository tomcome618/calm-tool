# CalmTool — PRD v2

> **整合**: 01-research → 02-PRD → 03-pricing → 04-compliance → 05-copy  
> **版本**: v2.0 · 2026-06-16  
> **状态**: 已上线 (LIVE)  
> **域名**: [calmtool.io](https://calmtool.io)  
> **GitHub**: [tomcome618/calm-tool](https://github.com/tomcome618/calm-tool)

---

## 1. Executive Summary 执行摘要

**CalmTool** 是一个纯网页端 wellness 工具站，提供呼吸引导、倦怠自评、数字排毒三个免费工具。无需下载 App、无需注册、无需付费——打开浏览器即用。

- **定位**: "Instant calm tools, zero friction."
- **差异化**: 竞品全是 App（Insight Timer / Calm / Headspace 需下载+订阅），我们做纯净网页端多工具 hub
- **年成本**: $53（仅域名续费）
- **变现**: MVP 全免费，DAU > 200 后上线 Pro（$4.99/月）

---

## 2. Market & Keywords 市场与关键词

### 种子词
zen · mindfulness · meditation · spiritual · inner peace · calm · burnout · anxiety relief · stress relief · digital detox

### 主攻关键词

| 方向 | 月搜(估) | KD(估) | 首页 |
|------|---------|--------|------|
| breathing exercise tool | 8K–12K | 35–45 | /breathe/ |
| burnout self assessment | 3K–5K | 25–35 | /burnout-test/ |
| digital detox planner | 2K–4K | 15–25 | /digital-detox/ |

### 竞品矩阵

| 竞品 | 类型 | 呼吸 | 倦怠 | 排毒 | 弱点 |
|------|------|:--:|:--:|:--:|------|
| Insight Timer | App | ✅ | ❌ | ❌ | 需下载，3200万用户 |
| Calm | App+Web | ✅ | ❌ | ❌ | 付费墙 $14.99/月 |
| Headspace | App | ✅ | ❌ | ❌ | 付费墙 $12.99/月 |
| Healthline | 内容站 | 文章 | 文章 | 文章 | 无交互工具 |
| **CalmTool** | **网页工具** | **✅** | **✅** | **✅** | **新站需时间建权** |

---

## 3. Product Definition 产品定义

### 3.1 ICP 理想用户画像

**主 ICP**：25–45 岁 US 高压职场知识工作者。下午能量低谷、Deadline 前高压、睡前大脑停不下来。想要打开浏览器就能用的免费工具，不愿下载 App 或付费订阅。

**次级 ICP**：学生/全职父母（18–55 岁）、自我优化爱好者（25–35 岁科技从业者）。

### 3.2 站点类型

**工具站 · Multi-Tool Wellness Hub**。3 个独立交互工具 + 聚合首页，纯静态 HTML/CSS/JS，Cloudflare Pages 部署。

### 3.3 NOT-DO 明确不做

| # | 不做 | 原因 |
|---|------|------|
| 1 | 通用冥想计时器 | KD 80+，Insight Timer 寡头 |
| 2 | 纯内容博客 | 非工具站定位 |
| 3 | 移动 App | 超出技术栈 |
| 4 | AI 聊天/诊断 | FDA 法律风险 |
| 5 | 社区/UGC | 审核成本高 |
| 6 | MVP 付费墙 | 免费是护城河 |
| 7 | 用户注册/登录 | 零门槛是核心卖点 |

### 3.4 3 个工具

| # | 工具 | URL | 功能 |
|---|------|-----|------|
| 1 | **Breathing Exercise** | /breathe/ | 4 种呼吸模式 (4-7-8 / Box / Simple Calm / Custom) + CSS 动画圆环 + 计时器 + FAQ |
| 2 | **Burnout Self-Check** | /burnout-test/ | 15 题量表 (MBI-GS 简化) + 即时节分 + 3 维结果 + 建议 |
| 3 | **Digital Detox Planner** | /digital-detox/ | 4 步表单 → 个性化排毒计划卡片 |

---

## 4. Commercial Model 商业模型

### 4.1 成本结构

| 项目 | 年成本 | 说明 |
|------|--------|------|
| calmtool.io 域名 | $53 | .io 续费 |
| Cloudflare Pages | $0 | 免费层无限静态请求 |
| 第三方服务 | $0 | 无 auth/payment/AI API |
| **年总成本** | **$53** | |

### 4.2 定价模型

**MVP 阶段 (当前)**：全免费，零支付代码。

**Pro 模型 (DAU > 200 后上线)**：

| 方案 | 价格 | 内容 |
|------|------|------|
| **Free** | $0 | 3 个完整工具，无需注册 |
| **Pro** | $4.99/月 或 $39/年 | 保存自定义呼吸模式、倦怠历史追踪、排毒计划保存、去广告、优先体验新工具 |

### 4.3 为什么不卖 Lifetime

工具站持续运营成本 + 无限支持承诺 ≠ 一次性收费模型。年付折扣给用户省钱、给项目可预测收入。

### 4.4 竞品定价对照

| 竞品 | Free | Pro/月 | 我们优于 |
|------|:--:|--------|---------|
| Calm | ❌ | $14.99 | 全免费、零门槛 |
| Headspace | ❌ | $12.99 | 全免费、零门槛 |
| Insight Timer | ✅ | $9.99 | 无需下载、全免费 |
| **CalmTool** | **✅** | **$4.99** | 最低 Pro 价格 |

---

## 5. Compliance & Legal 合规与法律

### 5.1 数据流

纯前端匿名工具站，**零数据收集**。呼吸设置、评估答案、排毒计划全部存储在浏览器 localStorage，不出客户端。

### 5.2 P0 合规项

| # | 项目 | 状态 |
|---|------|:--:|
| 1 | 倦怠评估页医疗免责声明 | ✅ 已部署 |
| 2 | 988 危机热线（footer + 倦怠结果页） | ✅ 已部署 |
| 3 | Privacy Policy | ✅ /privacy/ |
| 4 | Terms of Use | ✅ /terms/ |
| 5 | 联系邮箱 support@calmtool.io | ✅ |

### 5.3 禁词清单

全站 7 页不得出现：Unlimited · Free forever · Lifetime · Guaranteed · Cure · Treat · Diagnose

用词替代：`Free — no sign-up needed` (替代 Free forever) · `assess` (替代 diagnose) · `not medical advice` (替代 medical advice)

### 5.4 后期合规升级

| 触发条件 | 需追加 |
|---------|--------|
| 加 GA4/Clarity | Privacy 加分析声明 + Cookie banner |
| 加 OAuth 登录 | Privacy 加数据收集 + Terms 加账号条款 |
| 加 PayPal | Terms 加退款政策 + PCI |
| 加 Workers AI | Privacy 加数据处理声明 |
| EU 用户 > 5% | GDPR consent banner |

---

## 6. Page Matrix & SEO 页面矩阵与文案

### 6.1 页面清单

| # | URL | Title | H1 | Meta Description | Schema |
|---|-----|-------|----|------------------|--------|
| 1 | `/` | Free Wellness Tools — Breathing, Burnout Test & Digital Detox | Feel better in minutes. No app. No sign-up. No cost. | Free online wellness tools: guided breathing exercises, burnout self-assessment, and digital detox planner. No app, no sign-up, no cost. | WebApplication |
| 2 | `/breathe/` | Free Online Breathing Exercise Tool — 4 Guided Patterns | Free Online Breathing Exercise Tool | Free guided breathing exercises in your browser. 4-7-8, Box Breathing, and custom patterns. Animated circle guides each breath. No app, no sign-up, mobile-friendly. | WebApplication |
| 3 | `/burnout-test/` | Free Burnout Self-Assessment — Check Your Stress Level Online | Free Burnout Self-Assessment — Check Your Stress Level | Science-based burnout self-check. 15 questions, 3 minutes, instant results with personalized recommendations. Free, anonymous, no registration. | WebApplication |
| 4 | `/digital-detox/` | Free Digital Detox Planner — Create Your Screen Time Reset Plan | Free Digital Detox Planner | Build a personalized digital detox plan in 2 minutes. Set screen-free hours, choose offline activities, and start resetting your relationship with screens. Free, no sign-up. | — |
| 5 | `/privacy/` | Privacy Policy — CalmTool | Privacy Policy | We do not collect any personal data. Your data stays in your browser. No cookies, no tracking, no accounts. | — |
| 6 | `/terms/` | Terms of Use — CalmTool | Terms of Use | Free wellness tools for personal, non-commercial use. Medical disclaimer. support@calmtool.io. | — |
| 7 | `/about/` | About — CalmTool | About CalmTool | Why we built CalmTool: free breathing exercises, burnout self-checks, and digital detox plans — no apps, no accounts, no cost. Private by design. | — |

### 6.2 呼吸练习工具 — /breathe/

**4 种呼吸模式**：
- 4-7-8 Relaxation（吸 4s · 屏 7s · 呼 8s）→ 入睡、急性焦虑
- Box Breathing（4-4-4-4）→ 专注重置、会前平静
- Simple Calm（吸 4s · 屏 2s · 呼 6s）→ 快速减压
- Custom（自定义时长）→ 进阶练习者

**FAQ 5 题**：4-7-8 是什么 · Box Breathing 怎么用 · 该选哪种 · 有无风险 · 手机能用吗

**交叉内链**：→ /burnout-test/（"Feeling overwhelmed? Take our burnout self-assessment"）

### 6.3 倦怠自评 — /burnout-test/

**15 题量表**（MBI-GS 简化框架）：
- Section A（5 题）：情绪耗竭 Emotional Exhaustion
- Section B（5 题）：去人格化 Depersonalization
- Section C（5 题）：个人成就感 Personal Accomplishment（反向计分）

**评分机制**：5 级 Likert 量表 (1=Never 至 5=Every day)，即时计算三维评分 + 分级建议（低/中/高）

**免责声明**（P0）："This assessment is NOT a clinical diagnosis. If you're in crisis, call or text 988."

**交叉内链**：→ /breathe/（"Try our guided breathing exercises"）

### 6.4 数字排毒 — /digital-detox/

**4 步表单**：
1. 当前屏幕时间（下拉选择）
2. 问题时段（多选按钮）
3. 排毒风格（4 选 1：Weekend Reset / Evening Wind-Down / Morning First Hour / Custom）
4. 替代活动（8 项多选：阅读/散步/日记/烹饪/致电/冥想/音乐/整理）

**输出**：个性化排毒计划卡片 + 每日例程 + 坚持技巧

### 6.5 内链拓扑

```
/ (首页)
 ├── /breathe/ ←→ /burnout-test/ (交叉推荐)
 ├── /burnout-test/ ←→ /breathe/
 ├── /digital-detox/ ← / (from card)
 ├── /privacy/ (footer)
 ├── /terms/ (footer)
 └── /about/ (footer)
```

---

## 7. Technical Architecture 技术架构

### 7.1 技术栈

| 层 | 技术 | 说明 |
|----|------|------|
| 前端 | HTML5 + Tailwind CSS (Stitch) + Vanilla JS | 3 个 Stitch MCP 高保真页 + 1 个自写呼吸页 |
| 部署 | Cloudflare Pages | push → 自动部署 |
| 域名 | calmtool.io | Cloudflare DNS 代理 |
| 分析 | GA4 + Clarity + Ahrefs + Plausible | 4 套并行 |
| 后端 | 无 (MVP) | 纯静态，零 API |

### 7.2 Route Contract

```yaml
routes:
  /:                  index.html
  /breathe/:          breathe/index.html
  /burnout-test/:     burnout-test/index.html
  /digital-detox/:    digital-detox/index.html
  /privacy/:          privacy/index.html
  /terms/:            terms/index.html
  /about/:            about/index.html
  /sitemap.xml:       sitemap.xml
  /robots.txt:        robots.txt
  
canonical: calmtool.io
noindex: []
```

### 7.3 Data Contract (MVP)

```yaml
storage: localStorage (browser)
backend: none
future (DAU > 200):
  platform: Cloudflare Workers + D1
  endpoints:
    - POST /api/assessments
    - POST /api/detox-plans
```

---

## 8. Roadmap & Post-Launch 路线图

### 8.1 已完成 (13 Stage ShipSolo Pipeline)

```
✅ 01 research    ✅ 02 PRD       ✅ 03 pricing
✅ 04 compliance  ✅ 05 copy      ✅ 06 design (Stitch MCP)
✅ 07 frontend    ⏭️ 08 backend   ✅ 09 QA
✅ 10 SEO         ✅ 11 launch    ⏳ 12 review (1 周后)
```

### 8.2 内容扩建计划 (Post-Launch)

| Phase | 时间 | 动作 | 目标关键词 |
|-------|------|------|-----------|
| 1 | Month 2 | 呼吸工具加 2 篇长文 | "4-7-8 breathing science", "box breathing for anxiety" |
| 2 | Month 3 | 倦怠工具加 1 篇引文 | "burnout vs stress vs depression" |
| 3 | Month 4 | 排毒工具加社交模板 | "digital detox challenge", "screen time reset" |
| 4 | Month 5+ | 数据复盘 → 决定第 4 个工具 | anxiety grounding exercises 5-4-3-2-1 |

**触发条件**：
- 流量 > 2,000/月 → 加第 4 个工具
- 流量 < 500/月 → 优先外链建设
- 始终先看 Stage 12 数据，再做决策

### 8.3 长期愿景

```
Phase 1 (当前):     3 工具 MVP — 呼吸 + 倦怠 + 排毒
Phase 2 (Month 2-4): 内容扩建 — 长文 + 引文 + 社交模板
Phase 3 (Month 5-12): 长尾矩阵 — 吃透种子词全谱
                      zen 计时器 · meditation 引导 · anxiety 5-4-3-2-1
                      stress relief 工具 · spiritual 反思 · inner peace 练习
Phase 4 (Year 2):    品牌化 → Pro 变现 → 平台化
```

---

## Appendix 附录

### A. 设计系统

- 主色：抹茶绿 `#6B8B6C` · 陶土 CTA `#C4956A` · 和紙白底 `#F9F6F0`
- 字体：Georgia 衬线标题 + system-ui 正文
- 风格：茶室温暖感 — 留白、纸质感、自然色系
- Stitch 项目：`10097452803108239937`（8 屏：4 桌面 + 4 移动）

### B. 分析代码

```html
GA4:       G-FZ1YQ9W9S3
Clarity:   x7fp5a4niz
Ahrefs:    3DozwKgee5zQMCsEl99K4w
Plausible: pa-fKgXCF0plWSQJP3jm_Mc6 (shipsolo.io)
```

### C. 联系方式

- 产品：[calmtool.io](https://calmtool.io)
- 代码：[github.com/tomcome618/calm-tool](https://github.com/tomcome618/calm-tool)
- 邮箱：support@calmtool.io
- 危机热线：988 (US)

### D. 禁止事项

- 不蹭品牌
- 不声称临床诊断
- 不采集用户数据
- 不使用 Unlimited / Free forever / Lifetime / Guaranteed 等禁词
