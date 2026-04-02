# Variables

Design tokens across all Prism 1.5 collections. All variables are referenced in CSS as `var(--token-name)`.

---

## Semantic Color

Color variables from the **1 SEMANTIC COLOR** collection (Light mode). All values alias into the `.0 PRIMITIVE` palette.

### Text

| Token | Hex | Primitive |
|-------|-----|-----------|
| `text/darker` | <ColorSwatch color="#242528" /> `#242528` | `color/grey/1100` |
| `text/common` | <ColorSwatch color="#4b4d53" /> `#4b4d53` | `color/grey/900` |
| `text/subtle` | <ColorSwatch color="#6f727b" /> `#6f727b` | `color/grey/700` |
| `text/inverse` | <ColorSwatch color="#ffffff" /> `#ffffff` | `color/grey/white` |
| `text/disabled` | <ColorSwatch color="#91949c" /> `#91949c` | `color/grey/600` |
| `text/readonly` | <ColorSwatch color="#4b4d53" /> `#4b4d53` | `color/grey/900` |
| `text/placeholder` | <ColorSwatch color="#6f727b" /> `#6f727b` | `color/grey/700` |
| `text/interactive/brand-default` | <ColorSwatch color="#054ad1" /> `#054ad1` | `color/blue/600` |
| `text/interactive/brand-active` | <ColorSwatch color="#003b8a" /> `#003b8a` | `color/blue/700` |
| `text/interactive/global` | <ColorSwatch color="#55575e" /> `#55575e` | `color/grey/800` |
| `text/interactive/global-inverse` | <ColorSwatch color="#e1e3e9" /> `#e1e3e9` | `color/grey/300` |
| `text/interactive/link` | <ColorSwatch color="#054ad1" /> `#054ad1` | `color/blue/600` |
| `text/status/error` | <ColorSwatch color="#ba1309" /> `#ba1309` | `color/red/600` |
| `text/status/success` | <ColorSwatch color="#4b4d53" /> `#4b4d53` | `color/grey/900` |
| `text/status/warning` | <ColorSwatch color="#4b4d53" /> `#4b4d53` | `color/grey/900` |
| `text/info/red` | <ColorSwatch color="#68170c" /> `#68170c` | `color/red/800` |
| `text/info/yellow` | <ColorSwatch color="#782d0d" /> `#782d0d` | `color/yellow/800` |
| `text/info/green` | <ColorSwatch color="#094f2c" /> `#094f2c` | `color/green/800` |
| `text/info/teal` | <ColorSwatch color="#003535" /> `#003535` | `color/teal/800` |
| `text/info/blue` | <ColorSwatch color="#002352" /> `#002352` | `color/blue/800` |
| `text/info/purple` | <ColorSwatch color="#300053" /> `#300053` | `color/purple/800` |

### Surface

