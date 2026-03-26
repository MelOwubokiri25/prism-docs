# Dot Indicator

**Component:** `Dot Indicator`
**Library:** Reskin Library — Prism 1.5
**Node ID:** `20179:5205`
**Figma:** [View in Figma](https://www.figma.com/design/FCxJehkjyuzdt6VJ8K2k4i/Reskin-Library---Prism-1.5?node-id=20179-5205)
**Jira:** [PCL-61](https://pushpay.atlassian.net/browse/PCL-61)

---

## Overview

A small coloured dot used to communicate status at a glance — without a text label. Appears in lists, tables, and alongside labels to indicate state, category, or presence.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `"blue" \| "grey" \| "orange" \| "green" \| "red" \| "purple"` | `"blue"` | Semantic colour |

---

## Types

| Type | Colour | Semantic meaning |
|------|--------|-----------------|
| `blue` | Blue | Active / informational |
| `grey` | Grey | Inactive / neutral |
| `orange` | Orange | Warning / pending |
| `green` | Green | Success / healthy |
| `red` | Red | Error / critical |
| `purple` | Purple | Special / highlight |

---

## Design Tokens

| Property | Value |
|----------|-------|
| Size | 8×8px |

---

## Related Components (same page)

| Component | Node ID | Description |
|-----------|---------|-------------|
| **Status Indicator** | `20076:25753` | Two-state indicator (Success / Error) |
| **Notification Badge** | `2161:22973` | Numeric count badge |
| **Bubble Set** | `20179:5319` | Group of 1–6 dots |

---

## Usage Guidelines

1. Use to communicate status without a text label when space is limited
2. Pair with a legend or label elsewhere on the page so colour alone doesn't carry meaning
3. Do not use as an interactive element

---

## Accessibility

| Requirement | Guidance |
|-------------|----------|
| Screen readers | Provide `aria-label` on the container (e.g. "Status: Active") |
| Colour | Never rely on colour alone — pair with text or icon context |
