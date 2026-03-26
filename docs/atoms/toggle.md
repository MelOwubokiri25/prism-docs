# Toggle / Switch

**Component:** `Select Type / Switch`
**Library:** Reskin Library — Prism 1.5
**Node ID:** `17616:117951`
**Figma:** [View in Figma](https://www.figma.com/design/FCxJehkjyuzdt6VJ8K2k4i/Reskin-Library---Prism-1.5?node-id=17616-117951)
**Jira:** [PCL-53](https://pushpay.atlassian.net/browse/PCL-53)

---

## Overview

A toggle switch lets users flip between two mutually exclusive states — on and off. The action takes effect immediately without confirmation. Best for persistent settings or preferences (e.g. enable notifications, dark mode).

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `state` | `"Checked" \| "Unchecked" \| "Checked Disabled" \| "Unchecked Disabled"` | `"Unchecked"` | Visual and interactive state |

---

## States

| State | Track colour | Thumb |
|-------|-------------|-------|
| `Unchecked` | `--surface/interactive/unchecked` (#c7cbd1) | White circle (left) |
| `Checked` | `--icons/interactive/brand-default` (#054ad1) | White circle + tick (right) |
| `Unchecked Disabled` | `--surface/interactive/disabled` (#c7cbd1) | Disabled light circle |
| `Checked Disabled` | `--surface/interactive/disabled` (#c7cbd1) | Disabled circle + tick |

---

## Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Width | `--component-scale/xx-large` | 52px |
| Height | `--component-scale/large` | 28px |
| Thumb size | — | 24px |
| Border radius | — | 9999px (pill) |
| Checked track | `--icons/interactive/brand-default` | #054ad1 |
| Unchecked track | `--surface/interactive/unchecked` | #c7cbd1 |
| Disabled track | `--surface/interactive/disabled` | #c7cbd1 |
| Disabled thumb | `--surface/interactive/disabled-light` | #f1f1f5 |

---

## Usage Guidelines

1. Use when toggling **takes effect immediately** — no save/confirm step required
2. If a confirmation is needed, use a **Checkbox** or **Button** instead
3. Do not use for navigation or triggering modals
4. Label should not truncate — wrap text if needed
5. Minimum 8px spacing between switch and label
6. Do not default to "on" unless the feature is safe to assume active

---

## Accessibility

| Requirement | Guidance |
|-------------|----------|
| ARIA | `role="switch"` with `aria-checked` updated dynamically |
| Label | `aria-label` or visible label with `for` attribute |
| Keyboard | Spacebar or Enter to toggle; Tab focusable |
| Touch target | Minimum 44×44px |
| Contrast | 4.5:1 between track and background in both states |

---

## Related Components

- **Checkbox** — for multiple selections or deferred actions
- **Radio Button** — for selecting one of several options
- **Button** — for actions requiring confirmation
