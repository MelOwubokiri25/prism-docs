# Large Button

**Component:** `Large Button`
**Library:** Reskin Library — Prism 1.5
**Figma:** [View in Figma](https://www.figma.com/design/FCxJehkjyuzdt6VJ8K2k4i/Reskin-Library---Prism-1.5?node-id=8196-10023)
**Package:** `@pushpay/button`

---

:::tabs
== Overview

## Overview

A pill-shaped interactive button available in four styles and multiple states. Height is fixed at 40px with optional leading/trailing icons and a text label.

---

## Styles

| Style | Use case |
|-------|----------|
| **Primary** | Main call-to-action. Use only one per button group. |
| **Secondary** | Supporting actions alongside a primary button. Outlined, no fill. |
| **Tertiary** | Low-emphasis actions on light backgrounds. |
| **Global** | Status-driven states: success, warning, disabled, loading — shared across all styles. |

---

## Content Guidelines

- **Max 30 characters**, single line only
- Use **action-oriented labels** (verbs): e.g. "Save", "Submit", "Cancel"
- Editing contexts:
  - `"Save"` — saves without leaving the page
  - `"Done"` — leaves a page that autosaves
  - `"Save & done"` — leaves a page that does not autosave

---

## Icons

- **One icon per button maximum**
- Leading (left) icon: general actions in LTR layouts
- Trailing (right) icon: dropdowns, external links, directional arrows, warning indicators
- Icon and label must share the same colour

---

## Button Groups

- Use **only one Primary** button per group
- Order (left → right): Secondary → Primary → Action
- When more than 3 buttons are needed, collapse extras into an **action/overflow menu**

== Specifications

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `"Primary" \| "Secondary" \| "Tertiary" \| "Global"` | `"Primary"` | Visual style of the button |
| `state` | `"Default" \| "Hover" \| "Active" \| "Success" \| "Warning Default" \| "Warning Hover" \| "Disabled" \| "Loading" \| "Skeleton"` | `"Default"` | Interactive or feedback state |
| `text` | `string` | `"Button"` | Button label text |
| `hasLabel` | `boolean` | `true` | Show or hide the text label |
| `leftIcon` | `boolean` | `false` | Show a leading icon |
| `rightIcon` | `boolean` | `false` | Show a trailing icon |

---

## States

| State | Applies to | Background token | Notes |
|-------|-----------|-----------------|-------|
| Default | Primary, Secondary, Tertiary | `--surface/interactive/primary/brand-default` (#054ad1) | Resting state |
| Hover | Primary, Secondary, Tertiary | `--surface/interactive/primary/brand-hover` (#003b8a) | Cursor interaction |
| Active | Primary, Secondary, Tertiary | `--surface/interactive/primary/brand-active` (#002352) | Pressed state |
| Disabled | Global | `--surface/interactive/disabled` (#c7cbd1) | Not interactive |
| Loading | Global | `--surface/interactive/disabled` (#c7cbd1) | Shows spinner, label optional |
| Success | Global | `--surface/status/success/success` (#0a7b48) | Confirmation feedback |
| Warning Default | Global | `--surface/status/error/error` (#ba1309) | Destructive action |
| Warning Hover | Global | `--surface/status/error/error-hover` (#921808) | Hover on warning |
| Skeleton | Primary only | `--surface/charts/grey-graph` (#a9aeb4) | Loading placeholder, no content |

---

## Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Height | `--component-scale/buttons/large` | 40px |
| Border radius | `--radius/actions` | 999px (pill) |
| Padding X | `--spacing/x4` | 16px |
| Padding Y | `--spacing/x3` | 12px |
| Icon gap | `--spacing/x2` | 8px |
| Font family | `--typography/font-family/font` | Inter |
| Font weight | `--typography/font-weight/button/button-lg` | SemiBold (600) |
| Font size | `--typography/font-size/button/button-lg` | 16px |
| Line height | `--typography/font-lineheight/button/button-lg` | 16px |
| Icon size | — | 20×20px |

### Text colors by style

| Style | Token | Value |
|-------|-------|-------|
| Primary | `--text/inverse` | white |
| Secondary | `--text/interactive/brand` | #054ad1 |
| Tertiary | `--text/interactive/global` | #55575e |
| Global Disabled | `--text/disabled` | #91949c |
| Global Warning / Success | `--text/inverse` | white |

== Code

## Install

```bash
yarn add @pushpay/button
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `displayStyle` | `"primary" \| "secondary" \| "tertiary" \| "text" \| "warning" \| "unstyled"` | `"unstyled"` | Visual style |
| `displaySize` | `"large" \| "small"` | `"large"` for primary / secondary / tertiary | Button size |
| `type` | `"button" \| "submit" \| "reset"` | — | **Required.** HTML button type |
| `disabled` | `boolean` | `false` | Disables the button |
| `onClick` | `MouseEventHandler` | — | Click handler |
| `className` | `string` | — | Additional CSS class |
| `classes` | `object` | — | JSS class overrides per style key |

---

## Examples

:::code-group

```tsx [Basic]
import React from 'react';
import { Button } from '@pushpay/button';

export const Example = () => (
  <Button type="button" displayStyle="primary" displaySize="large">
    Save
  </Button>
);
```

```tsx [All styles]
import React from 'react';
import { Button } from '@pushpay/button';

export const Example = () => (
  <>
    <Button type="button" displayStyle="primary" displaySize="large">
      Primary
    </Button>
    <Button type="button" displayStyle="secondary" displaySize="large">
      Secondary
    </Button>
    <Button type="button" displayStyle="tertiary" displaySize="large">
      Tertiary
    </Button>
    <Button type="button" displayStyle="warning" displaySize="large">
      Warning
    </Button>
  </>
);
```

```tsx [With icon]
import React from 'react';
import { Button } from '@pushpay/button';
import { AddIcon } from '@pushpay/iconography';

export const Example = () => (
  <Button type="button" displayStyle="primary" displaySize="large">
    <AddIcon />
    <span>Add item</span>
  </Button>
);
```

```tsx [Disabled]
import React from 'react';
import { Button } from '@pushpay/button';

export const Example = () => (
  <Button type="button" displayStyle="primary" displaySize="large" disabled>
    Disabled
  </Button>
);
```

:::

== Accessibility

## Accessibility

| Requirement | Guidance |
|-------------|---------|
| ARIA labels | Apply `aria-label` or `aria-pressed` so screen readers convey the current active state |
| Focused state | Use the "Focused" state variant to reflect keyboard navigation |
| Touch target | Minimum 44px touch target height |
| Spacing | Minimum 12px between interactive elements to prevent mis-taps |

:::
