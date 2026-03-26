# Tag

**Component:** `Tag`
**Library:** Reskin Library — Prism 1.5
**Node ID:** `5571:45878`
**Figma:** [View in Figma](https://www.figma.com/design/FCxJehkjyuzdt6VJ8K2k4i/Reskin-Library---Prism-1.5?node-id=5571-45878)
**Jira:** [PCL-52](https://pushpay.atlassian.net/browse/PCL-52)

---

## Overview

Compact contextual elements used to categorise, highlight, or communicate short metadata — status, type, or category label. Tags support content scanning and help users identify attributes at a glance. They are not primary action elements.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `"With Label" \| "IconTag"` | `"With Label"` | Text label or icon-only |
| `color` | see Colors | `"Grey"` | Semantic colour |
| `text` | `string` | `"Tag"` | Label text (With Label style) |
| `hasLeftIcon` | `boolean` | `true` | Show leading icon |
| `hasRightIcon` | `boolean` | `false` | Show trailing icon |
| `icon` | `ReactNode \| null` | `null` | Custom icon |
| `showTooltip` | `boolean` | `false` | Show tooltip (IconTag only) |

---

## Styles

| Style | Description |
|-------|-------------|
| **With Label** | Text label with optional leading/trailing icon |
| **IconTag** | Icon-only in a small square container |

---

## Colors

| Color | Background | Text | Use for |
|-------|-----------|------|---------|
| Grey | `--surface/status/info/grey` (#e1e3e9) | `--text/common` (#4b4d53) | Default / neutral |
| Red | `--surface/status/info/red` (#ffdbd6) | `--text/info/red` (#68170c) | Error, failed |
| Yellow | `--surface/status/info/yellow` (#ffebc3) | `--text/info/yellow` (#782d0d) | In progress, warning |
| Green | `--surface/status/info/green` (#ccf2e0) | `--text/info/green` (#094f2c) | Success, complete |
| Teal | `--surface/status/info/teal` (#e5f6f6) | `--text/info/teal` (#003535) | Info |
| Blue | `--surface/status/info/blue` (#e5f0ff) | `--text/info/blue` (#002352) | Info |
| Purple | `--surface/status/info/purple` (#f4e5ff) | `--text/info/purple` (#300053) | Info |

---

## Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Height | `--component-scale/default` | 24px |
| Max width | — | 256px |
| Padding X | `--spacing/x3` | 12px |
| Padding Y | `--spacing/x1` | 4px |
| Border radius | `--radius/small` | 4px |
| Font size | `--typography/font-size/text/text-6` | 13px |
| Font weight | `--typography/font-weight/text/text-6-semibold` | SemiBold (600) |
| Line height | `--typography/font-lineheight/text/text-6` | 14px |

---

## Usage Guidelines

1. Use to categorise content, display status, or represent filters
2. Keep labels short — single words or short phrases
3. Max width 256px — truncate with ellipsis; show full text via tooltip
4. Do not use tags as primary actions — use Buttons
5. Avoid overloading the UI with tags; too many reduce scanability
6. Don't use colour alone to convey meaning — include text or icons

---

## Accessibility

| Requirement | Guidance |
|-------------|----------|
| ARIA | `aria-label` or `aria-labelledby` for context |
| Contrast | Minimum 4.5:1 between text and background |
| Removable tags | `aria-label="Remove tag [name]"` on dismiss buttons |
| Focus | Clearly visible focus indicator |
| Touch target | Minimum 44×44px for interactive tags |

---

## Related Components

- **Badge** — for notification or count indicators
- **Dot Indicator** — for status dot without a label
