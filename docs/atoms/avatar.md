# Avatar

**Component:** `Avatar`
**Library:** Reskin Library — Prism 1.5
**Node ID:** `12888:8724`
**Figma:** [View in Figma](https://www.figma.com/design/FCxJehkjyuzdt6VJ8K2k4i/Reskin-Library---Prism-1.5?node-id=12888-8724)
**Jira:** [PCL-62](https://pushpay.atlassian.net/browse/PCL-62)

---

## Overview

Avatars visually represent people or entities using images, icons, or initials. They appear in tables, navigation, profiles, and donor journey contexts.

- **Circle** — for people: profile images, household images
- **Square** — for groups or events

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `"small" \| "32px" \| "medium" \| "hero"` | `"small"` | Size of the avatar |
| `type` | `"text" \| "icon" \| "image"` | `"text"` | Content displayed in the avatar |
| `disabled` | `"Active" \| "Disabled"` | `"Active"` | Disabled state reduces opacity to 60% |
| `initials` | `string` | `"SC"` | Two capital letters shown in text mode |
| `icon` | `ReactNode \| null` | `null` | Custom icon for icon mode |
| `uploadProfilePhoto` | `boolean` | `false` | Shows camera overlay (hero size only) |

---

## Sizes

| Size | Px | Usage |
|------|----|-------|
| `small` | 32px | Tables, navigation |
| `32px` | 32px | Alias for small |
| `medium` | 44px | Donor journey stage, family on profile, profile flyout |
| `hero` | 152px | Profile page |

---

## Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Size — small | `--component-scale/avatar/small` | 32px |
| Size — medium | `--component-scale/avatar/medium` | 44px |
| Size — hero | `--component-scale/avatar/hero` | 152px |
| Icon — small | `--component-scale/icons/medium` | 20px |
| Icon — medium | `--component-scale/icons/x-large` | 28px |
| Icon — hero | `--component-scale/icons/hero` | 92px |
| Font (small text) | `--typography/font-size/text/text-6` | 13px |
| Font (medium text) | `--typography/font-size/text/text-4` | 16px |
| Disabled opacity | — | 60% |

---

## Avatar Background Colors

Color is derived from a hash of the `householdKey`:

`blue` · `dark blue` · `teal` · `orange` · `purple` · `yellow` · `green` · `dark green` · `grey` · `light grey`

---

## Usage Guidelines

1. Use **initials** (two capital letters) for text type
2. Do not change sizes or colors outside defined patterns
3. Icon and label colours must remain white
4. Do not move the icon from its centred position
5. 32px → tables, navigation; 44px → profiles, flyouts; 152px → profile page

---

## Accessibility

| Requirement | Guidance |
|-------------|----------|
| ARIA | Apply `aria-label` for screen readers to identify the person or entity |
| Touch target | Minimum 44px touch target; 12px spacing between adjacent elements |
