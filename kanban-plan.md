# Kanban Plan — calm-tool

| task_id | stage | skill | owner | input | output | gate | blocked_if | downstream | status |
|---------|-------|-------|-------|-------|--------|------|-----------|------------|--------|
| T01 | 01-research | keyword-research-agent | motan | Launch Card seeds | 01-research-output.md | Research Gate | 无种子词 | 02-PRD | DONE |
| T02 | 02-product | product-definition-prd | moce | 01-research-output.md | 02-product-prd.md | PRD Gate | 缺竞品证据 | 03/04 | READY |
| T03 | 03-pricing | site-pricing-calibration | mozhang | 02-product-prd.md | 03-pricing-output.md | Pricing Gate | 缺成本 | 05 | WAITING |
| T04 | 04-compliance | student-site-compliance-pipeline | — | 02-product-prd.md | 04-compliance-output.md | Compliance Gate | — | 05/09复核 | WAITING |
| T05 | 05-copy | site-copywriting-student | — | 02+03+04 outputs | 05-copywriting-output.md | Copy Freeze Gate | 缺PRD | 06 | WAITING |
| T06 | 06-design | site-design-student | — | 05-copywriting-output.md | 06-design-output.md | Design Source Gate | 缺冻结文案 | 07/08 | WAITING |
| T07 | 07-frontend | frontend-site-automation | — | 06-design-output.md | 07-frontend-output.md | Frontend Gate | 缺设计源 | 09/10 | WAITING |
| T08 | 08-backend | backend-auto-site-cloudflare-workers | — | 02+05+06 outputs | 08-backend-output.md | Data Contract Gate | 纯静态可跳过 | 07/09 | WAITING |
| T09 | 09-qa | student-site-qa-acceptance | — | 07+08 outputs | 09-qa-output.md | QA GO | 缺实现 | 11 | WAITING |
| T10 | 10-seo | seo-launch-workflow | — | 07 output | 10-seo-output.md | SEO GO | 缺前端 | 11 | WAITING |
| T11 | 11-launch | site-ops-growth-launch | — | 09+10 outputs | 11-launch-output.md | Launch Gate | 缺QA_GO | 12 | WAITING |
| T12 | 12-review | site-data-review-iteration | — | 11 output + 1wk data | 12-review-output.md | Data Review Gate | 缺数据 | — | WAITING |

## 任务卡模板

每个任务执行时包含：
- **task_id**: T##  
- **stage**: ##-name  
- **skill**: skill-name  
- **owner**: agent-name  
- **input_paths**: 上游产出文件  
- **output_paths**: 本阶段产出文件  
- **gate**: 闸门名称  
- **blocked_if**: 阻塞条件  
- **downstream**: 下游阶段  
- **status**: READY / RUNNING / BLOCKED / NEEDS_REPAIR / DONE
