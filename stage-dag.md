# Stage DAG — calm-tool

## 依赖关系图

```
00 setup / domain / repo / permissions
  │
  └─→ 01 research ✅ DONE
        │
        └─→ 02 PRD / route contract / user tasks
              │
              ├─→ 03 pricing ─────────────┐
              │                            │
              └─→ 04 compliance ──────────┤
                    │                      │
                    └─→ 05 SEO-copy freeze │
                          │                │
                          └─→ 06 design source + content-fit matrix
                                │
                                ├─→ 08 backend / data contract
                                │
                                └─→ 07 frontend implementation
                                      │
                                      ├─→ 10 SEO recheck
                                      ├─→ 04 compliance recheck
                                      └─→ 02 PM acceptance
                                            │
                                            └─→ 09 QA
                                                  │
                                                  ├─→ 07/08 repair loop (if needed)
                                                  │
                                                  └─→ 11 launch ops
                                                        │
                                                        └─→ 12 data review
```

## 并行规则

- 03 定价 和 04 合规 **可并行**（共享 02 PRD 输出）
- 07 前端 和 08 后端 **可并行**（需 05 Copy Freeze + 06 Design Source 先行）
- 10 SEO / 04 合规复核 / 02 PM 复核 **可并行**（实现完成后）
- QA 不可由实现者自证；P0/P1 必须回流返修

## 硬闸门

| 闸门 | 阶段 | 通过条件 |
|------|------|---------|
| Research Gate | 01 | 关键词机会 + SERP 竞品最低能力 |
| PRD / Route Contract Gate | 02 | canonical URL、用户任务、NOT-DO、站点类型 |
| SEO-Copy Freeze Gate | 05 | 设计前冻结 title/meta/H1/H2/FAQ/schema |
| Design Source Gate | 06 | 页面、状态、移动端、content-fit matrix |
| Data Contract Gate | 08 | frontend-consumable schema/seed/API |
| SEO GO | 10 | indexability、schema、sitemap、robots |
| Compliance GO | 04 | Privacy/Terms/Cookie/Refund/claims |
| PM Gate | 02复核 | 实现满足 PRD 和竞品最低能力 |
| QA GO | 09 | 真实用户任务、移动端、P0/P1/P2 |
| Launch Gate | 11 | commit/push/deploy/smoke/analytics |
| Data Review Gate | 12 | 数据四态、渠道归因、Kill/Iterate/Scale |
