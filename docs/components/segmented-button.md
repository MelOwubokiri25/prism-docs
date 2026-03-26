# Segmented Button

**Component:** `Segmented Button`
**Library:** Reskin Library — Prism 1.5
**Node ID:** `38540:263133` (composite) · `38540:262459` (Segment primitive)
**Figma:** [View in Figma](https://www.figma.com/design/FCxJehkjyuzdt6VJ8K2k4i/Reskin-Library---Prism-1.5?node-id=38540-263133)

---

## Overview

A horizontally connected group of toggle segments used to switch between mutually exclusive (or multi-select) views or options. Built from individual `Segment` primitives composed into a `SegmentedButton` group. Height is fixed at 28px with each segment 80px wide.

---

## Components

### SegmentedButton (Composite)

The full group component. Use this in product designs.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `"Label" \| "Icon" \| "Both"` | `"Label"` | What each segment displays |
| `count` | `"2" \| "3" \| "4" \| "5"` | `"2"` | Number of segments in the group |
| `selection` | `"Single" \| "Multi"` | `"Single"` | Whether one or multiple segments can be selected |
| `disabled` | `boolean` | `false` | Disables the entire group |

### Segment (Primitive)

The individual segment. Use only when building custom compositions.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `"Label" \| "Icon" \| "Both"` | `"Label"` | Segment content type |
| `label` | `string` | `"Label"` | Text label |
| `icon` | `ReactNode \| null` | `null` | Icon to display |
| `position` | `"First" \| "Middle" \| "Last"` | `"First"` | Position within the group (controls border radius) |
| `state` | `"Default" \| "Hover" \| "Selected" \| "Disabled"` | `"Default"` | Segment state |

---

## States

| State | Background | Border | Text |
|-------|-----------|--------|------|
| Default | `--surface/primary` (#ffffff) | `--border/interactive/default` (#a9aeb4) | `--text/common` (#4b4d53) |
| Hover | `--surface/interactive/selector-hover` (#f5f6fa) | `--border/interactive/hover` (#91949c) | `--text/common` (#4b4d53) |
| Selected | `--surface/interactive/selector-brand-active` (#e5f0ff) | `--border/interactive/active` (#242528) | `--text/interactive/global` (#55575e) |
| Disabled | `--surface/interactive/disabled` (#c7cbd1) | `--border/interactive/disabled` (#91949c) | `--text/disabled` (#91949c) |

---

## Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Height | — | 28px |
| Segment width | — | 80px (fixed) |
| Border radius (ends) | `--radius/components/actions` | 999px |
| Padding X | `--spacing/x3` | 12px |
| Padding Y | `--spacing/x1` | 4px |
| Icon + label gap | `--spacing/x1` | 4px |
| Font family | `--typography/font-family/font` | Inter |
| Font weight | `--typography/font-weight/button/button-sm` | SemiBold (600) |
| Font size | `--typography/font-size/button/button-sm` | 14px |
| Line height | `--typography/font-lineheight/button/button-sm` | 14px |
| Icon size | — | 16px |

---

## Content Types

| Content | Description |
|---------|-------------|
| **Label** | Text-only segments. Best for named views like Week, Month, Quarter. |
| **Icon** | Icon-only segments. Use when icons are universally understood. |
| **Both** | Icon + label. Use when extra clarity is needed (e.g. Grid, List, Table). |

---

## Selection Modes

| Mode | Behaviour |
|------|-----------|
| **Single** | Only one segment can be selected at a time (radio-like). |
| **Multi** | Multiple segments can be selected simultaneously (checkbox-like). |

---

## Position & Border Radius

Border radius is applied only to the outer ends of the group:

- **First** segment: rounded left corners only
- **Middle** segment(s): no border radius
- **Last** segment: rounded right corners only

Segments share a 1px border and overlap by 1px on their shared edge to avoid double borders.

---

## Count Options

| Count | Segments | Total width |
|-------|----------|-------------|
| 2 | 2 | ~159px |
| 3 | 3 | ~238px |
| 4 | 4 | ~317px |
| 5 | 5 | ~396px |

---

## Usage Guidelines

1. Use to **switch between views** of the same content (e.g. Week / Month / Quarter / Year)
2. Use **Single** selection for mutually exclusive views
3. Use **Multi** selection when multiple filters or views can be active simultaneously
4. Keep segment labels **short** — single words preferred
5. Avoid more than 5 segments; consider a dropdown for longer option sets
6. Do not mix segmented buttons with tabs on the same page for the same purpose

---

## Accessibility

| Requirement | Guidance |
|-------------|---------|
| ARIA role | Use `role="group"` on the container with an `aria-label` describing the control |
| Selected state | Apply `aria-pressed="true"` (multi) or `aria-checked="true"` (single) on selected segments |
| Keyboard navigation | Segments should be navigable with arrow keys within the group |
| Touch target | Ensure at least 44px height in touch contexts even though component renders at 28px |
