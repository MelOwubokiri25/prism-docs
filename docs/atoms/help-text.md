# Help Text

**Component:** `.helpText`
**Library:** Reskin Library — Prism 1.5
**Node ID:** `31598:438580`
**Figma:** [View in Figma](https://www.figma.com/design/FCxJehkjyuzdt6VJ8K2k4i/Reskin-Library---Prism-1.5?node-id=31598-438580)
**Jira:** [PCL-58](https://pushpay.atlassian.net/browse/PCL-58)

---

## Overview

A hidden utility component used internally within the `Field` composite to render help text, character counts, and error messages beneath form controls. Provides accessible, consistent feedback without requiring custom implementation per field.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `"Info" \| "Number of results" \| "Error Info"` | `"Info"` | Content type |
| `infoText` | `string` | — | Informational guidance text |
| `errorText` | `string` | — | Error message text |
| `showMaxCharacters` | `boolean` | `false` | Show `####/###` character counter |
| `# results` | `string` | — | Count of results (Number of results type) |

---

## Types

| Type | Description |
|------|-------------|
| **Info** | Standard help text — guidance, hints, or context |
| **Number of results** | Shows a result count (e.g. search or filter feedback) |
| **Error Info** | Error message with error icon and red text |

---

## Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Info text colour | `--text/common` | #4b4d53 |
| Error text colour | `--text/status/error` | #ba1309 |
| Error font weight | `--typography/font-weight/text/text-4-semibold` | SemiBold (600) |
| Info font weight | `--typography/font-weight/text/text-4-regular` | Regular (400) |
| Font size | `--typography/font-size/text/text-4` | 16px |
| Line height | `--typography/font-lineheight/text/text-4` | 24px |
| Icon size | — | 24px |

---

## Usage Guidelines

1. Always use inside the `Field` composite — do not compose standalone
2. Never truncate help text or error messages
3. Use **Info** type for optional guidance; **Error Info** when validation fails
4. Error messages should clearly describe what went wrong and how to fix it
5. The component is intentionally hidden — it's a consistency primitive for fields

---

## Accessibility

| Requirement | Guidance |
|-------------|----------|
| Association | Use `aria-describedby` on the input pointing to the help text ID |
| Errors | Include `role="alert"` or `aria-live="polite"` on error messages |
| Screen readers | Error prefix ("Error:") is visually bold and read aloud |
