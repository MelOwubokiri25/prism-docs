# Tooltip

**Component:** `Tooltip / Text`
**Library:** Reskin Library — Prism 1.5
**Node ID:** `4322:38461`
**Figma:** [View in Figma](https://www.figma.com/design/FCxJehkjyuzdt6VJ8K2k4i/Reskin-Library---Prism-1.5?node-id=4322-38461)
**Jira:** [PCL-54](https://pushpay.atlassian.net/browse/PCL-54)

---

## Overview

A small non-intrusive overlay providing contextual information when users hover or focus on a UI element. Ideal for clarifying icon-only buttons, explaining unusual terms, or offering supplementary guidance that isn't critical to the task.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `location` | `"Top" \| "Bottom" \| "Left" \| "Right"` | `"Top"` | Direction the tooltip points from |
| `text` | `string` | `"Lorem ipsum..."` | Tooltip content |

---

## Locations

| Location | Arrow position | Use when |
|----------|---------------|----------|
| `Top` | Arrow points down | Element is near the bottom of the viewport |
| `Bottom` | Arrow points up | Element is near the top |
| `Left` | Arrow points right | Element is near the right edge |
| `Right` | Arrow points left | Element is near the left edge |

---

## Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Max width | — | 240px |
| Background | `--surface/status/info/tooltip` | #4b4d53 |
| Text colour | `--text/inverse` | white |
| Font size | `--typography/font-size/text/text-5` | 14px |
| Font weight | `--typography/font-weight/text/text-5-regular` | Regular (400) |
| Line height | `--typography/font-lineheight/text/text-5` | 20px |
| Border radius | `--radius/small` | 4px |
| Padding | — | 8px |
| Shadow | `--elevation/level-2` | level-2 drop shadow |

---

## Usage Guidelines

1. Use **sparingly** — avoid overwhelming users with hints
2. Keep content **concise** — ideally under 150 characters
3. Never replace labels with tooltips — supplement, don't substitute
4. Avoid essential information — tooltips are inaccessible on touch devices
5. Position dynamically to stay within the viewport
6. Dismiss when cursor moves away, focus shifts, or user taps outside (mobile)

---

## Accessibility

| Requirement | Guidance |
|-------------|----------|
| ARIA | `aria-describedby` linking tooltip to its trigger |
| Keyboard | Appears on focus; dismissible via Escape |
| Contrast | Minimum 4.5:1 between text and background |
| Touch | Provide alternative access (inline help text) on mobile |
| Focus trap | Do not trap focus unless acting as a popover |

---

## Related Components

- **Modal** — for essential content requiring acknowledgment
- **Help Text** — inline persistent guidance for forms