| Token | Hex | Primitive |
|-------|-----|-----------|
| `surface/primary` | <ColorSwatch color="#ffffff" /> `#ffffff` | `color/grey/white` |
| `surface/secondary` | <ColorSwatch color="#f1f1f5" /> `#f1f1f5` | `color/grey/200` |
| `surface/staqShell` | <ColorSwatch color="#ffffff" /> `#ffffff` | `color/grey/white` |
| `surface/pageBackground` | <ColorSwatch color="#ffffffcc" /> `#ffffffcc` | `color/opacity/white-80%` |
| `surface/brand-light` | <ColorSwatch color="#e5f0ff" /> `#e5f0ff` | `color/blue/100` |
| `surface/interactive/unchecked` | <ColorSwatch color="#c7cbd1" /> `#c7cbd1` | `color/grey/400` |
| `surface/interactive/disabled` | <ColorSwatch color="#c7cbd1" /> `#c7cbd1` | `color/grey/400` |
| `surface/interactive/disabled-light` | <ColorSwatch color="#f1f1f5" /> `#f1f1f5` | `color/grey/200` |
| `surface/interactive/readonly` | <ColorSwatch color="#f5f6fa" /> `#f5f6fa` | `color/grey/100` |
| `surface/interactive/selector-hover` | <ColorSwatch color="#f5f6fa" /> `#f5f6fa` | `color/grey/100` |
| `surface/interactive/selector-brand-active` | <ColorSwatch color="#e5f0ff" /> `#e5f0ff` | `color/blue/100` |
| `surface/interactive/selector-global-active` | <ColorSwatch color="#e1e3e9" /> `#e1e3e9` | `color/grey/300` |
| `surface/interactive/primary/brand-default` | <ColorSwatch color="#054ad1" /> `#054ad1` | `color/blue/600` |
| `surface/interactive/primary/brand-hover` | <ColorSwatch color="#003b8a" /> `#003b8a` | `color/blue/700` |
| `surface/interactive/primary/brand-active` | <ColorSwatch color="#002352" /> `#002352` | `color/blue/800` |
| `surface/interactive/primary/white-label` | <ColorSwatch color="#4b4d53" /> `#4b4d53` | `color/grey/900` |
| `surface/interactive/secondary/brand-hover` | <ColorSwatch color="#e5f0ff" /> `#e5f0ff` | `color/blue/100` |
| `surface/interactive/secondary/brand-active` | <ColorSwatch color="#abd0fd" /> `#abd0fd` | `color/blue/200` |
| `surface/interactive/tertiary/hover` | <ColorSwatch color="#f1f1f5" /> `#f1f1f5` | `color/grey/200` |
| `surface/interactive/tertiary/active` | <ColorSwatch color="#e1e3e9" /> `#e1e3e9` | `color/grey/300` |
| `surface/opacity/modal-background` | <ColorSwatch color="#000000cc" /> `#000000cc` | `color/opacity/black-80%` |
| `surface/opacity/readonly-overlay` | <ColorSwatch color="#f5f6fa80" /> `#f5f6fa80` | `color/opacity/grey-100-50%` |
| `surface/charts/brand` | <ColorSwatch color="#054ad1" /> `#054ad1` | `color/blue/600` |
| `surface/charts/brand-light` | <ColorSwatch color="#e5f0ff" /> `#e5f0ff` | `color/blue/100` |
| `surface/charts/grey-graph` | <ColorSwatch color="#a9aeb4" /> `#a9aeb4` | `color/grey/500` |
| `surface/status/error/error` | <ColorSwatch color="#ba1309" /> `#ba1309` | `color/red/600` |
| `surface/status/error/error-hover` | <ColorSwatch color="#921808" /> `#921808` | `color/red/700` |
| `surface/status/error/error-secondary` | <ColorSwatch color="#ffdbd6" /> `#ffdbd6` | `color/red/100` |
| `surface/status/success/success` | <ColorSwatch color="#0a7b48" /> `#0a7b48` | `color/green/600` |
| `surface/status/success/success-secondary` | <ColorSwatch color="#ccf2e0" /> `#ccf2e0` | `color/green/100` |
| `surface/status/info/red` | <ColorSwatch color="#ffdbd6" /> `#ffdbd6` | `color/red/100` |
| `surface/status/info/yellow` | <ColorSwatch color="#ffebc3" /> `#ffebc3` | `color/yellow/100` |
| `surface/status/info/green` | <ColorSwatch color="#ccf2e0" /> `#ccf2e0` | `color/green/100` |
| `surface/status/info/teal` | <ColorSwatch color="#e5f6f6" /> `#e5f6f6` | `color/teal/100` |
| `surface/status/info/blue` | <ColorSwatch color="#e5f0ff" /> `#e5f0ff` | `color/blue/100` |
| `surface/status/info/purple` | <ColorSwatch color="#f4e5ff" /> `#f4e5ff` | `color/purple/100` |
| `surface/status/info/grey` | <ColorSwatch color="#e1e3e9" /> `#e1e3e9` | `color/grey/300` |
| `surface/status/info/tooltip` | <ColorSwatch color="#4b4d53" /> `#4b4d53` | `color/grey/900` |

### Icons

