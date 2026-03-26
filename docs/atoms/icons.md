# Icons

**Section:** Atoms
**Library:** Reskin Library — Prism 1.5
**Figma page:** [Iconography ✨](https://www.figma.com/design/FCxJehkjyuzdt6VJ8K2k4i/Reskin-Library---Prism-1.5?node-id=25-6)
**Jira:** [PCL-63](https://pushpay.atlassian.net/browse/PCL-63)

---

## Overview

The Prism icon library. Icons are used to support labels, represent actions, or communicate status. This page covers usage rules for icons as an atom. For the full foundational icon catalogue, see [Foundation › Icons](/foundation/icons).

---

## Sizes

| Token | Value | Usage |
|-------|-------|-------|
| `--component-scale/icons/small` | 16px | Inline with text (buttons, tags, labels) |
| `--component-scale/icons/medium` | 20px | Action buttons, default UI icons |
| `--component-scale/icons/large` | 24px | Standalone actions, toolbars |
| `--component-scale/icons/x-large` | 28px | Medium avatar icons |
| `--component-scale/icons/hero` | 92px | Hero avatar icons |

---

## Usage Guidelines

1. Icons must always be accompanied by a label **or** a tooltip with `aria-label`
2. Filter icons **must always have a text label** — use a Small Tertiary Button instead of an icon-only button
3. Use icon size that matches its container — don't scale icons arbitrarily
4. Icon and label must share the same colour
5. Do not use icons as the sole means of conveying meaning — pair with text where possible

---

## Accessibility

| Requirement | Guidance |
|-------------|----------|
| Decorative | `aria-hidden="true"` on decorative icons |
| Meaningful | Provide `aria-label` or visible text alternative |
| Touch target | Minimum 44×44px for interactive icon buttons |
