# 06 — 视觉设计与页面生成

> **Skill**: site-design-student v2.3.0  
> **执行日期**: 2026-06-13  
> **上游**: 02-product-prd.md, 05-copywriting-output.md  
> **工具**: Stitch (MCP via `stitch-mcp init` → API Key auth)  
> **状态**: DONE

---

## 一句话结论

基于 Stitch MCP 生成 4 个核心页面高保真设计 + 完整的 CSS 设计系统（460 行），覆盖全站 7 页。设计真源为 `design/design-system.css`，前端可直接引用实现。

---

## 设计方向

**视觉概念:** "Tranquil Wellness" — Tea-house tranquility。科学精确 + 有机温暖。

**反 AI 味检查:** 系统字体(非 Inter 强制)、柔和绿色(非蓝紫)、大面积留白(非紧凑)、暖白底色(非纯白)、琥珀 CTA(非蓝色)。

---

## 产出文件

| 文件 | 内容 | 行数 |
|------|------|:--:|
| `design/design-system.css` | 完整 CSS 变量 + 组件样式 + 响应式 | 460 |
| `design/HANDOFF.md` | 前端 handoff：色板、组件映射、实现顺序 | — |
| Stitch Project | `18152209088133777835` (4 screens) | — |

### Stitch Screen Map

| # | 页面 | Route | screenId |
|---|------|-------|----------|
| 1 | Home | `/` | `818b4231f6454db8921c61281b7f4a77` |
| 2 | Breathe | `/breathe/` | `c2bd46076cc04cd6a74163bc17999a83` |
| 3 | Burnout Test | `/burnout-test/` | `d6b9c40ee66f4be386ea41e6d06081ac` |
| 4 | Digital Detox | `/digital-detox/` | `e1ec42e0b3ee49fe98074b42dbc78329` |

---

## 设计系统 Token 摘要

```
Primary:   #6B8B6C (matcha green)
Dark:      #3A7D65 (logo, headings)
Accent:    #C4956A (clay CTA)
BG:        #F9F6F0 (washi white)
Surface:   #FFFFFF (cards)
Text:      #2D2A26 / #6B6560 / #9B9590
Font:      system-ui, Inter, sans-serif
Radius:    6px-24px (pill CTA: 9999px)
Shadow:    green-tinted ambient (never pure black)
```

## 关键交互状态

| 组件 | 状态 | 实现方式 |
|------|------|---------|
| Breathing circle | inhale / hold / exhale | CSS `transform: scale()` + `transition` |
| Pattern buttons | default / hover / active | `.pattern-btn` + `.active` class |
| Scale buttons | default / hover / selected | `.scale-btn` + `.selected` class |
| FAQ accordion | closed / open | `.faq-answer` + `.open` class (JS toggle) |
| Progress bar | 0-100% | `.progress-fill` width transition |
| Plan form | step 1→4 | JS step counter, show/hide sections |
| Plan card | hidden / visible | Display after form completion |

---

## 交付物

| # | 交付物 | 状态 |
|---|--------|------|
| 1 | 设计系统 CSS | ✅ 460 行 |
| 2 | Stitch 屏幕 × 4 | ✅ |
| 3 | 色板 & 字体 Token | ✅ |
| 4 | 组件映射表 | ✅ |
| 5 | 交互状态清单 | ✅ |
| 6 | 前端 Handoff | ✅ |

## 验收清单

- [x] 设计是真源，不是单张概念图（460 行 CSS + 组件系统）
- [x] 前端可提取字体/颜色/间距（`:root` CSS 变量完整）
- [x] 关键交互状态齐全（呼吸/量表/FAQ/表单/进度）
- [x] 视觉不撞脸（茶室温暖感，非通用 SaaS 模板）
- [x] 移动端响应式（768px / 480px 断点）

---

## 下游交接摘要

### 当前结论
- **状态**: [DONE]
- **一句话**: 基于 Stitch 设计真源产出完整 CSS 设计系统 + 4 屏设计 + 组件映射 + 交互状态说明。前端可直接开工。

### 给下游（07-frontend）
- **必须读取**: `design/design-system.css` + `design/HANDOFF.md` + `05-copywriting-output.md`
- **CSS 变量直接引用**: `<link rel="stylesheet" href="/css/design-system.css">`
- **7 页实现顺序**: index → breathe → burnout-test → digital-detox → privacy → terms → about
- **后端**: 纯静态，Stage 08 跳过。无数据库/无 API/无 auth
