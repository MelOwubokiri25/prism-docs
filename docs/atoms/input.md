# Input / Text Field

**Component:** `Field`
**Library:** Reskin Library — Prism 1.5
**Node ID:** `27883:193347`
**Figma:** [View in Figma](https://www.figma.com/design/FCxJehkjyuzdt6VJ8K2k4i/Reskin-Library---Prism-1.5?node-id=27883-193347)
**Jira:** [PCL-48](https://pushpay.atlassian.net/browse/PCL-48)

---

## Overview

A single-line text input field. The `Field` composite wraps a label, input base, info/help message, and error message into a complete form control. Used for text entry, dropdowns (single and multi-select), and active filters.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `"Empty" \| "Filled"` | `"Empty"` | Whether the field has a value |
| `state` | see States | `"Default"` | Interactive state |
| `fieldInactive` | `"No" \| "Yes - Disabled" \| "Yes - Read Only"` | `"No"` | Disabled or read-only override |
| `label` | `boolean` | `true` | Show field label |
| `iconL` | `boolean` | `false` | Show leading icon |
| `iconR` | `boolean` | `true` | Show trailing icon (dropdown arrow) |
| `clearField` | `boolean` | `false` | Show clear (×) button |
| `chips` | `boolean` | `false` | Show chip multi-select values |
| `infoMessage` | `boolean` | `true` | Show help text below field |
| `infoTextIcon` | `boolean` | `true` | Show info icon beside help text |
| `linkInInfoText` | `boolean` | `false` | Show a link within help text |
| `showMaxCharacters` | `boolean` | `false` | Show character count |

---

## States

| State | Border | Background |
|-------|--------|-----------|
| `Default` | `--border/interactive/default` (#a9aeb4) | white |
| `Hover` | `--border/interactive/hover` (#91949c) | white |
| `Active` | `--border/interactive/active` (#242528) | white |
| `Focus` | `--border/interactive/focus` (#242528) | white |
| `Error` | `--surface/status/error/error` (#ba1309) | white |
| `Focus Error` | `--border/interactive/active` (#242528) | white |
| `Filter Selected` | — | `--surface/interactive/primary/brand-active` (#002352) |
| Disabled | `--border/interactive/disabled` (#91949c) | `--surface/interactive/disabled` (#c7cbd1) |
| Read Only | `--border/interactive/read-only` (#a9aeb4) | `--surface/interactive/readonly` (#f5f6fa) |

---

## Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Height | — | 44px |
| Border radius | `--radius/small` | 4px |
| Padding X | `--spacing/x3` | 12px |
| Padding Y | `--spacing/x2` | 8px |
| Gap (icon to text) | `--scale/1x` | 4px |
| Font size | `--typography/font-size/text/text-4` | 16px |
| Font weight | `--typography/font-weight/text/text-4-regular` | Regular (400) |
| Placeholder colour | `--text/placeholder` | #6f727b |
| Input text colour | `--text/common` | #4b4d53 |
| Error text colour | `--text/status/error` | #ba1309 |

---

## Primitives (same page)

| Name | Node ID | Description |
|------|---------|-------------|
| `.inputBase` | `31598:438596` | Base input box with all states |
| `.inputText` | `31598:438565` | Text inside the input |
| `inputField` | `31598:438723` | Single-line input primitive |

---

## Usage Guidelines

1. Almost always include a label — omit only when context is completely self-explanatory
2. Never truncate labels, help text, or error text
3. Use **Read Only** when a value exists but cannot be changed
4. Use **Disabled** when the field has no value and cannot be interacted with
5. Show error messages below the field with an error icon
6. Character count appears when `showMaxCharacters` is true

---

## Accessibility

| Requirement | Guidance |
|-------------|----------|
| Semantics | Use `<input type="text">` with associated `<label>` |
| Errors | `aria-invalid="true"` and `aria-describedby` pointing to error message |
| Required | `required` attribute + visible asterisk |
| Focus | Visible focus ring for keyboard users |
