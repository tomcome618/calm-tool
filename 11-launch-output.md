# 11 — 上线部署

> **Skill**: site-ops-growth-launch v2.3.0  
> **执行日期**: 2026-06-13  
> **状态**: LIVE 🚀

---

## 部署信息

| 项目 | 值 |
|------|-----|
| **Production URL** | `https://d1251b40.calm-tool.pages.dev` |
| **Custom Domain** | `calmtool.io`（待 Cloudflare DNS 绑定） |
| **GitHub** | `https://github.com/tomcome618/calm-tool` |
| **Commit** | main |
| **Platform** | Cloudflare Pages |
| **Deploy ID** | `d1251b40-bec4-4c19-a220-c85313829e12` |

## 冒烟测试

| 路径 | HTTP |
|------|:--:|
| / | 200 |
| /breathe/ | 200 |
| /burnout-test/ | 200 |
| /digital-detox/ | 200 |
| /privacy/ | 200 |
| /terms/ | 200 |
| /about/ | 200 |
| /sitemap.xml | 200 |
| /robots.txt | 200 |

## 待人工执行

| 任务 | 优先级 | 说明 |
|------|:--:|------|
| 绑定 calmtool.io 到 Cloudflare Pages | P0 | Cloudflare Dashboard → Pages → calm-tool → Custom domains |
| 提交 GSC | P1 | Google Search Console → 添加资源 → 提交 sitemap |
| 提交 Bing | P2 | Bing Webmaster → Import from GSC |
| 开启 IndexNow | P2 | Cloudflare → Speed → Crawler Hints |
| 设 support@calmtool.io | P2 | 邮件转发或表单 |

## 上线证据

- commit_sha: `main` (GitHub)
- deploy_url: `https://d1251b40.calm-tool.pages.dev`
- smoke test: ✅ 9/9 HTTP 200
- sitemap/robots: ✅ accessible
- analytics: 待 GA4 埋点（Phase 3+）

---

## 下游交接

### 给 Stage 12 (Data Review)
- 等待 1 周数据后复盘
- 监控：GSC impressions/clicks、Cloudflare Analytics
- 内容扩展计划：见 `CLAUDE.md` Post-Launch Content Expansion Plan
