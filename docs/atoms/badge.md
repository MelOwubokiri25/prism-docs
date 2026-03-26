# Badge

**Component:** `Notification Badge`
**Library:** Reskin Library — Prism 1.5
**Node ID:** `2161:22973`
**Figma:** [View in Figma](https://www.figma.com/design/FCxJehkjyuzdt6VJ8K2k4i/Reskin-Library---Prism-1.5?node-id=2161-22973)
**Jira:** [PCL-59](https://pushpay.atlassian.net/browse/PCL-59)

---

## Overview

A small circular indicator that displays a count or presence of notifications, alerts, or unread items. Sits at the top-right of its parent element (typically an Action Button). Also used standalone as a number indicator.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `number` | `boolean` | `true` | Show the numeric value inside the badge |
| `value` | `string` | `"1"` | The count or text to display |

---

## Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Size | `--component-scale/indicator/medium` | 16px |
| Min width | — | 16px (expands with content) |
| Padding X | — | 4px |
| Border radius | — | 12px |
| Background | `--icons/interactive/brand-default` | #054ad1 |
| Text colour | `--text/inverse` | white |
| Font size | `--typography/font-size/text/text-6` | 13px |
| Font weight | `--typography/font-weight/text/text-6-semibold` | SemiBold (600) |
| Line height | `--typography/font-lineheight/text/text-6` | 14px |

---

## Usage Guidelines

1. Use to communicate unread counts, notifications, or alerts
2. Position at top-right of the triggering element
3. Keep counts concise — consider "99+" for large numbers
4. Only use on Primary Action Button states (default, hover, active)

---

## Accessibility

| Requirement | Guidance |
|-------------|----------|
| Screen readers | Use `aria-label` on the parent button to include the count (e.g. "Notifications, 3 unread") |
| Live region | Wrap in `aria-live="polite"` if the count updates dynamically |
