# Divider

**Component:** `Divider`
**Jira:** [PCL-45](https://pushpay.atlassian.net/browse/PCL-45)

---

## Status

> **No master component found in the Prism 1.5 library.** The Divider component has not yet been defined as a standalone Figma component. Work is tracked in [PCL-45](https://pushpay.atlassian.net/browse/PCL-45).

---

## Overview

A horizontal or vertical rule used to visually separate sections of content or groups of related items. Typically a 1px line using a border or separator token.

---

## Expected Behaviour

- Used between list items, sections, form groups, or card regions
- Should not carry semantic meaning on its own — use ARIA roles where needed
- Available in horizontal (default) and vertical orientations

---

## Accessibility

| Requirement | Guidance |
|-------------|----------|
| Semantics | Use `<hr>` for thematic breaks, or `role="separator"` for visual-only dividers |
| Screen readers | `aria-hidden="true"` on decorative dividers |
