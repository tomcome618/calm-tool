# Project Control Board

项目：calm-tool
域名：calmtool.io ✅
目标市场：US / English
当前模式：automation_factory
当前状态：RUNNING
事实源：Kanban + PROJECT-CONTROL.md

## 学员只需要处理
- [x] 域名 calmtool.io 已注册 ✅
- [x] DNS/Cloudflare 权限可用 ✅ (CLOUDFLARE_API_TOKEN)
- [ ] GitHub 登录态是否可用 ✅ (GITHUB_TOKEN)
- [ ] 是否允许生产部署
- [ ] 是否允许公开发布/外链提交
- [x] Git 已配置 ✅ (tomcome / tomcome618@gmail.com)

## 自动流水线
| # | Stage | Skill | Output | Status |
|---|-------|-------|--------|--------|
| 01 | research | keyword-research-agent | 01-research-output.md | ✅ DONE |
| 02 | PRD | product-definition-prd | 02-product-prd.md | ✅ DONE |
| 03 | pricing | site-pricing-calibration | 03-pricing-output.md | ✅ DONE |
| 04 | compliance | student-site-compliance-pipeline | 04-compliance-output.md | ✅ DONE |
| 05 | copy | site-copywriting-student | 05-copywriting-output.md | ✅ DONE |
| 06 | design | site-design-student | 06-design-output.md | ✅ DONE |
| 07 | frontend | frontend-site-automation | 07-frontend-output.md | ✅ DONE |
| 08 | backend/data | backend-auto-site-cloudflare-workers | — | SKIPPED (static) |
| 09 | QA | student-site-qa-acceptance | 09-qa-output.md | ✅ DONE |
| 10 | SEO | seo-launch-workflow | 10-seo-output.md | ✅ DONE |
| 11 | launch/ops | site-ops-growth-launch | — | READY |
| 12 | review | site-data-review-iteration | — | WAITING |

## 当前状态
- done：01-07, 09-10（08 skipped）
- running：无
- running：none
- waiting：11-12
- blocked：无
