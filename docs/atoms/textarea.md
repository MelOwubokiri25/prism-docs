# Textarea

**Component:** `textArea`
**Library:** Reskin Library — Prism 1.5
**Node ID:** `31598:438725`
**Figma:** [View in Figma](https://www.figma.com/design/FCxJehkjyuzdt6VJ8K2k4i/Reskin-Library---Prism-1.5?node-id=31598-438725)
**Jira:** [PCL-46](https://pushpay.atlassian.net/browse/PCL-46)

---

## Overview

A multi-line text input used for longer form content — descriptions, notes, comments. Built on the same `.inputBase` primitive as the single-line Input field. Use inside the `Field` composite for a complete form control with label and help text.

---

## Base Component

The `textArea` primitive extends `.inputBase` and inherits all its states:

| State | Border | Background |
|-------|--------|-----------|
| `Default` | `--border/interactive/default` (#a9aeb4) | white |
| `Hover` | `--border/interactive/hover` (#91949c) | white |
| `Active Global` | `--border/interactive/active` (#242528) | white |
| `Active Brand` | `--border/interactive/active` (#242528) | white |
| `ReadOnly` | `--border/interactive/read-only` (#a9aeb4) | `--surface/interactive/readonly` (#f5f6fa) |
| `Disabled` | `--border/interactive/disabled` (#91949c) | `--surface/interactive/disabled` (#c7cbd1) |
| `Error` | `--surface/status/error/error` (#ba1309) | white |

---

## Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Border radius | `--radius/small` | 4px |
| Padding X | `--spacing/x3` | 12px |
| Padding Y | `--spacing/x2` | 8px |
| Font size | `--typography/font-size/text/text-4` | 16px |
| Font weight | `--typography/font-weight/text/text-4-regular` | Regular (400) |
| Line height | `--typography/font-lineheight/text/text-4` | 24px |
| Placeholder colour | `--text/placeholder` | #6f727b |
| Input text colour | `--text/common` | #4b4d53 |

---

## Usage Guidelines

1. Use for multi-line input — descriptions, notes, comments, free-text responses
2. Always wrap in the `Field` composite to include label and help text
3. Allow vertical resizing by the user where appropriate
4. Show character count (`showMaxCharacters`) for fields with a limit
5. Never truncate labels or error messages

---

## Accessibility

| Requirement | Guidance |
|-------------|----------|
| Semantics | Use `<textarea>` with associated `<label>` |
| Errors | `aria-invalid="true"` + `aria-describedby` pointing to error |
| Required | `required` attribute + visible asterisk |
| Resize | Do not disable resize unless layout absolutely requires it |
