# 02 — 产品定义与 PRD

> **Skill**: product-definition-prd v2.3.0  
> **执行日期**: 2026-06-13  
> **上游**: 01-research-output.md  
> **状态**: DONE（域名待确认 [待确认]）

---

## 1. 机会确认

### 来自上游的关键判断

| 维度 | 结论 |
|------|------|
| **主攻词** | breathing exercise tool (~8-12K/mo, KD 35-45) |
| **二号词** | burnout self assessment (~3-5K/mo, KD 25-35) |
| **扩展词** | digital detox planner (~2-4K/mo, KD 15-25) |
| **搜索意图** | 用户要**即时可用、无需下载、免费**的网页工具 |
| **SERP 缝隙** | 竞品多为 App（需下载）或纯内容页（无交互），交互式网页工具站是空白 |
| **竞品最低能力** | 多呼吸模式 + 交互式评分 + 即时结果反馈 |

### 风险确认
- 搜索量基于公开数据估算，未经过付费工具验证（标 `missing_keyword_tool_access`）
- 竞品采样来自公开 SERP，可能存在未覆盖的长尾竞品

---

## 2. ICP（理想用户画像）

### 主 ICP：高压职场知识工作者

| 维度 | 描述 |
|------|------|
| **人口** | 25-45 岁，办公室/远程工作者，美国 |
| **痛点** | 长时间屏幕前工作 → 肩颈紧张、焦虑、注意力涣散、入睡困难 |
| **触发场景** | 下午 2-4 点能量低谷、Deadline 前高压、睡前大脑停不下来 |
| **当前方案** | YouTube 冥想音频、App（Calm/Headspace 付费墙）、什么都不做（最普遍） |
| **未被满足** | 想要一个**打开浏览器就能用、不需要登录、不需要付费**的工具 |
| **转化信号** | 搜索 "free breathing exercise" / "burnout test" 有明确自助意图 |

### 次级 ICP 1：焦虑/高压人群（非职场）

| 维度 | 描述 |
|------|------|
| **人口** | 学生、全职父母、待业者，18-55 岁 |
| **痛点** | 广泛性焦虑、panic attack 前兆、信息过载 |
| **触发场景** | 社交媒体触发焦虑、新闻 overload、生活中断 |
| **当前方案** | TikTok 短视频、Reddit 社区求助、心理咨询（门槛高） |
| **未被满足** | 想要**即时、匿名、科学感**的自助工具（5-4-3-2-1 grounding 等） |

### 次级 ICP 2：自我优化/量化生活爱好者

| 维度 | 描述 |
|------|------|
| **人口** | 25-35 岁，科技从业者、创业者，习惯用工具管理生活 |
| **痛点** | 屏幕时间失控、注意力碎片化、想"量化"自己的压力水平 |
| **触发场景** | 周末反思屏幕使用时间、新年决心、看了数字排毒文章后 |
| **当前方案** | Screen Time 原生功能、Notion 模板、Excel 手动记录 |
| **未被满足** | 想要**结构化的数字排毒计划**，不只是追踪 |

---

## 3. 定位与边界

### 一句话定位
> **Instant calm tools, zero friction.** — 浏览器即用的减压工具集合，不需要 App、不需要登录、不需要付费。

### 替代方案（用户当前用什么）
| 方案 | 为什么不满足 |
|------|-------------|
| Calm / Headspace App | 需要下载 + 注册 + 付费墙 |
| YouTube 冥想视频 | 被动消费、无交互、广告打断 |
| Healthline / WebMD 文章 | 纯信息、无工具、读完即走 |
| Reddit / TikTok 社区 | 非结构化、不可靠、无即时性 |

### 差异化
| 维度 | 竞品 | 本项目 |
|------|------|--------|
| 门槛 | 下载 App / 注册登录 | **零门槛**，打开即用 |
| 工具性 | App（交互强）或内容站（无交互） | **纯网页交互工具** |
| 工具数量 | 单功能 App | **多工具 hub**，一次解决多个需求 |
| 隐私 | 注册收集邮箱/行为数据 | **无需注册，localStorage 即可** |

### NOT-DO（明确不做）
| # | 不做 | 原因 |
|---|------|------|
| 1 | 通用冥想计时器 | 竞争饱和，KD 80+ |
| 2 | 纯内容博客/文章站 | 不是工具站，非本项目类型 |
| 3 | 移动 App（iOS/Android） | 超出 Cloudflare-first 技术栈范围 |
| 4 | AI 聊天/心理健康诊断 | 法律风险（FDA/医疗设备监管），超出合规边界 |
| 5 | 社区/论坛/UGC | 审核成本高，MVP 不承载 |
| 6 | 付费订阅墙（MVP 阶段） | 免费优先，定价在 03-pricing 阶段设计但 MVP 不实现支付 |
| 7 | 用户注册/登录系统（MVP） | 零门槛是核心卖点，除非后期 Pro 功能需要 |

