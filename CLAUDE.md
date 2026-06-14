# calm-tool — ShipSolo Pipeline

## Project State

- Status: RUNNING (Stage 10/13 complete, 11 READY)
- Slug: calm-tool (待域名注册后改目录名)
- Domain: calmtool.io ✅
- Target: US / English
- Type: 工具站 (multi-tool wellness hub)
- Monetization: Free MVP → Pro $4.99/mo (when DAU > 200)

## Pipeline Automation Rule

When the user says "继续" or "推进流水线" or "next":

1. Read this file to find current stage
2. Find the next READY stage in status list below
3. Read the previous stage's output file for handoff context
4. Load the corresponding Skill from /root/.claude/skills/<skill-name>/SKILL.md
5. Execute the Skill following its Preflight → Stage Flow → Deliverables
6. Save output to <stage-number>-<stage-name>-output.md
7. Update this file and PROJECT-CONTROL.md

## Stage Status

| # | Stage | Skill | Output | Status |
|---|-------|-------|--------|--------|
| 01 | research | keyword-research-agent | 01-research-output.md | DONE |
| 02 | product | product-definition-prd | 02-product-prd.md | DONE |
| 03 | pricing | site-pricing-calibration | 03-pricing-output.md | DONE |
| 04 | compliance | student-site-compliance-pipeline | 04-compliance-output.md | DONE |
| 05 | copy | site-copywriting-student | 05-copywriting-output.md | DONE |
| 06 | design | site-design-student | 06-design-output.md | DONE |
| 07 | frontend | frontend-site-automation | 07-frontend-output.md | DONE |
| 08 | backend | backend-auto-site-cloudflare-workers | — | SKIPPED (static) |
| 09 | qa | student-site-qa-acceptance | 09-qa-output.md | DONE |
| 10 | seo | seo-launch-workflow | 10-seo-output.md | DONE |
| 11 | launch | site-ops-growth-launch | — | READY |
| 12 | review | site-data-review-iteration | — | WAITING |

## User Open Items

- [x] Register domain calmtool.io ✅
- [x] Configure git user.name / user.email ✅ (tomcome)
- [x] Project slug confirmed: calm-tool (目录待迁移)
- [x] Monetization: Free MVP → Pro $4.99/mo at DAU > 200
- [x] Pricing designed: $4.99/mo or $39/yr, no Lifetime

## Key Research Insights (from Stage 01)

- Primary: breathing exercise tool + burnout assessment tool (dual-tool hub)
- Extension: digital detox planner
- NOT-DO: generic meditation timer, calm music, mood tracker app
- Competitive moat: pure web-based, zero download, multi-tool hub approach

## Post-Launch Content Expansion Plan

> ⚠️ 这是外置记忆。上线后用户说"继续"时，Agent 必须主动提醒本计划。

Three tools launch together. Content expands in phases AFTER launch:

| Phase | Timing | Tool | Action | Keywords to target |
|-------|--------|------|--------|-------------------|
| 1 | Month 2 | Breathe | Add 2 long-form articles | "4-7-8 breathing science", "box breathing for anxiety" |
| 2 | Month 3 | Burnout | Add 1 pillar article | "burnout vs stress vs depression" |
| 3 | Month 4 | Detox | Add shareable social templates | "digital detox challenge", "screen time reset plan" |
| 4 | Month 5+ | All | Evaluate Data Review metrics → decide next tool | Expand to anxiety grounding exercises 5-4-3-2-1 |
| — | Ongoing | All | Monitor SERP, build backlinks, iterate | All seed words (zen, meditation, spiritual, inner peace) |

Decision trigger after Month 4:
- If traffic > 2,000/mo → add 4th tool (anxiety grounding)
- If traffic < 500/mo → double down on backlinks before expanding
- Always: check Stage 12 Data Review before adding tools

## Gate Status

- Research Gate: ✅ PASSED (with missing_keyword_tool_access note)
- PRD / Route Contract Gate: ✅ PASSED
- Pricing Gate: ✅ PASSED
- Compliance Gate: ✅ PASSED
- SEO-Copy Freeze Gate: ✅ PASSED
- Design Source Gate: ✅ PASSED
- Frontend Gate: ✅ PASSED
- QA GO: ✅ PASSED
- SEO GO: ✅ PASSED
- All other gates: WAITING