| Token | Hex | Primitive |
|-------|-----|-----------|
| `icons/default` | <ColorSwatch color="#4b4d53" /> `#4b4d53` | `color/grey/900` |
| `icons/subtle` | <ColorSwatch color="#6f727b" /> `#6f727b` | `color/grey/700` |
| `icons/inverse` | <ColorSwatch color="#ffffff" /> `#ffffff` | `color/grey/white` |
| `icons/required` | <ColorSwatch color="#e51b00" /> `#e51b00` | `color/red/500` |
| `icons/grey-graph` | <ColorSwatch color="#a9aeb4" /> `#a9aeb4` | `color/grey/500` |
| `icons/interactive/brand-default` | <ColorSwatch color="#054ad1" /> `#054ad1` | `color/blue/600` |
| `icons/interactive/global` | <ColorSwatch color="#55575e" /> `#55575e` | `color/grey/800` |
| `icons/interactive/global-inverse` | <ColorSwatch color="#e1e3e9" /> `#e1e3e9` | `color/grey/300` |
| `icons/interactive/link` | <ColorSwatch color="#054ad1" /> `#054ad1` | `color/blue/600` |
| `icons/status/error/default` | <ColorSwatch color="#ba1309" /> `#ba1309` | `color/red/600` |
| `icons/status/error/accent` | <ColorSwatch color="#68170c" /> `#68170c` | `color/red/800` |
| `icons/status/success/default` | <ColorSwatch color="#0a7b48" /> `#0a7b48` | `color/green/600` |
| `icons/status/success/accent` | <ColorSwatch color="#094f2c" /> `#094f2c` | `color/green/800` |
| `icons/status/warning/default` | <ColorSwatch color="#dd5d00" /> `#dd5d00` | `color/yellow/600` |
| `icons/status/warning/secondary` | <ColorSwatch color="#ffebc3" /> `#ffebc3` | `color/yellow/100` |
| `icons/status/warning/accent` | <ColorSwatch color="#782d0d" /> `#782d0d` | `color/yellow/800` |
| `icons/status/info/default` | <ColorSwatch color="#054ad1" /> `#054ad1` | `color/blue/600` |
| `icons/status/info/blue-accent` | <ColorSwatch color="#002352" /> `#002352` | `color/blue/800` |
| `icons/status/info/teal-accent` | <ColorSwatch color="#003535" /> `#003535` | `color/teal/800` |
| `icons/status/info/purple-accent` | <ColorSwatch color="#300053" /> `#300053` | `color/purple/800` |
| `icons/status/info/giving/primary` | <ColorSwatch color="#008484" /> `#008484` | `color/teal/500` |
| `icons/status/info/giving/teal-accent` | <ColorSwatch color="#003535" /> `#003535` | `color/teal/800` |
| `icons/status/info/app studio/primary` | <ColorSwatch color="#9300ff" /> `#9300ff` | `color/purple/500` |
| `icons/status/info/app studio/purple-accent` | <ColorSwatch color="#300053" /> `#300053` | `color/purple/800` |
| `icons/status/disabled/default` | <ColorSwatch color="#91949c" /> `#91949c` | `color/grey/600` |
| `icons/status/disabled/darker` | <ColorSwatch color="#6f727b" /> `#6f727b` | `color/grey/700` |
| `icons/status/disabled/accent` | <ColorSwatch color="#f1f1f5" /> `#f1f1f5` | `color/grey/200` |
| `icons/status/disabled/on-accent` | <ColorSwatch color="#c7cbd1" /> `#c7cbd1` | `color/grey/400` |
| `icons/status/readonly/default` | <ColorSwatch color="#4b4d53" /> `#4b4d53` | `color/grey/900` |

### Border

