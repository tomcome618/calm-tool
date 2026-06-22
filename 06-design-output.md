# 06 — 视觉设计 Handoff

> **Skill**: site-design-student v2.3.0  
> **日期**: 2026-06-16  
> **上游**: 02-product-prd.md, 05-copywriting-output.md, PRD-v2.md  
> **状态**: DONE → 交付下游 07-frontend

---

## 一句话结论

基于 Stitch MCP + `create_design_system` 生成 4 个高保真桌面端页面，已下载 HTML 真源并完成 post-process（导航链接、logo、favicon、analytics）。全部 7 页（4 Stitch + 3 法律页）已部署到 `https://calmtool.io`。

---

## 设计系统

| 参数 | 值 |
|------|-----|
| **Stitch 项目** | `154198836046239388` |
| **设计系统 ID** | `4877226475778458951` |
| **主色 (customColor)** | `#6B8B6C` matcha green |
| **辅色 (overrideSecondary)** | `#C4956A` clay amber |
| **三级色 (overrideTertiary)** | `#8B7355` wood |
| **中性色 (overrideNeutral)** | `#F9F6F0` washi white |
| **headlineFont** | `SOURCE_SERIF_4` |
| **bodyFont** | `INTER` |
| **colorMode** | `LIGHT` |
| **colorVariant** | `TONAL_SPOT` |
| **roundness** | `ROUND_TWELVE` |

---

## Stitch Screen Map（桌面端）

| # | 页面 | Route | screenId | 大小 |
|---|------|-------|----------|------|
| 1 | Home | `/` | `03c367f065bd453d83d6a0a4b94fcb05` | 14KB |
| 2 | Breathe | `/breathe/` | `435621d67c874f86961af4fdf59d6746` | 21KB |
| 3 | Burnout | `/burnout-test/` | `04aa87f7bfa5420597ab7ab729694d94` | 20KB |
| 4 | Detox | `/digital-detox/` | `bd4529547b644d468e2faf50726136bd` | 20KB |

---

## 页面清单（7 页）

| # | Route | 来源 | 内容 |
|---|-------|------|------|
| 1 | `/` | Stitch | Hero + 3 工具卡片 + Trust Bar |
| 2 | `/breathe/` | Stitch | 4 呼吸模式 + 圆环 + FAQ |
| 3 | `/burnout-test/` | Stitch | 15 题量表 + 评分 + 建议 |
| 4 | `/digital-detox/` | Stitch | 4 步表单 + 计划卡片 |
| 5 | `/privacy/` | 模板 | Privacy Policy |
| 6 | `/terms/` | 模板 | Terms of Use |
| 7 | `/about/` | 模板 | About 页 |

---

## 全局资产

| 文件 | 路径 | 说明 |
|------|------|------|
| Logo | `/img/logo.svg` | 琥珀色圆圈 + 白色叶片 + "CalmTool" 字标 |
| Favicon | `/favicon.svg?v=2` | 简化版叶片圆圈 |
| Sitemap | `/sitemap.xml` | 7 URLs |
| Robots | `/robots.txt` | Allow all + Sitemap 地址 |
| Analytics | 内嵌 `</body>` 前 | GA4 + Clarity + Ahrefs + Plausible |

---

## Post-Process 修正清单（已执行）

| 修正 | 说明 |
|------|------|
| `href="#"` → 真实路由 | 导航链接、footer 链接全部改为 `/breathe/` 等 |
| Logo 注入 | `<img src="/img/logo.svg?v=2">` 替换纯文本 "CalmTool" |
| Favicon | `<link rel="icon" href="/favicon.svg?v=2">` |
| Email footer | `support@calmtool.io` 补全到所有页面 |
| Terms footer | 补全到首页和呼吸页 |
| Nav 字体统一 | 去除 `uppercase`、`dark:` 变体、`translate-y` |
| Nav 文案统一 | "Breathe | Burnout Test | Digital Detox" 三页一致 |
| Sometimes 按钮 | 补 `group` class 修复点击 |

---

## 交付物

| # | 交付物 | 状态 |
|---|--------|------|
| 1 | Stitch 高保真 HTML × 4 | ✅ |
| 2 | 设计系统定义 (Stitch DS ID) | ✅ |
| 3 | Logo + Favicon SVG | ✅ |
| 4 | Post-process 修正清单 | ✅ |
| 5 | 部署 URL | ✅ `calmtool.io` |
| 6 | 下游 Handoff（本文） | ✅ |

## 验收清单

- [x] 设计是真源（Stitch HTML 直接部署）
- [x] 色板/字体严格按 PRD v2
- [x] 4 页 nav 字体统一
- [x] 全部 7 页 footer 含 Privacy + Terms + 988 + Email
- [x] Logo + Favicon 就位

---

## 下游交接 — 给 07-frontend

### 必须读取
- 本文（06-design-output.md）
- `PRD-v2.md` — Route Contract、Data Contract
- `site/` 目录下全部 HTML 文件

### 不能假设
- 不需要重新生成 Stitch 页面（HTML 已就绪）
- 不需要写 CSS/JS（Stitch 自带 Tailwind + 内嵌交互）

### 07 阶段需要做
- Preflight 检查（GitHub、Cloudflare 权限）
- 确认 7 页 HTTP 200
- 确认移动端响应式正常
- 确认分析埋点上报
- deploy + smoke test
- 输出 07-frontend-output.md
