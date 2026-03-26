# Stepper

**Component:** `stepper`
**Library:** Reskin Library — Prism 1.5
**Node ID:** `28489:20592`
**Figma:** [View in Figma](https://www.figma.com/design/FCxJehkjyuzdt6VJ8K2k4i/Reskin-Library---Prism-1.5?node-id=28489-20592)
**Jira:** [PCL-55](https://pushpay.atlassian.net/browse/PCL-55)

---

## Overview

Visually communicates progress through a sequential process — form wizards, onboarding flows, or checkouts. Helps users understand where they are, how many steps remain, and optionally navigate between them.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `breakpoint` | `"desktop" \| "mobile"` | `"mobile"` | Responsive layout |
| `steps` | `"2" \| "3" \| "4" \| "5" \| "6"` | `"2"` | Total number of steps |
| `activeStep` | `string` | `"1. Step name"` | Label shown for the active step (mobile) |

---

## Step States

| State | Visual |
|-------|--------|
| Active | Filled circle with brand colour + bold label |
| Inactive | Outlined circle (grey border) + regular label |
| Completed | Filled circle with checkmark |

---

## Breakpoints

| Breakpoint | Behaviour |
|-----------|-----------|
| **Desktop** | All step labels visible below their indicators |
| **Mobile** | Only the current step label shown; indicators compact |

---

## Step Counts

| Steps | Desktop width | Mobile |
|-------|--------------|--------|
| 2 | ~797px | 310px |
| 3 | ~797px | 310px |
| 4 | ~797px | 310px |
| 5 | ~797px | 310px |
| 6 | ~797px | 310px |

---

## Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Step indicator size | — | 28px |
| Active fill | `--icons/interactive/brand-default` | #054ad1 |
| Inactive border | `--icons/subtle` | #6f727b |
| Step label size | — | 13px (SemiBold active, Regular inactive) |
| Gap (icon to label) | `--scale/2x` | 8px |

---

## Usage Guidelines

1. Use only for **sequential, ordered** processes
2. Avoid for non-linear or exploratory flows
3. Show step labels below indicators on desktop; only current step label on mobile
4. Step labels should not truncate — wrap or abbreviate with tooltips
5. Steps should distribute evenly across available width
6. Minimum 2 steps, maximum 6 steps

---

## Accessibility

| Requirement | Guidance |
|-------------|----------|
| Semantics | Use `<ol>` or `<nav>` with `<ul>` for step list |
| Current step | `aria-current="step"` on active step |
| Screen readers | Announce context: "Step 2 of 4: Shipping Information" |
| Keyboard | Tab and arrow key navigation between steps |
| Touch target | Minimum 44×44px for interactive step indicators |
| Contrast | Don't rely on colour alone to communicate state |

---

## Related Components

- **Tabs** — for non-sequential section switching
- **Progress Bar** — for linear progress without discrete steps
