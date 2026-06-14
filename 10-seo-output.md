# 10 — SEO 上线与收录配置

> **Skill**: seo-launch-workflow v2.3.0  
> **执行日期**: 2026-06-13  
> **状态**: DONE (GSC/Bing 待域名绑定后提交)

---

## 一句话结论

SEO 基础完整：7 页全 indexable、schema 完整、sitemap/robots 就绪。GSC/Bing 提交待 Cloudflare Pages 绑定域名后执行。

## Indexability 审计

| 页面 | index | canonical | title (字符) | meta desc | schema | H1 |
|------|:--:|------|:--:|:--:|:--:|:--:|
| / | ✅ | calmtool.io/ | 58 | ✅ | WebApplication | 1 |
| /breathe/ | ✅ | calmtool.io/breathe/ | 44 | ✅ | WebApplication | 1 |
| /burnout-test/ | ✅ | calmtool.io/burnout-test/ | 50 | ✅ | WebApplication | 1 |
| /digital-detox/ | ✅ | calmtool.io/digital-detox/ | 55 | ✅ | — | 1 |
| /privacy/ | ✅ | calmtool.io/privacy/ | 22 | ✅ | — | 1 |
| /terms/ | ✅ | calmtool.io/terms/ | 19 | ✅ | — | 1 |
| /about/ | ✅ | calmtool.io/about/ | 38 | ✅ | — | 1 |

## 技术 SEO

| 项目 | 状态 |
|------|:--:|
| sitemap.xml | ✅ 7 URLs |
| robots.txt | ✅ Allow all + Sitemap URL |
| canonical URLs | ✅ 全页面 |
| HTTPS | ⏳ 部署后 Cloudflare 自动 |
| 移动端友好 | ✅ 响应式 768/480 断点 |
| Core Web Vitals | ⏳ 部署后实测（纯静态，预期全绿） |
| Schema markup | ✅ WebApplication × 3 |

## 待部署后执行

| 任务 | 方法 |
|------|------|
| 提交 GSC | Google Search Console → 添加资源 → sitemap |
| 提交 Bing | Bing Webmaster → Import from GSC |
| IndexNow | Cloudflare → Speed → Crawler Hints |
| GA4 埋点 | 后期加 `<script>`，当前 MVP 无分析 |

## 关键词目标覆盖

| 页面 | 主词 |
|------|------|
| / | free wellness tools, breathing exercise tool |
| /breathe/ | free online breathing exercise tool, 4-7-8 breathing |
| /burnout-test/ | burnout self assessment, burnout test online free |
| /digital-detox/ | digital detox planner, screen time detox plan |

---

## 下游交接

### 给 11-launch
- sitemap: `/sitemap.xml`
- robots: `/robots.txt`
- 部署后优先提交 GSC + Bing
- IndexNow 在 Cloudflare Dashboard 开启
