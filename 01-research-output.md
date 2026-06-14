# 01 — 关键词研究输出

> **Skill**: keyword-research-agent v2.3.0  
> **执行日期**: 2026-06-13  
> **工具**: discoverkeywords.co API + 公开 SERP 手动复核  
> **状态**: DONE（含 missing_keyword_tool_access 标注）

---

## 一句话总判断

种子词 "zen / mindfulness / meditation / anxiety relief / stress relief / burnout / digital detox" 属于 **高流量但品牌化严重的 wellness 领域**。直接做通用冥想计时器或呼吸工具竞争极激烈（Insight Timer 3200万用户，Calm/Headspace 寡头）。真正的 SEO 机会在 **长尾工具组合** + **特定人群/场景的精准切入点**。

本轮识别出 **3 个可做关键词方向**、**5 个观察词**、**4 个不推荐方向**。

---

## 值得继续（近期可做）

| # | 关键词方向 | 月搜索量(估) | KD(估) | 用户意图 | 切入策略 |
|---|-----------|-------------|--------|---------|---------|
| 1 | **breathing exercise tool / free online breathing timer** | ~8,000-12,000 | 35-45 | 用户想找一个无需下载的网页端呼吸引导工具 | 做多模式呼吸法（4-7-8 / Box / 4-4-4-4）+ 可视化动画，竞品多为 App，纯网页端少 |
| 2 | **burnout self assessment / burnout test online free** | ~3,000-5,000 | 25-35 | 用户想知道自己是否 burnout，要免费自测 | 市面上多为机构官网的 PDF 问卷，**做成交互式在线评估+即时结果+资源推荐**是空白 |
| 3 | **digital detox tracker / screen time detox planner** | ~2,000-4,000 | 15-25 | 用户想规划数码排毒计划 | 几乎没有直接竞品工具站，Reddit 社区需求旺盛 |

## 可观察（趋势上升中，等数据验证）

| # | 关键词方向 | 月搜索量(估) | 为什么观察 | 跟踪指标 |
|---|-----------|-------------|-----------|---------|
| 1 | **AI meditation guide** | ~1,500-3,000 | AI + wellness 交叉领域上升 | SERP 新域名出现速度 |
| 2 | **ADHD focus timer / Pomodoro for neurodivergent** | ~5,000-8,000 | Reddit/社区高频提及 | 竞品功能完整度 |
| 3 | **anxiety grounding exercises 5-4-3-2-1** | ~2,000-4,000 | TikTok 传播驱动搜索 | 社媒讨论量变化 |
| 4 | **sleep meditation script** | ~3,000-5,000 | 稳定增长型 | 竞品内容深度 |
| 5 | **mindfulness journal prompts generator** | ~1,000-2,000 | AI 生成 + wellness 交叉 | 新站入榜速度 |

## 不值得做

| 方向 | 原因 |
|------|------|
| 通用 meditation timer | Insight Timer / Calm / Headspace 寡头 + 大量免费 App，KD 80+ |
| calm music / zen sound generator | 太多免费 YouTube 替代，变现难 |
| spiritual / chakra / energy healing | 用户群体小众且分散，SEO ROI 低 |
| mood tracker / journal app | App Store 大量免费替代，网页端用户习惯弱 |

---

## 推荐主攻方向：Breathing Exercise + Burnout Assessment 双工具站

### 策略逻辑
- **Breathing Exercise** 是获客入口（流量大、分享属性强）
- **Burnout Assessment** 是权威建立工具（长尾精准、链接诱饵属性强）
- 两个工具共享同一用户画像：高压职场人 + 焦虑人群
- 可扩展为 **多工具 wellness hub**（MVP 3 个工具 → 后续扩到 6-8 个）

### 竞品矩阵

| 竞品 | 类型 | 呼吸练习 | 倦怠评估 | 数字排毒 | 优势 | 劣势 |
|------|------|---------|---------|---------|------|------|
| Insight Timer | App | ✅ | ❌ | ❌ | 3200万用户 | 需下载，非网页优先 |
| Calm.com | App+Web | ✅(引导冥想) | ❌ | ❌ | 品牌强 | 付费墙，非工具站 |
| Healthline | 内容站 | ✅(文章) | ✅(文章) | ✅(文章) | SEO 垄断 | 纯内容，无交互工具 |
| calmtool.com | 工具站 | ❌ | ❌ | ❌ | 域名好 | 内容空 |
| breathing.ai | App | ✅ | ❌ | ❌ | Chrome 扩展 | 需安装 |
| **calm-tool (本项目)** | **工具站** | **✅ 多模式网页版** | **✅ 交互式评估** | **✅ 排毒计划** | **纯网页/零门槛/多样工具** | **新站需要时间建权** |

---

## 关键词优先级矩阵

```
                    高搜索量
                       ↑
         burnout       |   breathing exercise ★★★
         assessment ★★ |   (主攻词)
                       |
   ————————————————————+————————————————————→ 低 KD
                       |
         digital detox |   meditation timer
         planner ★     |   (避免)
                       |
                    低搜索量
```

---

## 下一步建议

1. **确认域名**：推荐 `calmtoolkit.com` 或 `calmtool.io`，建议尽快注册
2. **进入 02-PRD**：将 breathing exercise + burnout assessment + digital detox 三工具组合冻结为 PRD
3. **人工补充**：建议补充 Ahrefs/Semrush 数据确认搜索量预估

---

## 质量闸门自检

- [x] 关键词机会存在且可量化
- [x] SERP 竞品已采样（Insight Timer / Calm / Healthline / breathing.ai）
- [ ] 付费工具搜索量验证 — **标 missing_keyword_tool_access**（公开 SERP 降级完成）
- [x] 目标市场锁定 US / English
- [x] 不推荐方向有明确理由

---

## 交接摘要

- **当前阶段**: 01-research → **DONE**
- **给下游 02-PRD 的关键信息**:
  - 主攻：breathing exercise tool + burnout assessment tool 双工具组合站
  - 备选扩展：digital detox planner
  - 站点类型：工具站 (multi-tool wellness hub)
  - 竞品最低能力：多呼吸模式 + 交互式评分 + 即时结果
  - NOT-DO：不做通用冥想计时器、不做纯内容站、不做 App