| Token | Hex | Primitive |
|-------|-----|-----------|
| `border/decorative/default` | <ColorSwatch color="#e1e3e9" /> `#e1e3e9` | `color/grey/300` |
| `border/decorative/inverse` | <ColorSwatch color="#ffffff" /> `#ffffff` | `color/grey/white` |
| `border/interactive/default` | <ColorSwatch color="#a9aeb4" /> `#a9aeb4` | `color/grey/500` |
| `border/interactive/hover` | <ColorSwatch color="#91949c" /> `#91949c` | `color/grey/600` |
| `border/interactive/active` | <ColorSwatch color="#242528" /> `#242528` | `color/grey/1100` |
| `border/interactive/focus` | <ColorSwatch color="#242528" /> `#242528` | `color/grey/1100` |
| `border/interactive/disabled` | <ColorSwatch color="#91949c" /> `#91949c` | `color/grey/600` |
| `border/interactive/disabled-light` | <ColorSwatch color="#e1e3e9" /> `#e1e3e9` | `color/grey/300` |
| `border/interactive/unchecked` | <ColorSwatch color="#a9aeb4" /> `#a9aeb4` | `color/grey/500` |
| `border/interactive/read-only` | <ColorSwatch color="#a9aeb4" /> `#a9aeb4` | `color/grey/500` |
| `border/brand/default` | <ColorSwatch color="#054ad1" /> `#054ad1` | `color/blue/600` |
| `border/brand/brand-active` | <ColorSwatch color="#002352" /> `#002352` | `color/blue/800` |
| `border/brand/split button` | <ColorSwatch color="#003b8a" /> `#003b8a` | `color/blue/700` |
| `border/status/error` | <ColorSwatch color="#ba1309" /> `#ba1309` | `color/red/600` |
| `border/status/success` | <ColorSwatch color="#0a7b48" /> `#0a7b48` | `color/green/600` |
| `border/status/warning` | <ColorSwatch color="#dd5d00" /> `#dd5d00` | `color/yellow/600` |
| `border/status/info` | <ColorSwatch color="#054ad1" /> `#054ad1` | `color/blue/600` |
| `border/info/blue` | <ColorSwatch color="#006afa" /> `#006afa` | `color/blue/500` |
| `border/info/blue-accent` | <ColorSwatch color="#002352" /> `#002352` | `color/blue/800` |
| `border/info/teal` | <ColorSwatch color="#008484" /> `#008484` | `color/teal/500` |
| `border/info/teal-accent` | <ColorSwatch color="#003535" /> `#003535` | `color/teal/800` |
| `border/info/purple` | <ColorSwatch color="#9300ff" /> `#9300ff` | `color/purple/500` |
| `border/info/purple-accent` | <ColorSwatch color="#300053" /> `#300053` | `color/purple/800` |

### Cosmetic

| Token | Hex | Primitive |
|-------|-----|-----------|
| `Cosmetic/key/grey` | <ColorSwatch color="#a9aeb4" /> `#a9aeb4` | `color/grey/500` |
| `Cosmetic/key/red` | <ColorSwatch color="#e51b00" /> `#e51b00` | `color/red/500` |
| `Cosmetic/key/yellow` | <ColorSwatch color="#ffaa00" /> `#ffaa00` | `color/yellow/400` |
| `Cosmetic/key/green` | <ColorSwatch color="#27a86c" /> `#27a86c` | `color/green/400` |
| `Cosmetic/key/teal` | <ColorSwatch color="#008484" /> `#008484` | `color/teal/500` |
| `Cosmetic/key/teal-accent` | <ColorSwatch color="#004f4f" /> `#004f4f` | `color/teal/700` |
| `Cosmetic/key/blue` | <ColorSwatch color="#006afa" /> `#006afa` | `color/blue/500` |
| `Cosmetic/key/blue-accent` | <ColorSwatch color="#003b8a" /> `#003b8a` | `color/blue/700` |
| `Cosmetic/key/purple` | <ColorSwatch color="#9300ff" /> `#9300ff` | `color/purple/500` |
| `Cosmetic/key/purple-accent` | <ColorSwatch color="#51008c" /> `#51008c` | `color/purple/700` |
| `Cosmetic/illustrations/brand` | <ColorSwatch color="#054ad1" /> `#054ad1` | `color/blue/600` |
| `Cosmetic/illustrations/brand-light` | <ColorSwatch color="#abd0fd" /> `#abd0fd` | `color/blue/200` |
| `Cosmetic/illustrations/internal-outline` | <ColorSwatch color="#a9aeb4" /> `#a9aeb4` | `color/grey/500` |
| `Cosmetic/illustrations/surface` | <ColorSwatch color="#ffffff" /> `#ffffff` | `color/grey/white` |
| `Cosmetic/illustrations/surface-grey` | <ColorSwatch color="#f5f6fa" /> `#f5f6fa` | `color/grey/100` |

