# 05 — 落地页文案与转化结构

> **Skill**: site-copywriting-student v2.3.0  
> **执行日期**: 2026-06-13  
> **上游**: 02-product-prd.md, 03-pricing-output.md, 04-compliance-output.md  
> **状态**: DONE — SEO-Copy Freeze

---

## 禁词自检（全部页面通过）

| 禁词 | / | /breathe/ | /burnout-test/ | /detox/ | /privacy/ | /terms/ | /about/ |
|------|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| Unlimited | — | — | — | — | — | — | — |
| Free forever | — | — | — | — | — | — | — |
| Lifetime | — | — | — | — | — | — | — |
| Guaranteed | — | — | — | — | — | — | — |
| Cure / Treat | — | — | — | — | — | — | — |
| Medical advice | — | — | ❌ 改为"not medical advice" | — | — | — | — |
| Diagnose | — | — | ❌ 改为"assess" | — | — | — | — |

---

## P1 — 首页 `/`

### SEO Meta

```
title: Free Wellness Tools — Breathing Exercises, Burnout Test & Digital Detox
meta:  Free online wellness tools: guided breathing exercises, burnout self-assessment, and digital detox planner. No app, no sign-up, no cost. Start in seconds.
```

### Hero Section

```html
<h1>Feel better in minutes.<br>No app. No sign-up. No cost.</h1>

<p>Three simple, science-backed tools to help you breathe easier,
check your stress, and reset your screen habits — right in your browser.</p>

<a href="/breathe/">Start Breathing Exercise</a>
<span>Free · Works on mobile · No download</span>
```

### Tool Cards

```html
<!-- Card 1: Breathing -->
<div>
  <span>🫁</span>
  <h2>Breathing Exercises</h2>
  <p>4 guided techniques — 4-7-8, Box Breathing, and more.
  Animated guide follows along. No timer to set, just follow the circle.</p>
  <a href="/breathe/">Try Breathing Tool →</a>
</div>

<!-- Card 2: Burnout -->
<div>
  <span>📋</span>
  <h2>Burnout Self-Check</h2>
  <p>15 questions · 3 minutes · Instant results.
  Science-based assessment to understand where your stress level really is.</p>
  <a href="/burnout-test/">Take the Assessment →</a>
</div>

<!-- Card 3: Digital Detox -->
<div>
  <span>📵</span>
  <h2>Digital Detox Planner</h2>
  <p>Build a personalized screen-time reset plan in 2 minutes.
  Pick your detox style, choose offline activities, get your plan.</p>
  <a href="/digital-detox/">Create Your Plan →</a>
</div>
```

### Trust Bar

```html
<p>100% free &nbsp;·&nbsp; No account needed &nbsp;·&nbsp; Works on mobile &nbsp;·&nbsp; Private by design</p>
```

### Footer

```html
<footer>
  <p>CalmTool — Free wellness tools for everyday calm.</p>
  <nav>
    <a href="/privacy/">Privacy</a>
    <a href="/terms/">Terms</a>
    <a href="/about/">About</a>
  </nav>
  <p>If you're in crisis (US): call or text <strong>988</strong></p>
</footer>
```

### Schema

```json
{
  "@type": "WebApplication",
  "name": "CalmTool",
  "description": "Free online wellness tools — breathing exercises, burnout assessment, and digital detox planner.",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0" }
}
```

---

## P2 — 呼吸练习工具 `/breathe/`

### SEO Meta

```
title: Free Online Breathing Exercise Tool — 4 Guided Patterns
meta:  Free guided breathing exercises in your browser. 4-7-8, Box Breathing, and custom patterns. Animated circle guides each breath. No app, no sign-up, mobile-friendly.
```

### Page Copy

