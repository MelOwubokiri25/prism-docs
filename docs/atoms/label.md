# Label

**Component:** `Label`
**Library:** Reskin Library — Prism 1.5
**Node ID:** `19917:23429`
**Figma:** [View in Figma](https://www.figma.com/design/FCxJehkjyuzdt6VJ8K2k4i/Reskin-Library---Prism-1.5?node-id=19917-23429)
**Jira:** [PCL-57](https://pushpay.atlassian.net/browse/PCL-57)

---

## Overview

A form label associated with a control — input, dropdown, checkbox, etc. Supports a required asterisk, info icon, status indicator, favourite star, and optional tags.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | see Styles | `"Bold"` | Visual style |
| `label` | `string` | `"Label"` | Label text |
| `required` | `boolean` | `true` | Show required asterisk |
| `rightIcon` | `boolean` | `true` | Show info icon on right |
| `leftIcon` | `boolean` | `false` | Show icon on left |
| `status` | `boolean` | `false` | Show status dot indicator |
| `favourite` | `boolean` | `false` | Show star indicator |
| `showTags` | `boolean` | `false` | Show tag group |
| `showTag1` | `boolean` | `false` | Show first tag |
| `showTag2` | `boolean` | `false` | Show second tag |

---

## Styles

| Style | Font weight | Text colour | Usage |
|-------|-------------|-------------|-------|
| `Bold` | SemiBold (600) | `--text/common` (#4b4d53) | Default — primary label |
| `Standard` | Regular (400) | `--text/darker` (#242528) | Normal label |
| `Subtle` | Regular (400) | `--text/subtle` (#6f727b) | Secondary or supporting |
| `Sub-label` | Regular (400) | `--text/subtle` (#6f727b) | 14px sub-label beneath main label |
| `Disabled` | Regular (400) | `--text/disabled` (#91949c) | Non-interactive field |
| `Read only` | Regular (400) | `--text/readonly` (#4b4d53) | Read-only field |
| `Destructive` | Regular (400) | `--text/status/error` (#ba1309) | Delete or destructive actions |

---

## Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Height | — | 24px |
| Font family | `--typography/font-family` | Inter |
| Font size | `--typography/font-size/text/text-4` | 16px |
| Sub-label size | `--typography/font-size/text/text-5` | 14px |
| Line height | `--typography/font-lineheight/text/text-4` | 24px |
| Gap | `--spacing/x1` | 4px |

---

## Usage Guidelines

1. Almost always include a label — omit only when field context is completely self-explanatory
2. Never truncate label text
3. Ensure labels are clickable and associated with their control via `for`/`htmlFor`
4. Use `Sub-label` for supporting context beneath a primary label
5. `Destructive` style is for actions like "Delete account" in dropdowns or lists

---

## Accessibility

| Requirement | Guidance |
|-------------|----------|
| Association | Use `<label for="inputId">` or `aria-labelledby` |
| Required | Include both the asterisk and `required` attribute on the control |
| Screen readers | Ensure the label text is descriptive and concise |