### Elevation Colors

| Token | Hex | Primitive |
|-------|-----|-----------|
| `elevation/level-1/Color` | <ColorSwatch color="#0f001a14" /> `#0f001a14` | `color/opacity/elevation-8%` |
| `elevation/level-2/shadow-1/Color` | <ColorSwatch color="#0f001a1a" /> `#0f001a1a` | `color/opacity/elevation-10%` |
| `elevation/level-2/shadow-2/Color` | <ColorSwatch color="#0f001a0f" /> `#0f001a0f` | `color/opacity/elevation-6%` |
| `elevation/level-3/shadow-1/Color` | <ColorSwatch color="#0f001a1f" /> `#0f001a1f` | `color/opacity/elevation-12%` |
| `elevation/level-3/shadow-2/Color` | <ColorSwatch color="#0f001a14" /> `#0f001a14` | `color/opacity/elevation-8%` |
| `elevation/shell/color` | <ColorSwatch color="#00000040" /> `#00000040` | `color/opacity/elevation-25%` |

---

## Semantic Scale

Scale variables from the **1 SEMANTIC SCALE** collection. Many values are responsive across four breakpoints.

### Viewport

| Token | Widescreen | Desktop | Tablet | Mobile |
|-------|-----------|---------|--------|--------|
| `viewport/width/min` | 1440px | 1024px | 768px | 393px |
| `viewport/width/default` | 1440px | 1024px | 768px | 393px |
| `viewport/width/max` | 1720px | 1439px | 1023px | 767px |
| `viewport/height/default` | 1024px | 768px | 1024px | 844px |

### Spacing — Base

| Token | Value (all breakpoints) |
|-------|------------------------|
| `spacing/none` | 0px |
| `spacing-1x` | 4px |

### Spacing — Grid

| Token | Widescreen | Desktop | Tablet | Mobile |
|-------|-----------|---------|--------|--------|
| `spacing/grid/marginContentArea` | 24px | 32px | 16px | 16px |
| `spacing/grid/marginPageShell` | 32px | 32px | 16px | 16px |
| `spacing/grid/columns` | 12 | 12 | 8 | 4 |
| `spacing/grid/gutter` | 20px | 20px | 16px | 12px |

### Spacing — Padding

| Token | Widescreen | Desktop | Tablet | Mobile |
|-------|-----------|---------|--------|--------|
| `spacing/padding/xxs` | 4px | 4px | 4px | 4px |
| `spacing/padding/xs` | 8px | 8px | 8px | 4px |
| `spacing/padding/sm` | 12px | 12px | 8px | 8px |
| `spacing/padding/md` | 16px | 16px | 12px | 12px |
| `spacing/padding/lg` | 20px | 20px | 16px | 16px |
| `spacing/padding/xl` | 24px | 24px | 16px | 16px |
| `spacing/padding/xxl` | 32px | 32px | 24px | 20px |
| `spacing/padding/3xl` | 40px | 40px | 32px | 24px |
| `spacing/padding/4xl` | 48px | 48px | 40px | 32px |
| `spacing/padding/5xl` | 56px | 56px | 48px | 40px |
| `spacing/padding/6xl` | 80px | 80px | 64px | 48px |

### Spacing — Stack (vertical)

| Token | Widescreen | Desktop | Tablet | Mobile |
|-------|-----------|---------|--------|--------|
| `spacing/stack/xxs` | 4px | 4px | 4px | 4px |
| `spacing/stack/xs` | 8px | 8px | 8px | 4px |
| `spacing/stack/sm` | 12px | 12px | 8px | 8px |
| `spacing/stack/md` | 16px | 16px | 12px | 8px |
| `spacing/stack/lg` | 20px | 20px | 16px | 16px |
| `spacing/stack/xl` | 24px | 24px | 20px | 16px |
| `spacing/stack/xxl` | 32px | 32px | 24px | 20px |
| `spacing/stack/3xl` | 40px | 40px | 32px | 24px |
| `spacing/stack/4xl` | 48px | 48px | 40px | 32px |
| `spacing/stack/5xl` | 56px | 56px | 48px | 40px |
| `spacing/stack/6xl` | 80px | 80px | 64px | 48px |