```html
<h1>Free Online Breathing Exercise Tool</h1>

<p>Follow the circle. Breathe in. Hold. Breathe out.
Choose a pattern below — the animation guides you through every step.</p>

<!-- Pattern Selector -->
<h2>Choose your breathing pattern</h2>

<div>
  <button>
    <strong>4-7-8 Relaxation</strong>
    <span>Inhale 4s · Hold 7s · Exhale 8s</span>
    <span>Best for: falling asleep, acute anxiety</span>
  </button>

  <button>
    <strong>Box Breathing</strong>
    <span>Inhale 4s · Hold 4s · Exhale 4s · Hold 4s</span>
    <span>Best for: focus reset, pre-meeting calm</span>
  </button>

  <button>
    <strong>Simple Calm</strong>
    <span>Inhale 4s · Hold 2s · Exhale 6s</span>
    <span>Best for: quick stress relief, any time</span>
  </button>

  <button>
    <strong>Custom</strong>
    <span>Set your own inhale, hold, and exhale times</span>
    <span>Best for: experienced practitioners</span>
  </button>
</div>

<!-- Breathing Circle Area -->
<div>
  <p id="instruction">Inhale slowly...</p>
  <!-- Animated circle goes here -->
  <p>Rounds: <span>3</span> &nbsp; Duration: <span>1:45</span></p>
  <button>Start</button>
  <button>Pause</button>
  <button>Reset</button>
</div>
```

### FAQ Section

```html
<h2>Frequently asked questions</h2>

<h3>What is 4-7-8 breathing?</h3>
<p>4-7-8 breathing is a relaxation technique developed by Dr. Andrew Weil.
It works by extending your exhale, which activates your parasympathetic
nervous system — the "rest and digest" mode. Inhale for 4 seconds, hold
for 7, exhale for 8. It's especially effective for falling asleep and
managing acute stress.</p>

<h3>How does box breathing work?</h3>
<p>Box breathing (also called square breathing or 4-4-4-4) is used by
Navy SEALs, athletes, and first responders to stay calm under pressure.
Equal counts for inhale, hold, exhale, and hold create a steady rhythm
that lowers heart rate and sharpens focus. It takes about one minute
per cycle and can be done anywhere.</p>

<h3>Which technique should I use?</h3>
<ul>
  <li><strong>Trouble sleeping?</strong> → 4-7-8 Relaxation</li>
  <li><strong>Pre-meeting nerves?</strong> → Box Breathing</li>
  <li><strong>General stress relief?</strong> → Simple Calm</li>
  <li><strong>Want full control?</strong> → Custom pattern</li>
</ul>

<h3>Is there any risk to breathing exercises?</h3>
<p>Breathing exercises are generally safe for most people. If you feel
lightheaded, stop and return to normal breathing. If you have a
respiratory condition, heart condition, or are pregnant, consult your
doctor before trying extended breath-holding techniques.</p>

<h3>Can I use this on my phone?</h3>
<p>Yes. CalmTool works on any device with a browser — phone, tablet,
laptop, or desktop. No app download needed.</p>
```

### Cross-link

```html
<p>Feeling overwhelmed beyond what breathing can fix?
<a href="/burnout-test/">Take our free burnout self-assessment →</a></p>
```

### Schema

```json
{
  "@type": "WebApplication",
  "name": "CalmTool Breathing Exercise",
  "description": "Free online guided breathing exercise tool with 4 patterns.",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Any"
}
```

---

## P3 — 倦怠自测 `/burnout-test/`

### SEO Meta

```
title: Free Burnout Self-Assessment — Check Your Stress Level Online
meta:  Science-based burnout self-check. 15 questions, 3 minutes, instant results with personalized recommendations. Free, anonymous, no registration.
```

### ⚠️ Medical Disclaimer (P0 — page top)

```html
<div>
  <p><strong>Important:</strong> This assessment is for informational and
  educational purposes only. It is <em>not</em> a clinical diagnosis,
  medical advice, or a substitute for professional mental health care.</p>
  <p>If you're experiencing a crisis or having thoughts of self-harm,
  call or text <strong>988</strong> (US Suicide & Crisis Lifeline) or
  contact your local emergency services immediately.</p>
</div>
```

### Assessment Intro

```html
<h1>Free Burnout Self-Assessment</h1>

<p>15 questions. About 3 minutes. Instant, private results.</p>

<p>This assessment looks at three dimensions of burnout:
emotional exhaustion, disconnection from your work, and
sense of accomplishment. No data is stored or sent anywhere —
your answers stay in your browser.</p>

<button>Start Assessment</button>
```

### The 15 Questions

