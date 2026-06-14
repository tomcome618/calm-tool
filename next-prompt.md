# 下一棒 Prompt — Stage 07: Frontend Implementation

```text
你现在执行 ShipSolo 做站流水线的「前端实现」阶段。

项目：calm-tool (calmtool.io)
当前阶段：07-frontend
技术栈：纯静态 HTML/CSS/JS → Cloudflare Pages
后端：SKIPPED（纯静态，无 Workers/D1）

上游输入：
  - 02-product-prd.md（Route Contract, 页面矩阵）
  - 05-copywriting-output.md（已冻结全量文案）
  - 06-design-output.md（Stitch 4屏 + 441行CSS）
  - design/design-system.css（完整设计系统）
  - design/HANDOFF.md（组件映射 + 实现顺序）

请严格按 frontend-site-automation Skill 执行：
1. 读取 design-system.css 作为样式真源
2. 按 HANDOFF.md 实现顺序构建 7 个 HTML 页面
3. 呼吸圆环动画用 CSS transition（禁用 GSAP）
4. 倦怠评估页嵌入 medical disclaimer + 988 热线
5. 所有 CTA 按钮有真实 href
6. 移动端响应式已验证
7. 输出到 07-frontend-output.md
```