### Spacing — Inline (horizontal)

| Token | Widescreen | Desktop | Tablet | Mobile |
|-------|-----------|---------|--------|--------|
| `spacing/inline/xxs` | 4px | 4px | 4px | 4px |
| `spacing/inline/xs` | 8px | 8px | 8px | 8px |
| `spacing/inline/sm` | 12px | 12px | 12px | 8px |
| `spacing/inline/md` | 16px | 16px | 16px | 12px |
| `spacing/inline/lg` | 20px | 20px | 20px | 16px |
| `spacing/inline/xl` | 24px | 24px | 24px | 20px |
| `spacing/inline/xxl` | 32px | 32px | 32px | 24px |
| `spacing/inline/3xl` | 40px | 40px | 40px | 32px |
| `spacing/inline/4xl` | 48px | 48px | 48px | 40px |
| `spacing/inline/5xl` | 56px | 56px | 56px | 48px |
| `spacing/inline/6xl` | 80px | 80px | 80px | 64px |

### Typography — Font Size

#### Headings

| Token | Widescreen / Desktop | Tablet / Mobile |
|-------|---------------------|-----------------|
| `typography/font-size/heading/heading-1` | 36px | 28px |
| `typography/font-size/heading/heading-2` | 28px | 24px |
| `typography/font-size/heading/heading-3` | 24px | 20px |
| `typography/font-size/heading/heading-4` | 20px | 20px |
| `typography/font-size/heading/heading-5` | 16px | 16px |

#### Body

| Token | Value (all breakpoints) |
|-------|------------------------|
| `typography/font-size/text/text-1` | 48px |
| `typography/font-size/text/text-2` | 36px |
| `typography/font-size/text/text-3` | 24px |
| `typography/font-size/text/text-4` | 16px |
| `typography/font-size/text/text-5` | 14px |
| `typography/font-size/text/text-6` | 13px |

#### Interactive & Display

| Token | Value (all breakpoints) |
|-------|------------------------|
| `typography/font-size/button/button-lg` | 16px |
| `typography/font-size/button/button-sm` | 14px |
| `typography/font-size/link/link` | 16px |
| `typography/font-size/display/insightCard` | 32px (20px on Tablet/Mobile) |

### Typography — Line Height

#### Headings

| Token | Widescreen / Desktop | Tablet / Mobile |
|-------|---------------------|-----------------|
| `typography/font-lineHeight/heading/heading-1` | 72px | 36px |
| `typography/font-lineHeight/heading/heading-2` | 40px | 32px |
| `typography/font-lineHeight/heading/heading-3` | 36px | 32px |
| `typography/font-lineHeight/heading/heading-4` | 32px | 32px |
| `typography/font-lineHeight/heading/heading-5` | 24px | 24px |

#### Body

| Token | Value (all breakpoints) |
|-------|------------------------|
| `typography/font-lineHeight/text/text-1` | 72px |
| `typography/font-lineHeight/text/text-2` | 54px |
| `typography/font-lineHeight/text/text-3` | 36px |
| `typography/font-lineHeight/text/text-4` | 24px |
| `typography/font-lineHeight/text/text-5` | 20px |
| `typography/font-lineHeight/text/text-6` | 14px |

#### Interactive & Display

| Token | Value (all breakpoints) |
|-------|------------------------|
| `typography/font-lineHeight/button/button-lg` | 16px |
| `typography/font-lineHeight/button/button-sm` | 14px |
| `typography/font-lineHeight/link/link` | 24px |
| `typography/font-lineHeight/display/insightCard` | 48px (32px on Tablet/Mobile) |

### Component Scale

#### Icons