---

## 4. 站点类型化

### 类型：工具站（Multi-Tool Wellness Hub）

| 属性 | 值 |
|------|-----|
| **类型** | 工具站（Tool Site） |
| **子类型** | 多工具 hub：3 个独立交互工具 + 1 个聚合首页 |
| **交互基线** | 每个工具页面包含**完整的客户端交互逻辑**（JS/CSS 动画），无需后端 |
| **数据持久化** | MVP：localStorage（无需后端）；后期：Cloudflare Workers + D1 |
| **技术栈** | 纯静态 HTML/CSS/JS，部署 Cloudflare Pages |

### 为什么不是其他类型

| 类型 | 为什么不选 |
|------|-----------|
| 内容站 | 没有交互工具，无法差异化 vs Healthline |
| 目录站 | 种子词不匹配目录意图 |
| 计算器 | 呼吸/s burnout 的核心不是"计算"而是"引导+评估" |
| 混合站 | MVP 聚焦工具，后期可加轻量引导内容 |

---

## 5. 页面矩阵

### 页面清单

| # | URL | index | 主词 | 功能 | CTA | schema |
|---|-----|-------|------|------|-----|--------|
| P1 | `/` | ✅ | breathing exercise tool, free wellness tools | 工具导航首页：3 个工具卡片 + hero | "Try Breathing Exercise" → /breathe | WebApplication |
| P2 | `/breathe/` | ✅ | breathing exercise tool, free online breathing timer | 呼吸引导工具：多模式 + 动画 + 计时器 | "Try Burnout Test" → /burnout-test | WebApplication |
| P3 | `/burnout-test/` | ✅ | burnout self assessment, burnout test online free | 交互式倦怠评估：问卷 + 即时评分 + 资源推荐 | "Start Digital Detox" → /digital-detox | WebApplication |
| P4 | `/digital-detox/` | ✅ | digital detox planner, screen time detox plan | 数字排毒计划生成器：模板 + 自定义计划 | "Back to Tools" → / | WebApplication |
| P5 | `/privacy/` | ✅ | — | 隐私政策 | — | — |
| P6 | `/terms/` | ✅ | — | 使用条款 | — | — |
| P7 | `/about/` | ✅ | about mindful tools | 关于页面：项目说明 + 数据来源 | — | AboutPage |

### 各页面详情

#### P1 — 首页 `/`

| 元素 | 内容 |
|------|------|
| **H1** | Free Mindfulness & Stress Relief Tools — No App Needed |
| **H2** | Breathe better. Check burnout. Plan a digital detox. All in your browser. |
| **Hero CTA** | "Start Breathing Exercise" → /breathe/ |
| **工具卡片 1** | 🫁 Breathing Exercise — 4 guided patterns (4-7-8, Box, 4-4-4-4, Custom) |
| **工具卡片 2** | 🔥 Burnout Self-Check — Science-based assessment, instant results |
| **工具卡片 3** | 📵 Digital Detox Planner — Personalized plan in 2 minutes |
| **信任条** | "100% free · No sign-up · No app download · Works on mobile" |
| **Footer** | Privacy · Terms · About |

#### P2 — 呼吸练习工具 `/breathe/`

| 元素 | 内容 |
|------|------|
| **H1** | Free Online Breathing Exercise Tool — Guided Patterns for Calm |
| **meta description** | Free guided breathing exercises in your browser. 4-7-8, Box Breathing, 4-4-4-4, and custom patterns. No app, no sign-up, works on mobile. |
| **核心交互** | 动画圆环缩放引导吸气/呼气，秒表计时，模式切换按钮 |
| **模式选择器** | 4 个预设模式按钮 + 自定义滑块 |
| **呼吸模式** | ① 4-7-8 Relaxation（吸4/屏7/呼8）② Box Breathing（4-4-4-4）③ Simple Calm（4-4-4-4-2）④ Custom |
| **FAQ** | What is 4-7-8 breathing? / How does box breathing work? / When to use each technique? |
| **内链** | "Feeling overwhelmed? Take our burnout self-assessment →" |

#### P3 — 倦怠自测 `/burnout-test/`

