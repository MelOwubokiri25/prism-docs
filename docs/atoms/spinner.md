# Spinner / Loading Indicator

**Component:** `Spinner / Loading Indicator`
**Jira:** [PCL-60](https://pushpay.atlassian.net/browse/PCL-60)

---

## Status

> **No master component found in the Prism 1.5 library.** The Spinner / Loading Indicator has not yet been defined as a standalone Figma component. Work is tracked in [PCL-60](https://pushpay.atlassian.net/browse/PCL-60).

---

## Overview

An animated indicator communicating that content is loading or a process is in progress. Should be used when the wait time is unknown or longer than ~1 second.

---

## Expected Behaviour

- Appears when content is loading or an async operation is in progress
- Should be centred in its container or replace the element it is loading for
- Dismiss as soon as content is ready
- Accessible via `aria-busy` on the loading region

---

## Accessibility

| Requirement | Guidance |
|-------------|----------|
| ARIA | `aria-busy="true"` on the loading region; `aria-live="polite"` to announce completion |
| Screen readers | Provide a visually hidden label (e.g. "Loading…") |
| Motion | Respect `prefers-reduced-motion` — offer a static fallback |