| Token | Value |
|-------|-------|
| `component-scale/icons/xx-small` | 8px |
| `component-scale/icons/x-small` | 12px |
| `component-scale/icons/small` | 16px |
| `component-scale/icons/medium` | 20px |
| `component-scale/icons/large` | 24px |
| `component-scale/icons/x-large` | 28px |
| `component-scale/icons/xx-large` | 32px |
| `component-scale/icons/hero` | 92px |

#### Buttons

| Token | Value (all breakpoints) |
|-------|------------------------|
| `component-scale/buttons/small` | 28px |
| `component-scale/buttons/large` | 40px |

#### Avatars

| Token | Widescreen | Desktop | Tablet | Mobile |
|-------|-----------|---------|--------|--------|
| `component-scale/avatar/x-small` | 28px | 32px | 32px | 32px |
| `component-scale/avatar/small` | 32px | 32px | 32px | 32px |
| `component-scale/avatar/medium` | 44px | 44px | 44px | 44px |
| `component-scale/avatar/large` | 56px | 44px | 44px | 44px |
| `component-scale/avatar/x-large` | 64px | 44px | 44px | 44px |
| `component-scale/avatar/xx-large` | 96px | 44px | 44px | 44px |
| `component-scale/avatar/hero` | 152px | 152px | 152px | 152px |

#### List Items

| Token | Value (all breakpoints) |
|-------|------------------------|
| `component-scale/list-item/small` | 40px |
| `component-scale/list-item/medium` | 48px |
| `component-scale/list-item/large` | 60px |

#### Other Components

| Token | Widescreen | Desktop | Tablet | Mobile |
|-------|-----------|---------|--------|--------|
| `component-scale/field/min-height` | 44px | 44px | 44px | 44px |
| `component-scale/headerSelectors/height` | 56px | 56px | 56px | 56px |
| `component-scale/widgetHeader/small` | 64px | 64px | 64px | 64px |
| `component-scale/widgetHeader/large` | 80px | 80px | 80px | 80px |
| `component-scale/illustration/small` | 48px | 48px | 48px | 48px |
| `component-scale/illustration/medium` | 64px | 64px | 64px | 64px |
| `component-scale/illustration/large` | 152px | 152px | 152px | 152px |
| `component-scale/modal/alertModal` | 480px | 480px | 480px | 388px |
| `component-scale/max-width/textToolltip` | 240px | 240px | 240px | 240px |
| `component-scale/max-width/compact-element` | 256px | 256px | 256px | 256px |
| `component-scale/table-cells/min-width` | 132px | 132px | 132px | 132px |
| `component-scale/table-cells/max-width` | 256px | 256px | 256px | 256px |
| `component-scale/flyout/width` | 640px | 480px | — | — |
| `component-scale/max-height/widget` | 1304px | 1311px | 727px | 361px |
| `component-scale/max-height/gridViewCard` | 380px | 380px | 380px | 361px |
| `component-scale/productSwitcher/width` | 342px | 342px | 1440px | 1440px |
| `touchTarget` | 44px | 44px | 44px | 44px |

#### Indicators

| Token | Value (all breakpoints) |
|-------|------------------------|
| `component-scale/indicator/small` | 4px |
| `component-scale/indicator/medium` | 16px |
| `component-scale/indicator/large` | 16px |

### Stroke

| Token | Value (all breakpoints) |
|-------|------------------------|
| `stroke/divider` | 1px |
| `stroke/border/default` | 1px |
| `stroke/indicator/active` | 2px |

### Radius

#### Component Radii

| Token | Value |
|-------|-------|
| `radius/components/actions` | 999px (pill) |
| `radius/components/pageContentArea` | 20px |
| `radius/components/pageSection` | 16px |
| `radius/components/pageCards` | 12px |
| `radius/components/modal` | 12px |
| `radius/components/table` | 8px |
| `radius/components/leftnavActive` | 4px |

#### Radius Scale

| Token | Value |
|-------|-------|
| `radius/scale/none` | 0px |
| `radius/scale/small` | 4px |
| `radius/scale/medium` | 12px |
