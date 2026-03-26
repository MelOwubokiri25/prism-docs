# Action Button

**Component:** `Action Button`
**Library:** Reskin Library — Prism 1.5
**Node ID:** `2259:25929`
**Figma:** [View in Figma](https://www.figma.com/design/FCxJehkjyuzdt6VJ8K2k4i/Reskin-Library---Prism-1.5?node-id=2259-25929)

---

## Overview

A fixed 40×40px circular icon-only button. Used when an action is universally recognised or when space is limited. Commonly found in toolbars, top bars, and cards. Supports an optional notification badge.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `"primary" \| "secondary" \| "FAB (Floating Action Button)"` | `"primary"` | Visual style |
| `state` | `"default" \| "hover" \| "active" \| "disabled"` | `"default"` | Interactive state |
| `icon` | `ReactNode \| null` | `null` | Custom icon (defaults to kebab/ellipsis icon) |
| `numberIndicator` | `boolean` | `true` | Show a notification badge |

---

## Styles

| Style | Description |
|-------|-------------|
| **Primary** | Solid circular button with brand fill. Supports notification badge. |
| **Secondary** | Outlined circle with no fill. No badge. |
| **FAB** | Floating Action Button with elevated/gradient background. Displays above other content. |

---

## States

| Style | State | Treatment |
|-------|-------|-----------|
| Primary | Default | Brand blue fill (`--surface/interactive/primary/brand-default` #054ad1) |
| Primary | Hover | Darker blue (`--surface/interactive/primary/brand-hover` #003b8a) |
| Primary | Active | Darkest blue (`--surface/interactive/primary/brand-active` #002352) |
| Primary | Disabled | Grey fill (`--surface/interactive/disabled` #c7cbd1) |
| Secondary | Default | No fill, outlined circle |
| Secondary | Hover | Light fill background |
| Secondary | Active | Active fill background |
| Secondary | Disabled | Grey, non-interactive |
| FAB | Default | Elevated background (gradient) |

---

## Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Width & Height | `--component-scale/buttons/large` | 40px |
| Icon size | `--component-scale/icons/medium` | 20px |
| Badge font size | `--typography/font-size/text/text-6` | 13px |
| Badge font weight | `--typography/font-weight/text/text-6-semibold` | SemiBold (600) |
| Badge line height | `--typography/font-lineheight/text/text-6` | 14px |
| Badge text | `--text/inverse` | white |
| Badge background | `--icons/interactive/brand-default` | #054ad1 |

---

## Notification Badge

An optional number indicator that sits at the top-right of the button. It appears on Primary `default`, `hover`, and `active` states.

- Size: 16×16px minimum (expands with content)
- Padding: 4px horizontal
- Border radius: 12px
- Shows count (e.g. "1")
- Background: `--icons/interactive/brand-default` (#054ad1)
- Text: `--text/inverse` (white)

---

## Usage Guidelines

1. Use icon-only buttons when the action is **globally recognised** — e.g. search, filter, close, share
2. The **filter icon must always be accompanied by text** — use a Small Tertiary button instead
3. **Maximum 4** action buttons in a row
4. Commonly placed in toolbars, top bars, and cards
5. Always the same width and height: **40px**

---

## Accessibility

| Requirement | Guidance |
|-------------|---------|
| Tooltip | A tooltip with a clear label **must** be displayed on hover — use `aria-label` to describe the action |
| ARIA | Apply `aria-label` so screen readers can identify the button's purpose |
| Touch target | Fixed at 40px; ensure 12px minimum spacing between adjacent buttons |
