# Radio Button

**Component:** `Select Type / Radio`
**Library:** Reskin Library — Prism 1.5
**Node ID:** `17616:117950`
**Figma:** [View in Figma](https://www.figma.com/design/FCxJehkjyuzdt6VJ8K2k4i/Reskin-Library---Prism-1.5?node-id=17616-117950)
**Jira:** [PCL-49](https://pushpay.atlassian.net/browse/PCL-49)

---

## Overview

A radio button allows users to select exactly one option from a group. Selecting one automatically deselects any other in the group. Used in forms, surveys, and settings where a mutually exclusive choice is required.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `state` | see States | `"Unchecked"` | Interactive and visual state |

---

## States

| State | Description |
|-------|-------------|
| `Unchecked` | Default unselected |
| `Unchecked Hover` | Hover — border colour changes |
| `Unchecked Focus` | Keyboard focus ring |
| `Unchecked Error` | Error on unselected option |
| `Unchecked Disabled` | Non-interactive |
| `Checked` | Selected option |
| `Checked Focus` | Selected with focus ring |
| `Checked Error` | Selected with error |
| `Checked Error Focus` | Selected, error + focus ring |
| `Checked Disabled` | Selected but non-interactive |

---

## Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Size | `--component-scale/small` | 20px |
| Border radius | — | 10px (circular) |
| Checked fill | `--icons/interactive/brand-default` | #054ad1 |
| Unchecked border | `--border/interactive/unchecked` | #a9aeb4 |
| Hover background | `--surface/interactive/selector-hover` | #f5f6fa |
| Error fill | `--icons/status/error/default` | #ba1309 |
| Error border | `--border/status/error` | #ba1309 |
| Disabled fill | `--surface/interactive/disabled` | #c7cbd1 |
| Focus border | `--border/interactive/focus` | #242528 |

---

## Usage Guidelines

1. Never use a standalone radio button — always group them
2. All radios in a group must share the same `name` attribute
3. Consider a dropdown when there are more than ~5 options
4. Always show a default selected option where applicable
5. Labels should wrap, not truncate
6. Align radios vertically on small screens

---

## Accessibility

| Requirement | Guidance |
|-------------|----------|
| Semantics | Use `<input type="radio">` grouped in `<fieldset>` with `<legend>` |
| Keyboard | Tab to group, arrow keys to change selection |
| Touch target | Minimum 44×44px |
| Contrast | Minimum 4.5:1 in selected state |

---

## Related Components

- **Checkbox** — for multiple independent selections
- **Select / Dropdown** — for long lists of mutually exclusive options
- **Toggle/Switch** — for binary on/off settings
