# Select

**Component:** `Select`
**Library:** Reskin Library — Prism 1.5
**Node ID:** `31598:438734`
**Figma:** [View in Figma](https://www.figma.com/design/FCxJehkjyuzdt6VJ8K2k4i/Reskin-Library---Prism-1.5?node-id=31598-438734)
**Jira:** [PCL-56](https://pushpay.atlassian.net/browse/PCL-56)

---

## Overview

A dropdown select control for choosing a single option from a list. Built on the `Field` composite — the `Select` primitive handles the input trigger, while a `List` component provides the dropdown menu.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `"Primary" \| "Secondary"` | `"Primary"` | Visual treatment |
| `hasDropdown` | `boolean` | `true` | Show the dropdown chevron icon |

---

## Types

| Type | Description |
|------|-------------|
| **Primary** | Standard field appearance — label, border, chevron |
| **Secondary** | Alternative style for compact or inline contexts |

---

## States

Inherits all states from the `Field` composite:

| State | Description |
|-------|-------------|
| Default | Resting, no interaction |
| Hover | Border darkens |
| Active/Open | Border darkens; dropdown visible |
| Focus | Focus ring visible |
| Error | Error border + error message |
| Disabled | Grey fill, non-interactive |
| Read Only | Light grey fill, non-interactive |
| Filter Selected | Dark brand fill (active filter context) |

---

## Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Height | — | 44px |
| Border radius | `--radius/small` | 4px |
| Padding X | `--spacing/x3` | 12px |
| Chevron icon | — | 16px |
| Font size | `--typography/font-size/text/text-4` | 16px |

---

## Usage Guidelines

1. Use for **single selection** from a predefined list
2. Prefer radio buttons for ≤5 options when space allows
3. Use the `List` component for the dropdown panel
4. Use `Field` with `chips` for multi-select scenarios
5. Always label the select — omit only when context is self-evident

---

## Accessibility

| Requirement | Guidance |
|-------------|----------|
| Semantics | Native `<select>` or custom with `role="combobox"` |
| Keyboard | Enter/Space to open; arrow keys to navigate; Enter to select; Escape to close |
| Label | `aria-label` or visible `<label>` |
| Expanded state | `aria-expanded="true"` when open |
