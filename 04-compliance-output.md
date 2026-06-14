# 04 — 合规与基础法律页面

> **Skill**: student-site-compliance-pipeline v2.3.0  
> **执行日期**: 2026-06-13  
> **上游**: 02-product-prd.md, 03-pricing-output.md  
> **状态**: DONE

---

## 一句话结论

MVP 为纯前端匿名工具站，合规风险极低。唯一 P0 事项：**倦怠评估页必须含医疗免责声明 + 988 危机热线。** Privacy/Terms 使用标准模板即可。

---

## 站点数据流审计

| 维度 | 实际情况 | 合规影响 |
|------|---------|---------|
| 用户注册 | ❌ 无 | 无 PII 收集，Privacy 可简化 |
| 登录系统 | ❌ 无 | 无 auth 合规需求 |
| Cookie / 追踪 | ❌ 无（MVP 不加分析） | 无需 cookie banner |
| localStorage | ✅ 呼吸设置/评估结果暂存 | 纯客户端，数据不出浏览器 |
| 第三方请求 | ❌ 无 | 无数据共享 |
| AI API | ❌ 无 | 无 AI 合规需求 |
| 支付 | ❌ 无 | 无 PCI/退款合规需求 |
| 上传 | ❌ 无 | 无内容审核需求 |
| 邮件收集 | ❌ 无 | 无 CAN-SPAM 需求 |
| 广告 | ❌ 无（MVP 期） | 无 FTC 广告披露需求 |

**结论：这是最低合规负担的站点类型。** 没有数据收集 = 没有数据泄露风险 = Privacy Policy 可以非常精简。

---

## P0 合规项（必须上线前完成）

### 1. 医疗免责声明 — `/burnout-test/` 页

```
⚠️ 位置：评估问题上方 + 结果页顶部

"This burnout self-assessment is for informational and educational 
purposes only. It is NOT a clinical diagnosis, medical advice, or a 
substitute for professional mental health care.

If you are experiencing a mental health crisis or having thoughts of 
self-harm, please call or text 988 (US Suicide & Crisis Lifeline) 
or contact your local emergency services immediately."
```

**为什么是 P0**：
- 倦怠评估接近临床心理测量（MBI-GS 简化版）
- 用户可能把结果当成"诊断"
- 不加免责声明 = 法律风险（虽然不是 FDA 监管的医疗设备，但 wellness 领域误导索赔是 FTC 管辖）

### 2. 危机热线 — 结果页 + Footer

```
📞 固定位置：所有工具页 footer
🔥 额外位置：倦怠评估结果页（"高倦怠"结果时弹警告框）

"If you're in crisis (US): call or text 988"
```

---

## P1 合规项（上线前建议完成，不阻塞）

### 3. Privacy Policy — `/privacy/`

> MVP 版本精简即可，以下为可直接上线的全文。

```markdown
# Privacy Policy

_Last updated: [上线日期]_

## What We Collect

**We don't collect anything.** CalmTool is a client-side tool that 
runs entirely in your browser.

- No accounts. No sign-up. No email collection.
- No cookies. No tracking. No analytics (in MVP).
- Your breathing settings, assessment answers, and detox plans are 
  stored only in your browser's local storage. We never see them, 
  never receive them, never store them.

## Third-Party Services

We do not use any third-party services that collect your data.

[后期加 GA4/Clarity 时追加此段]

## Children

CalmTool is not directed at children under 13. We do not knowingly 
collect information from children.

## Changes

We may update this policy. Changes will be posted on this page.

## Contact

[上线后填: contact@calmtool.io 或表单链接]
```

### 4. Terms of Use — `/terms/`

```markdown
# Terms of Use

_Last updated: [上线日期]_

## Acceptable Use

CalmTool provides free wellness tools for personal, non-commercial use.
You agree not to:
- Attempt to disrupt or overload the service
- Use automated tools to scrape content
- Use the burnout assessment in a clinical or diagnostic context

## Medical Disclaimer

CalmTool does not provide medical advice, diagnosis, or treatment.
The burnout self-assessment is for informational purposes only.
Always consult a qualified healthcare professional for medical concerns.

## Intellectual Property

The CalmTool name, logo, and tool designs are our intellectual property.
The breathing exercise patterns (4-7-8, Box Breathing, etc.) are 
well-established techniques in the public domain.

## Limitation of Liability

CalmTool is provided "as is" without warranties. We are not liable 
for any damages arising from use of the tools.

## Governing Law

These terms are governed by the laws of the United States.

## Contact

[上线后填]
```