| 元素 | 内容 |
|------|------|
| **H1** | Free Burnout Self-Assessment — Check Your Stress Level Online |
| **meta description** | Take a free, science-based burnout self-assessment. 15 questions, instant results, personalized recommendations. No registration required. |
| **核心交互** | 15 道选择题（Likert 5 级量表），逐题展示，进度条 |
| **评分维度** | 情绪耗竭 / 去人格化 / 个人成就感降低（基于 MBI-GS 框架的简化版） |
| **结果页** | 三段式评分 + 可视化条 + 分级建议（低/中/高）+ 资源链接 |
| **免责声明** | "This is not a clinical diagnosis. If you're in crisis, call 988 (US)." |
| **内链** | "Try our breathing exercises to relieve stress →" |

#### P4 — 数字排毒计划 `/digital-detox/`

| 元素 | 内容 |
|------|------|
| **H1** | Free Digital Detox Planner — Create Your Screen Time Reset Plan |
| **meta description** | Build a personalized digital detox plan in 2 minutes. Set screen-free hours, choose offline activities, and track your progress. Free, no sign-up. |
| **核心交互** | 多步骤表单：当前屏时 → 目标 → 替代活动选择 → 生成计划 |
| **输出** | 可打印/截图的个性化排毒计划卡片 |
| **策略库** | 预设排毒策略：Weekend Reset / Evening Wind-Down / Morning First Hour / Full Day |

### 页面内链拓扑

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

## 6. 合同闸门

### Route Contract（路由合约）

```yaml
routes:
  /:
    method: GET
    content: index.html
    canonical: /
    
  /breathe/:
    method: GET
    content: breathe.html
    canonical: /breathe/
    
  /burnout-test/:
    method: GET
    content: burnout-test.html
    canonical: /burnout-test/
    
  /digital-detox/:
    method: GET
    content: digital-detox.html
    canonical: /digital-detox/
    
  /privacy/:
    method: GET
    content: privacy.html
    canonical: /privacy/
    
  /terms/:
    method: GET
    content: terms.html
    canonical: /terms/
    
  /about/:
    method: GET
    content: about.html
    canonical: /about/

noindex: []
redirects: {}
static_assets: /css/*, /js/*, /img/*
```

### Data Contract（数据合约）

```yaml
# MVP — 纯静态，无需后端
storage: localStorage (客户端)
backend: none (MVP)

# 后期扩展（Stage 08+）
future_backend:
  type: Cloudflare Workers + D1
  tables:
    - assessments (burnout test results, anonymous)
    - detox_plans (user-generated plans)
  api:
    - POST /api/assessments
    - POST /api/detox-plans
```

### SEO-Copy Freeze 输入（给 Stage 05-copy）

| 页面 | title 模板 | H1 | H2 列表 | meta description |
|------|-----------|-----|---------|-----------------|
| / | Free Mindfulness Tools — Breathing, Burnout Test & Digital Detox | Free Mindfulness & Stress Relief Tools — No App Needed | Breathe better. Check burnout. Plan a digital detox. | Free online mindfulness tools: guided breathing exercises, burnout self-assessment, and digital detox planner. No app, no sign-up, 100% free. |
| /breathe/ | Free Online Breathing Exercise Tool — 4 Guided Patterns | Free Online Breathing Exercise Tool | 4 breathing patterns, FAQ | Free guided breathing exercises in your browser: 4-7-8, Box Breathing, 4-4-4-4, and custom. No app download needed. |
| /burnout-test/ | Free Burnout Self-Assessment — Check Your Stress Online | Free Burnout Self-Assessment — Check Your Stress Level | Assessment questions, Your Results, Resources | Science-based burnout self-check. 15 questions, instant results, personalized tips. Free and anonymous. |
| /digital-detox/ | Free Digital Detox Planner — Screen Time Reset | Free Digital Detox Planner | Plan your detox, Your personalized plan | Create a personalized digital detox plan in 2 minutes. Set screen-free hours, pick offline activities. Free, no sign-up. |
| /privacy/ | Privacy Policy — CalmTool | Privacy Policy | — | — |
| /terms/ | Terms of Use — CalmTool | Terms of Use | — | — |
| /about/ | About — CalmTool | About CalmTool | Why we built this, How our tools work | — |

### Visual Style Brief（给 Stage 06-design）

```
氛围：calm, warm, trustworthy, minimal
主色：柔和绿（#4A9C7F — 宁静感）或 柔和蓝紫（#6B7DB3 — 信任感）
辅色：暖米白（#FAF7F2 — 不刺眼）
强调色：暖琥珀（#E8A75D — 温和 CTA）
字体：系统无衬线（Inter / system-ui），舒适字号
动画：呼吸圆环用 CSS transition，柔和缓动
整体：不暗黑、不荧光、不科技冰冷 → 温暖如茶室的平静感
```

---

## 7. 产品验收标准

### 真实用户任务（P0，QA 必测）