```text
Rate each statement from 1 (Never) to 5 (Every day):

Section A — Emotional Exhaustion
1. I feel emotionally drained by my work.
2. I feel used up at the end of the workday.
3. I feel fatigued when I get up and have to face another day.
4. Working with people all day is a real strain.
5. I feel burned out from my work.

Section B — Depersonalization (Disconnection)
6. I've become less interested in my work since I started.
7. I've become less enthusiastic about my work.
8. I just want to do my job and not be bothered.
9. I've become more cynical about whether my work contributes anything.
10. I doubt the significance of my work.

Section C — Personal Accomplishment (Reverse-scored)
11. I can effectively solve problems that arise in my work.
12. I feel I'm making a positive contribution.
13. I feel energetic and engaged at work.
14. I have accomplished many worthwhile things in this job.
15. In my work, I deal with emotional problems very calmly.

Scale: 1 = Never · 2 = Rarely · 3 = Sometimes · 4 = Often · 5 = Every day
```

### Results Page

```html
<h2>Your Burnout Profile</h2>

<!-- Score visualization — horizontal bars -->
<div>
  <div>
    <span>Emotional Exhaustion</span>
    <span>18 / 25 — <strong>High</strong></span>
    <div style="width: 72%; background: var(--amber);"></div>
  </div>
  <div>
    <span>Disconnection</span>
    <span>14 / 25 — <strong>Moderate</strong></span>
    <div style="width: 56%; background: var(--amber);"></div>
  </div>
  <div>
    <span>Personal Accomplishment</span>
    <span>12 / 25 — <strong>Low</strong></span>
    <div style="width: 48%; background: var(--green);"></div>
  </div>
</div>

<h3>What this means</h3>
<p>Your scores suggest you're experiencing <strong>high emotional exhaustion</strong>
with moderate feelings of disconnection. This pattern is common among people
who care deeply about their work but have been under sustained pressure
without adequate recovery.</p>

<h3>Recommended next steps</h3>
<ul>
  <li><strong>Start with breathing:</strong> Try the <a href="/breathe/">4-7-8 technique</a>
  for immediate stress relief.</li>
  <li><strong>Set boundaries:</strong> Define a hard stop time for work each day.</li>
  <li><strong>Talk to someone:</strong> Consider speaking with a therapist or
  counselor. <a href="https://www.psychologytoday.com/us/therapists" target="_blank">Find one near you →</a></li>
  <li><strong>Reset your habits:</strong> Create a <a href="/digital-detox/">digital detox plan</a>
  to reduce after-hours screen time.</li>
</ul>

<!-- Crisis warning for high scores -->
<div>
  <p>If these results resonate strongly and you're struggling,
  please reach out. Call or text <strong>988</strong> (US) —
  free, confidential, 24/7.</p>
</div>

<p><em>This is not a clinical diagnosis. These results are based on
a simplified self-report tool and should not replace professional evaluation.</em></p>
```

### Cross-link

```html
<p>Want immediate relief? <a href="/breathe/">Try our guided breathing exercises →</a></p>
```

### Schema

```json
{
  "@type": "WebApplication",
  "name": "CalmTool Burnout Self-Assessment",
  "description": "Free science-based burnout self-assessment. 15 questions with instant results.",
  "applicationCategory": "HealthApplication"
}
```

---

## P4 — 数字排毒计划 `/digital-detox/`

### SEO Meta

```
title: Free Digital Detox Planner — Create Your Screen Time Reset Plan
meta:  Build a personalized digital detox plan in 2 minutes. Set screen-free hours, choose offline activities, and start resetting your relationship with screens. Free, no sign-up.
```

### Page Copy

