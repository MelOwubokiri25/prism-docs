# Checkbox

**Component:** `Select Type / Checkbox`
**Library:** Reskin Library — Prism 1.5
**Node ID:** `17616:42547`
**Figma:** [View in Figma](https://www.figma.com/design/FCxJehkjyuzdt6VJ8K2k4i/Reskin-Library---Prism-1.5?node-id=17616-42547)
**Jira:** [PCL-47](https://pushpay.atlassian.net/browse/PCL-47)

---

## Overview

A checkbox allows users to make binary or multi-selections. Check to select, uncheck to deselect. Used in forms, filters, settings, and preference panels. Supports an indeterminate state for parent checkboxes with partial child selection.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `state` | see States | `"Unchecked"` | Interactive and visual state |

---

## States

| State | Description |
|-------|-------------|
| `Unchecked` | Default unselected state |
| `Unchecked Hover` | Hover — subtle background cue |
| `Unchecked Focus` | Keyboard focus ring visible |
| `Unchecked Error` | Error on an unselected field |
| `Unchecked Disabled` | Non-interactive, visually muted |
| `Checked` | Option is selected |
| `Checked Focus` | Selected with keyboard focus ring |
| `Checked Error` | Error on a selected field |
| `Checked Error Focus` | Error + focus ring |
| `Checked ReadOnly` | Selected but non-editable |
| `Indeterminate` | Mixed state — some children selected |

---

## Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Size | `--component-scale/small` | 20px |
| Border radius | `--radius/small` | 4px |
| Checked fill | `--icons/interactive/brand-default` | #054ad1 |
| Unchecked border | `--border/interactive/unchecked` | #a9aeb4 |
| Error fill/border | `--icons/status/error/default` | #ba1309 |
| Hover background | `--surface/interactive/selector-hover` | #f5f6fa |
| Disabled fill | `--surface/interactive/disabled-light` | #f1f1f5 |
| Focus border | `--border/interactive/focus` | #242528 |
| Read-only fill | `--surface/interactive/readonly` | #f5f6fa |

---

## Usage Guidelines

1. Use when **multiple options** can be independently selected
2. Always pair with a visible, clickable label
3. For a single binary choice, prefer a Toggle/Switch
4. Group under a parent checkbox with indeterminate state for tree selections
5. Clicking an indeterminate parent selects all children
6. Minimum 8px spacing between checkbox and label

---

## Accessibility

| Requirement | Guidance |
|-------------|----------|
| Semantics | Use `<input type="checkbox">` |
| Label | `aria-label` or `aria-labelledby` |
| Keyboard | Tab to focus, Spacebar to toggle |
| Touch target | Minimum 44×44px |
| Contrast | Minimum 3:1 ratio against background |

---

## Related Components

- **Radio Button** — for single-selection from a group
- **Toggle/Switch** — for binary on/off settings
- **Segmented Button** — for mutually exclusive tab-like selections