| # | 用户任务 | 验收标准 | 涉及页面 |
|---|---------|---------|---------|
| T1 | 访问首页，3 秒内理解站点是做什么的 | Hero 文字清晰，3 个工具卡片可见 | / |
| T2 | 选择呼吸模式，跟随动画完成一轮呼吸 | 圆环缩放流畅，计时准确，模式可切换 | /breathe/ |
| T3 | 完成 15 题倦怠评估，获得即时结果 | 所有题目可答，进度条准确，结果页含评分+建议 | /burnout-test/ |
| T4 | 在手机上完成呼吸练习 | 移动端动画流畅，触摸可操作，不缩放异常 | /breathe/ |
| T5 | 生成一份数字排毒计划并截图保存 | 表单流程顺畅，输出卡片内容完整、可打印 | /digital-detox/ |
| T6 | 从呼吸工具页通过内链跳转到倦怠评估 | 交叉推荐链接存在且正确 | /breathe/ → /burnout-test/ |

### Competitive Minimum（竞品最低能力对照）

| 能力 | Insight Timer | Calm | Healthline | 本项目 | 是否达标 |
|------|:--:|:--:|:--:|:--:|:--:|
| 无需下载 | ❌ | ❌ | ✅ | ✅ | ✅ |
| 无需注册 | ❌ | ❌ | ✅ | ✅ | ✅ |
| 交互式工具 | ✅ | ✅ | ❌ | ✅ | ✅ |
| 多呼吸模式 | ✅ | ✅ | ❌ | ✅ | ✅ |
| 倦怠评估 | ❌ | ❌ | ❌(仅文章) | ✅ | ✅ 差异化 |
| 数字排毒计划 | ❌ | ❌ | ❌ | ✅ | ✅ 差异化 |
| 完全免费 | ❌ | ❌ | ✅ | ✅ | ✅ |
| 移动端体验 | ✅(App) | ✅(App) | ✅ | ✅(网页) | ✅ |

---

## 交付物

| # | 交付物 | 状态 |
|---|--------|------|
| 1 | PRD v1（本文） | ✅ |
| 2 | 页面矩阵（§5，7 个页面含 title/H1/H2/schema/CTA） | ✅ |
| 3 | Route Contract 初稿（§6，7 条路由） | ✅ |
| 4 | Data Contract（§6，MVP localStorage + 后期 Workers/D1） | ✅ |
| 5 | Visual Style Brief（§6，配色/字体/氛围） | ✅ |
| 6 | SEO-Copy Freeze 输入（§6，7 页面 title/meta） | ✅ |
| 7 | 交互/数据/素材需求清单（§5 各页面详情） | ✅ |
| 8 | 下游交接摘要（§底部） | ✅ |

## 验收清单

- [x] PRD 不只是关键词说明，而是可开发产品
- [x] 每个 indexable 页面有真实价值和用户任务
- [x] NOT-DO 明确（7 项）
- [x] 设计/文案/前后端都知道交付边界（Route Contract + Data Contract + Visual Brief + SEO-Copy Freeze 输入）
- [x] 站点类型明确（工具站 multi-tool hub）
- [x] ICP 拆解 3 类用户，主 ICP 明确
- [ ] 域名确认 — [待确认]

---

## 下游交接摘要

### 当前结论
- **状态**: [DONE]
- **一句话结论**: calm-tool 定位为"纯网页/零门槛/多工具 wellness hub"，MVP 包含 3 个独立交互工具 + 聚合首页，不追 App、不追内容站、不追冥想计时器寡头赛道。

### 核心判断
- 主 ICP：高压职场知识工作者（25-45 岁 US）
- 3 工具 MVP：Breathing Exercise + Burnout Assessment + Digital Detox Planner
- 7 个页面（含隐私/条款/关于）
- 纯静态，零后端（MVP 阶段）
- Cloudflare Pages 部署

### 已确认项
- 站点类型：工具站
- 技术栈：Cloudflare-first 纯静态
- NOT-DO 清单

### 待确认项
- 域名（推荐 calmtoolkit.com / calmtool.io）
- 搜索量（需付费工具验证）

### 风险
- P0：域名未注册
- P1：搜索量预估误差可能导致流量预期偏差
- P2：纯静态工具的功能深度 vs 竞品 App

### 给下游的最小必要信息
- **下一阶段**: 03-pricing + 04-compliance（可并行）
- **必须读取**: 02-product-prd.md + 01-research-output.md
- **不能假设**: 域名已注册、有后端
- **03-pricing 要点**: 免费工具站，商业化靠广告/Pro 功能（如自定义呼吸模式保存），但 MVP 不实现支付
- **04-compliance 要点**: 医疗免责声明（"not clinical diagnosis"）、隐私（anonymous assessment）、988 危机热线
- **05-copy 要点**: SEO-Copy Freeze 输入已在本文 §6 中提供