```html
<h1>Free Digital Detox Planner</h1>

<p>Answer a few quick questions and get a personalized plan
to reset your screen habits — in about 2 minutes.</p>

<!-- Step 1: Current habits -->
<h2>Step 1: Your current screen time</h2>
<p>How many hours per day do you spend on your phone
(outside of work)?</p>
<select>
  <option>Less than 2 hours</option>
  <option>2–4 hours</option>
  <option>4–6 hours</option>
  <option>6–8 hours</option>
  <option>8+ hours</option>
</select>

<!-- Step 2: Problematic times -->
<h2>Step 2: When screens hit hardest</h2>
<p>Which time of day do you most want to reduce screen use?</p>
<div>
  <button>First thing in the morning</button>
  <button>During work hours</button>
  <button>After work / evening</button>
  <button>Right before bed</button>
  <button>Weekends</button>
</div>

<!-- Step 3: Detox style -->
<h2>Step 3: Choose your detox style</h2>
<div>
  <button>
    <strong>Weekend Reset</strong>
    <span>48-hour light detox. Reduced notifications, no social media before noon.</span>
  </button>
  <button>
    <strong>Evening Wind-Down</strong>
    <span>Screen-free 90 minutes before bed. Replace with reading, journaling, or music.</span>
  </button>
  <button>
    <strong>Morning First Hour</strong>
    <span>No phone for the first hour after waking. Start your day on your terms.</span>
  </button>
  <button>
    <strong>Custom</strong>
    <span>Pick your own screen-free windows and replacement activities.</span>
  </button>
</div>

<!-- Step 4: Offline activities -->
<h2>Step 4: Pick replacement activities</h2>
<p>What would you do instead of scrolling?</p>
<div>
  <label><input type="checkbox"> Read a book</label>
  <label><input type="checkbox"> Go for a walk</label>
  <label><input type="checkbox"> Journal or write</label>
  <label><input type="checkbox"> Cook a meal</label>
  <label><input type="checkbox"> Call a friend</label>
  <label><input type="checkbox"> Meditate or stretch</label>
  <label><input type="checkbox"> Listen to music / podcast</label>
  <label><input type="checkbox"> Tidy or organize something</label>
</div>

<button>Generate My Plan</button>
```

### Plan Output Card

```html
<h2>Your Digital Detox Plan</h2>

<div>
  <strong>Style:</strong> Evening Wind-Down
  <strong>Screen-free window:</strong> 9:00 PM – 10:30 PM
  <strong>Activities:</strong> Reading, Journaling, Stretching

  <h3>Your daily routine</h3>
  <ul>
    <li>9:00 PM — Phone goes on "Do Not Disturb"</li>
    <li>9:05 PM — 10 minutes of stretching</li>
    <li>9:15 PM — Read one chapter</li>
    <li>9:40 PM — Journal: one thing you're grateful for today</li>
    <li>10:00 PM — Lights low, prepare for sleep</li>
    <li>10:30 PM — Bedtime</li>
  </ul>

  <h3>Tips for sticking with it</h3>
  <ul>
    <li>Charge your phone outside the bedroom</li>
    <li>Use a physical alarm clock instead of your phone</li>
    <li>Tell a friend about your plan — accountability helps</li>
    <li>If you slip up, just start again tomorrow</li>
  </ul>
</div>

<button>📸 Save or screenshot this plan</button>
<button>🔄 Start over</button>
```

### Cross-link

```html
<p>Feeling stressed even when you're offline?
<a href="/burnout-test/">Check your burnout level →</a></p>
```

---

## P5 — Privacy Policy `/privacy/`

> 直接从 04-compliance-output.md 取全文，文案阶段不做改动。

---

## P6 — Terms of Use `/terms/`

> 直接从 04-compliance-output.md 取全文，文案阶段不做改动。

---

## P7 — About `/about/`

### SEO Meta

```
title: About CalmTool — Free Wellness Tools for Everyday Calm
meta:  Why we built CalmTool: free breathing exercises, burnout self-checks, and digital detox plans — no apps, no accounts, no cost. Private by design.
```

### Page Copy

