# Styles

Local styles defined in Prism 1.5 covering typography, colour, and elevation.

---

## Text Styles

All text styles use **Inter** as the font family.

### Heading

| Style | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| `Heading/heading 1` | 36px | 72px | Semi Bold | Page title — use only once per page |
| `Heading/heading 2` | 28px | 40px | Semi Bold | Section breaks, card titles, column/row headers |
| `Heading/heading 3` | 24px | 36px | Semi Bold | Sub-sections directly related to Heading 2 |
| `Heading/heading 4` | 20px | 32px | Semi Bold | Sub-sections directly related to Heading 3 |
| `Heading/heading 5` | 16px | 24px | Semi Bold | Modal or widget headings, deepest heading level |

### Body Styles

| Style | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| `Body Styles/text 1 regular` | 48px | 72px | Regular | XL body text — banners, highlighted numbers |
| `Body Styles/text 1 semi bold` | 48px | 72px | Semi Bold | XL body text — banners, highlighted numbers |
| `Body Styles/text 2 regular` | 36px | 54px | Regular | Large body — highlighted numbers or banner text |
| `Body Styles/text 2 semi bold` | 36px | 54px | Semi Bold | Large body — highlighted numbers or banner text |
| `Body Styles/text 3 regular` | 24px | 36px | Regular | Emphasised numbers (e.g. Insights widgets) |
| `Body Styles/text 3 semi bold` | 24px | 36px | Semi Bold | Emphasised numbers (e.g. Insights widgets) |
| `Body Styles/text 4 regular` | 16px | 24px | Regular | Default body copy and hyperlinks |
| `Body Styles/text 4 semi bold` | 16px | 24px | Semi Bold | Default body copy and hyperlinks |
| `Body Styles/text 5 regular` | 14px | 20px | Regular | Field labels, help text, tooltips |
| `Body Styles/text 5 semi bold` | 14px | 20px | Semi Bold | Field labels, help text, tooltips |
| `Body Styles/text 6 regular` | 13px | 14px | Regular | Tags, helper text, extra small copy |
| `Body Styles/text 6 semi bold` | 13px | 14px | Semi Bold | Tags, helper text, extra small copy |

### Interactive Text Styles

| Style | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| `Interactive Text Styles/button-lg` | 16px | 16px | Semi Bold | Large buttons only |
| `Interactive Text Styles/button-sm` | 14px | 14px | Semi Bold | Small buttons, text links, primary subtle |
| `Interactive Text Styles/link` | 16px | 24px | Regular | Inline hyperlinks |

### Label Styles

| Style | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| `Label Styles/label 1 regular` | 16px | 24px | Regular | Form labels |
| `Label Styles/label 1 semi bold` | 16px | 24px | Semi Bold | Form labels (emphasis) |
| `Label Styles/sub-label 2 regular` | 14px | 20px | Regular | Sub-labels, secondary label text |
| `Label Styles/tag` | 13px | 14px | Semi Bold | Tag components |

### Component Specific

| Style | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| `Component Specific/insight-card` | 32px | 48px | Semi Bold | Insight card metric values |
| `Component Specific/menu-category` | 13px | 14px | Regular | Navigation menu category labels |

---

## Paint Styles

| Style | Type | Usage |
|-------|------|-------|
| `ChMS Gradient` | Linear gradient | Lead and Profiles features |
| `Shell/shellBG` | Linear gradient | App shell background |
| `Shell/leftNav-CTA` | Radial gradient (layered) | Left navigation CTA area |

---

## Effect Styles (Elevation)

Prism uses a structured elevation system with named levels. Apply these as drop shadows via the effect style tokens.

### Level 0

> No shadow. The foundational layer for page backgrounds and canvas areas.

- **Shadow:** none (0px offset, 0px radius)
- **Usage:** Page backgrounds, canvas areas
- **Rule:** No interactive cards or content containers should sit directly on Level 0 — content must have at least Level 1 elevation.

---

### Level 1

> Minimal separation. The most common elevation in the interface.

- **Shadow:** `0 1px 3px 0 rgba(15, 0, 26, 0.08)`
- **Usage:** Default state for cards and content containers, border replacement, primary content areas
- **Best practice:** Level 1 provides enough definition without competing for attention. Use it liberally.

---

### Level 2

> Pronounced elevation. Reserved for emphasis within an interface.

- **Shadow 1:** `0 2px 6px -1px rgba(15, 0, 26, 0.06)`
- **Shadow 2:** `0 1px 3px 0 rgba(15, 0, 26, 0.10)`
- **Usage:** Nested cards, sidebar panels, modals, overlays, emphasised content sections
- **Rules:**
  - Do not apply Level 2 to a card whose parent container is also Level 2
  - Do not overuse — if everything has Level 2, nothing stands out
  - Use to create clear parent–child relationships

---

### Level 3

> Clearly visible shadow indicating active lift.

- **Shadow 1:** `0 2px 4px 0 rgba(15, 0, 26, 0.08)`
- **Shadow 2:** `0 4px 10px -2px rgba(15, 0, 26, 0.12)`
- **Usage:** Open dropdown menus, drag-and-drop elements, expanded accordions, tooltips, context menus
- **Rules:**
  - Never apply to standard content cards
  - Only use for interactive, temporary states

---

### Page Content Area

> Custom floating effect for the main page content wrapper.

- **Shadow:** `0 25px 50px -12px rgba(0, 0, 0, 0.25)`
- **Usage:** Main content wrapper on pages with side navigation, central content area in admin layouts
- **Constraint:** Specific to the page content area component only — do not apply to individual cards or sections within the page.

---

### Header Section

> Lighter shadow for standalone page headers.

- **Shadow:** `0 25px 50px -12px rgba(15, 0, 26, 0.10)`
- **Usage:** Group detail page headers, event page headers, profile page headers, hero image/thumbnail sections
- **Constraint:** Only use when the header is a distinct visual component separate from the main content area.