---

## 页面合规矩阵

| 页面 | 免责声明 | 危机热线 | 禁词检查 | 通过 |
|------|:--:|:--:|:--:|:--:|
| `/` 首页 | — | Footer | — | ✅ |
| `/breathe/` | 呼吸法说明"consult doctor if..." | Footer | — | ✅ |
| `/burnout-test/` | ⚠️ 页首+结果页必须 | Footer + 结果高亮 | 无 Cure/Treat | ⚠️ 待实现 |
| `/digital-detox/` | — | Footer | — | ✅ |
| `/privacy/` | — | — | — | ✅ |
| `/terms/` | — | — | — | ✅ |
| `/about/` | — | — | — | ✅ |

---

## 禁词审计

已有 `03-pricing-output.md` 的禁词清单，复核无遗漏：

| 禁词 | 是否出现 | 说明 |
|------|:--:|------|
| Unlimited | ❌ 未使用 | |
| Free forever | ❌ 未使用 | 用 "Free — no sign-up needed" |
| Lifetime | ❌ 未使用 | |
| Guaranteed | ❌ 未使用 | |
| Medical advice | ❌ 未使用 | 明确声明 "not medical advice" |
| Cure / Treat | ❌ 未使用 | |
| Diagnose | ❌ 未使用 | 用 "assess" / "check" |

---

## 后期合规升级路径

| 触发条件 | 需要加的合规内容 |
|---------|-----------------|
| 加 GA4/Clarity | Privacy 加 analytics 声明 + Cookie banner（如有） |
| 加 Google OAuth | Privacy 加数据收集声明 + Terms 加账号条款 |
| 加 PayPal 支付 | Terms 加退款政策 + Privacy 加支付数据处理 + PCI 自评 |
| 加 Workers AI API | Privacy 加数据处理声明（输入不存储/不训练） |
| 加邮件订阅 | CAN-SPAM 合规 + Privacy 加邮件使用声明 |
| EU 用户占比 > 5% | GDPR cookie consent banner |
| 日活 > 1000 | 完整法律审查（建议请律师过一遍） |

---

## 交付物

| # | 交付物 | 状态 |
|---|--------|------|
| 1 | 数据流审计 | ✅ |
| 2 | P0 合规清单（医疗免责 + 危机热线） | ✅ |
| 3 | Privacy Policy 全文 | ✅ |
| 4 | Terms of Use 全文 | ✅ |
| 5 | 页面合规矩阵 | ✅ |
| 6 | 禁词审计 | ✅ |
| 7 | 后期升级路径 | ✅ |

## 验收清单

- [x] 所有数据流已审计（零收集 = 最低风险）
- [x] 医疗免责声明已写入（P0，待前端实现）
- [x] 988 危机热线已指定位置（footer + 评估结果页）
- [x] Privacy / Terms 全文可用
- [x] 禁词清单无遗漏
- [x] 无虚假法律表述（未声称"律师审核"）

---

## 下游交接摘要

### 当前结论
- **状态**: [DONE]
- **一句话**: 纯前端匿名工具站 = 最低合规负担。P0 仅两项（医疗免责 + 988），Privacy/Terms 已提供可直接上线的模板。

### 给下游的关键信息

| 下游 | 必须做的事 |
|------|-----------|
| **05-copy** | 倦怠评估文案必须嵌入医疗免责声明 |
| **07-frontend** | `/burnout-test/` 页首 + 结果页必须渲染免责声明；footer 固定 988 热线；所有页面不含禁词 |
| **09-QA** | 验收时确认免责声明可见、988 可点击、禁词零出现 |
| **10-SEO** | Privacy / Terms 设为 indexable（合法页面，应该被收录） |