```html
<h1>About CalmTool</h1>

<h2>Why we built this</h2>

<p>Most wellness tools live behind app downloads, subscription paywalls,
and email sign-up forms. We think that's backwards — the people who need
calm the most are often the ones with the least energy to jump through hoops.</p>

<p>CalmTool gives you three simple, science-backed tools that work
the moment you open them. No apps. No accounts. No cost. Just your
browser and a few minutes.</p>

<h2>How our tools work</h2>

<ul>
  <li><strong>Breathing exercises</strong> — Animated visual guide follows
  each breath. Choose from clinically-studied patterns like 4-7-8 and
  Box Breathing, or set your own rhythm.</li>
  <li><strong>Burnout self-check</strong> — A 15-question assessment based
  on the MBI-GS framework. Instant results break down emotional exhaustion,
  disconnection, and sense of accomplishment — with practical next steps.</li>
  <li><strong>Digital detox planner</strong> — Answer a few questions about
  your screen habits and get a personalized plan in under 2 minutes.</li>
</ul>

<h2>Privacy first</h2>

<p>Your data never leaves your browser. Breathing settings, assessment
answers, detox plans — they all live in your device's local storage.
We don't collect, see, or store any of it. <a href="/privacy/">Read our privacy policy →</a></p>

<h2>Important note</h2>

<p>CalmTool is not a medical device and does not provide medical advice.
Our burnout assessment is for self-reflection only. If you're in crisis
(US), call or text <strong>988</strong>.</p>
```

---

## 全局元素汇总

### Header（所有页面共用）

```html
<header>
  <a href="/">CalmTool</a>
  <nav>
    <a href="/breathe/">Breathe</a>
    <a href="/burnout-test/">Burnout Test</a>
    <a href="/digital-detox/">Digital Detox</a>
  </nav>
</header>
```

### Footer（所有页面共用）

```html
<footer>
  <p>CalmTool — Free wellness tools. No apps, no accounts, no cost.</p>
  <nav>
    <a href="/privacy/">Privacy</a>
    <a href="/terms/">Terms</a>
    <a href="/about/">About</a>
  </nav>
  <p>If you're in crisis (US): call or text <strong>988</strong></p>
</footer>
```

### Micro-copy 规范

| 元素 | 文案 | 原则 |
|------|------|------|
| CTA 按钮 | "Try Breathing Tool", "Start Assessment", "Create My Plan" | 动词开头，具体，无虚假承诺 |
| 空状态 | "Select a pattern to begin" | 帮助性，不责备 |
| 加载状态 | "Following along..." | 进行时态，温和 |
| 完成状态 | "Plan ready — screenshot to save" | 明确告知下一步 |
| 错误状态 | "Something went wrong. Refresh the page." | 诚实，给出动作 |
| 信任标记 | "Free · No sign-up · Works on mobile" | 每次出现不重复超过 3 项 |

---

## 交付物

| # | 交付物 | 状态 |
|---|--------|------|
| 1 | 首页完整文案 + Schema | ✅ |
| 2 | 呼吸工具文案 + FAQ + Schema | ✅ |
| 3 | 倦怠评估文案 + 15题 + 结果页 + Schema | ✅ |
| 4 | 数字排毒文案 + 4步表单 + 输出卡片 | ✅ |
| 5 | 关于页文案 | ✅ |
| 6 | Header / Footer 全局组件 | ✅ |
| 7 | Micro-copy 规范 | ✅ |
| 8 | 禁词自检（7 页 × 7 禁词） | ✅ 全部通过 |

## 验收清单

- [x] 每个 indexable 页面有完整 title / meta / H1 / H2
- [x] FAQ 覆盖呼吸工具核心疑问
- [x] 倦怠评估含 P0 医疗免责声明（页首 + 结果页）
- [x] 988 热线出现在 footer + 倦怠结果页
- [x] 禁词零出现
- [x] CTA 动词化，无虚假承诺
- [x] Schema markup 已定义（WebApplication × 3）
- [x] 隐私/条款文案直接引用 04-compliance 全文

---

## 下游交接摘要

### 当前结论
- **状态**: [DONE] — SEO-Copy Freeze
- **一句话**: 7 页完整文案已冻结，含全量 SEO meta、15 题倦怠量表、FAQ、CTA、micro-copy 规范和全局组件。

### 给下游（06-design / 07-frontend）
- **必须读取**: 本文 + 02-product-prd.md §5 页面矩阵 + §6 Visual Style Brief
- **设计起点**: 配色 #4A9C7F / #FAF7F2 / #E8A75D，字体 Inter/system-ui，茶室温暖感
- **前端注意**: 
  - 倦怠页 medical disclaimer 必须在页首 + 结果页渲染
  - Footer 988 必须可点击 (tel:988)
  - 呼吸圆环动画用 CSS transition，禁用 GSAP/重框架
  - 所有 CTA 按钮动词化，不写 "Submit" 或 "Click here"
