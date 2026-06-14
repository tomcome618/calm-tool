# Design Handoff — calm-tool

## Design System

- **CSS**: `design/design-system.css` (441 lines)
- **Theme**: "Tranquil Wellness" / Tea-house tranquility
- **Stitch Source**: Project `18152209088133777835`

## Stitch Screen IDs

| Page | Route | screenId |
|------|-------|----------|
| Home | `/` | `818b4231f6454db8921c61281b7f4a77` |
| Breathe | `/breathe/` | `c2bd44176cc04cd6a74163bc17999a83` |
| Burnout Test | `/burnout-test/` | `d6b9c40ee66f4be386ea41e6d06081ac` |
| Digital Detox | `/digital-detox/` | `e1ec42e0b3ee49fe98074b42dbc78329` |

## Color Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--green` | `#4A9C7F` | Primary, links, active states |
| `--green-dark` | `#3A7D65` | Logo, headings |
| `--amber` | `#E8A75D` | CTA buttons, highlights |
| `--warm-white` | `#FAF7F2` | Page background |
| `--white` | `#FFFFFF` | Card backgrounds |
| `--text-primary` | `#2D2A26` | Body text |
| `--text-secondary` | `#6B6560` | Subtitle text |

## Component Map

| Component | CSS Class | Usage |
|-----------|-----------|-------|
| Container | `.container` | Max-width centered content |
| Header | `.site-header` | Sticky, glass-morphism |
| Hero | `.hero` | Centered, breathing room |
| Cards | `.card` + `.card-grid` | 3-column tool grid |
| Buttons | `.btn-primary` `.btn-outline` `.btn-ghost` | Amber CTA / Green outline / Ghost |
| Trust Bar | `.trust-bar` | Horizontal pill list |
| Breathing Circle | `.breathe-circle` | CSS animated |
| Pattern Selector | `.pattern-grid` `.pattern-btn` | 4-option grid |
| Scale Questions | `.scale-options` `.scale-btn` | Likert 5-point |
| Score Bars | `.score-row` `.score-bar` `.score-fill` | 3-dimension results |
| Progress | `.progress-bar` `.progress-fill` | Assessment progress |
| FAQ | `.faq-item` `.faq-question` `.faq-answer` | Accordion |
| Disclaimer | `.disclaimer-box` | Amber warning box |
| Plan Card | `.plan-card` | Output display |

## Page Implementation Order

1. index.html — Home (hero + 3 tool cards + trust bar)
2. breathe.html — Breathing tool (pattern selector + circle + FAQ)
3. burnout-test.html — Assessment (disclaimer + questions + results)
4. digital-detox.html — Planner (multi-step form + plan card)
5. privacy.html — From 04-compliance
6. terms.html — From 04-compliance
7. about.html — Simple text layout

## Page Shell Template

All pages share:
```html
<header class="site-header">...</header>
<main class="container">...</main>
<footer class="site-footer">...</footer>
<link rel="stylesheet" href="/css/design-system.css">
```

## Final Button Hierarchy (after review)
| Variant | CSS | Usage |
|---------|-----|-------|
| Primary | `.btn-primary` | Clay filled — Hero CTA, main actions |
| Soft | `.btn-soft` | Light matcha bg + border — Card CTAs, secondary actions |
| Outline | `.btn-outline` | Transparent + border — tertiary |
| Ghost | `.btn-ghost` | Fully transparent — lowest priority |
