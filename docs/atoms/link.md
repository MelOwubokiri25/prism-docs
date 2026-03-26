# Link

**Component:** `Link`
**Library:** Reskin Library — Prism 1.5
**Node ID:** `5955:40283`
**Figma:** [View in Figma](https://www.figma.com/design/FCxJehkjyuzdt6VJ8K2k4i/Reskin-Library---Prism-1.5?node-id=5955-40283)
**Jira:** [PCL-50](https://pushpay.atlassian.net/browse/PCL-50)

---

## Overview

A navigational element that directs users to another location — within the page, across pages, or to an external resource. Unlike buttons, links should never trigger actions like form submissions or state changes.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `state` | `"default" \| "hover"` | `"default"` | Interactive state |
| `text` | `string` | `"Click me"` | Link label text |
| `externalLinkIcon` | `boolean` | `false` | Show external link icon (opens new tab) |

---

## States

| State | Treatment |
|-------|-----------|
| `default` | Brand blue text, no underline |
| `hover` | Brand blue text + bottom border underline |

---

## Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Text colour | `--text/interactive/link` | #054ad1 |
| Hover border | `--icons/interactive/link` | #054ad1 |
| Font family | `--typography/font-family/font` | Inter |
| Font weight | `--typography/font-weight/text/text-4-regular` | Regular (400) |
| Font size | `--typography/font-size/text/text-4` | 16px |
| Line height | `--typography/font-lineheight/text/text-4` | 24px |
| Icon gap | `--spacing/x1` | 4px |

---

## Usage Guidelines

1. Use for **navigation only** — to another page, section, or external resource
2. Use for `mailto:` and `tel:` references where appropriate
3. Never use a link to submit forms, open modals, or toggle states — use a Button
4. Avoid vague text like "Click here" or "Read more" — use descriptive labels
5. Always show the external link icon when opening a new tab
6. Truncate long links in tables with a tooltip showing the full text

---

## Accessibility

| Requirement | Guidance |
|-------------|----------|
| Semantics | Use `<a>` tags — not `<div>` or `<span>` |
| Contrast | Minimum 4.5:1 between link text and background |
| Focus | Visible focus indicator for keyboard users |
| Screen readers | Descriptive text — avoid "here" or "more" |
| Touch target | Minimum 44×44px (inline links in body text are exempt) |
| Keyboard | Tabbable; Enter or Space activates |

---

## Related Components

- **Button** — for actions like form submissions, modals, or toggles
- **Breadcrumbs** — for hierarchical navigation
- **Tabs** — for in-page navigation with dynamic content
