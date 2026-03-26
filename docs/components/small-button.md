# Small Button

**Component:** `Small Button`
**Library:** Reskin Library — Prism 1.5
**Node ID:** `8610:14847`
**Figma:** [View in Figma](https://www.figma.com/design/FCxJehkjyuzdt6VJ8K2k4i/Reskin-Library---Prism-1.5?node-id=8610-14847)

---

## Overview

A compact pill-shaped button at 28px height. Used alongside large buttons for secondary or lower-emphasis actions, or in space-constrained contexts such as toolbars, table rows, and filter areas.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `"Primary" \| "Default" \| "Text" \| "Tertiary"` | `"Primary"` | Visual style of the button |
| `state` | `"Default" \| "Hover" \| "Active" \| "Disabled"` | `"Default"` | Interactive state |
| `text` | `string` | `"Button"` | Button label text |
| `leftIcon` | `boolean` | `false` | Show a leading icon (12px) |
| `rightIcon` | `boolean` | `false` | Show a trailing icon (12px) |
| `defaultColumns` | `boolean` | `false` | Show a star indicator (used for "default columns" UI pattern) |

---

## Styles

| Style | Use case |
|-------|----------|
| **Primary** | Most important action in a compact context |
| **Default** | Disabled state treatment for a neutral-styled button |
| **Text** | Brand-coloured text-only button; no background by default |
| **Tertiary** | Lowest-emphasis action; global grey text, subtle hover |

---

## States

| State | Style | Background token | Text token |
|-------|-------|-----------------|------------|
| Default | Primary | `--surface/interactive/primary/brand-default` (#054ad1) | `--text/inverse` (white) |
| Hover | Primary | `--surface/interactive/primary/brand-hover` (#003b8a) | `--text/inverse` (white) |
| Active | Primary | `--surface/interactive/primary/brand-active` (#002352) | `--text/inverse` (white) |
| Default | Text | none | `--text/interactive/brand` (#054ad1) |
| Hover | Text | `--surface/interactive/secondary/brand-hover` (#e5f0ff) | `--text/interactive/brand` (#054ad1) |
| Active | Text | `--surface/interactive/secondary/brand-active` (#abd0fd) | `--text/interactive/brand` (#054ad1) |
| Default | Tertiary | none | `--text/interactive/global` (#55575e) |
| Hover | Tertiary | `--surface/interactive/tertiary/hover` (#f1f1f5) | `--text/interactive/global` (#55575e) |
| Active | Tertiary | `--surface/interactive/tertiary/active` (#e1e3e9) | `--text/interactive/global` (#55575e) |
| Disabled | Default | `--surface/interactive/disabled` (#c7cbd1) | `--text/disabled` (#91949c) |
| Disabled | Text | none | `--text/disabled` (#91949c) |

---

## Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Height | `--component-scale/buttons/small` | 28px |
| Border radius | `--radius/actions` | 999px (pill) |
| Padding X | `--spacing/x3` | 12px |
| Padding Y | `--spacing/x1` | 4px |
| Icon gap | `--spacing/x1` | 4px |
| Font family | `--typography/font-family/font` | Inter |
| Font weight | `--typography/font-weight/button/button-sm` | SemiBold (600) |
| Font size | `--typography/font-size/button/button-sm` | 14px |
| Line height | `--typography/font-lineheight/button/button-sm` | 14px |
| Icon size | — | 12px |

---

## Content Guidelines

- **Max 30 characters**, single line only
- Use **action-oriented labels** (verbs)
- Editing contexts:
  - `"Save"` — saves without leaving the page
  - `"Done"` — leaves a page that autosaves
  - `"Save & done"` — leaves a page that does not autosave

---

## Icons

- One icon per button maximum
- Leading (left) icon: general actions in LTR layouts
- Trailing (right) icon: dropdowns, external links, directional arrows
- Icon and label must share the same colour

---

## Button Groups

- Use only one Primary button per group
- Order (left → right): Secondary → Primary → Action
- When more than 3 buttons are needed, collapse extras into an overflow menu

---

## Accessibility

| Requirement | Guidance |
|-------------|---------|
| ARIA labels | Apply `aria-label` or `aria-pressed` for screen reader support |
| Focused state | Use the "Focused" state variant for keyboard navigation |
| Touch target | Minimum 44px touch target height |
| Spacing | Minimum 12px between interactive elements |
