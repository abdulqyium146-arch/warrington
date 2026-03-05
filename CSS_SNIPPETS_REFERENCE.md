# Quick Reference: CSS Classes & Tailwind Utilities

Fast lookup for all improved UI/UX CSS classes and Tailwind utilities used in the improvements.

---

## Button Styling

### Primary Buttons
```html
<!-- Large button (recommended) -->
<button class="btn-primary text-base md:text-lg py-4 md:py-5 px-6 md:px-10 w-full sm:w-auto justify-center">
  📞 Book Now
</button>

<!-- Small button (sidebar, compact areas) -->
<button class="btn-primary text-sm py-2.5 px-4">
  Quick Action
</button>
```

### Secondary Buttons
```html
<button class="btn-secondary text-base md:text-lg py-4 md:py-5 px-6 md:px-10">
  Get a Quote
</button>
```

### Button Variations
```css
/* Ghost button (no background) */
class="text-brand-gold hover:text-brand-gold-light transition-colors"

/* Text button with icon */
class="inline-flex items-center gap-2 text-brand-gold hover:gap-3 transition-all"

/* Disabled state */
class="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"

/* Full width (mobile) */
class="w-full sm:w-auto"
```

---

## Responsive Layout Classes

### Grid Systems
```html
<!-- 1 column mobile, 2 tablet, 3 desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
  <!-- items -->
</div>

<!-- 1 column mobile, 2 desktop (common for cards) -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
  <!-- items -->
</div>

<!-- 2 columns mobile (narrow), 3 tablet, 4 desktop -->
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
  <!-- items -->
</div>
```

### Flex Layouts
```html
<!-- Stacked mobile, row on tablet+ -->
<div class="flex flex-col md:flex-row gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Centered flex container -->
<div class="flex items-center justify-center gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Space between items -->
<div class="flex justify-between items-center">
  <div>Left</div>
  <div>Right</div>
</div>
```

---

## Spacing Classes

### Improved Mobile Spacing
```css
/* Section padding - mobile first */
py-12 md:py-16 lg:py-20

/* Component padding */
p-6 md:p-7 lg:p-8

/* Gap/margin between sections */
gap-6 md:gap-8 lg:gap-10

/* Margin bottom for spacing */
mb-6 md:mb-8
```

### Safe Area Considerations (Mobile)
```html
<!-- Top spacing for fixed header -->
<section class="pt-20 md:pt-24">

<!-- Bottom spacing for fixed footer -->
<section class="pb-16 md:pb-20">
```

---

## Typography Classes

### Headings
```html
<!-- H1 - Page title -->
<h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black leading-tight">
  Main Heading
</h1>

<!-- H2 - Section title -->
<h2 class="section-heading">
  Section Heading
</h2>

<!-- H3 - Card/subsection title -->
<h3 class="font-heading font-bold text-lg md:text-xl lg:text-2xl">
  Card Title
</h3>
```

### Body Text
```html
<!-- Regular paragraph -->
<p class="text-gray-400 text-sm md:text-base leading-relaxed">
  Body text - automatically adds leading-relaxed for readability
</p>

<!-- Large paragraph (hero/CTA) -->
<p class="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed">
  Large body text
</p>

<!-- Small text (metadata, footer) -->
<p class="text-gray-500 text-xs md:text-sm">
  Small text
</p>
```

### Text Utilities
```css
/* Section heading */
.section-heading

/* Section subheading (labels, intros) */
.section-subheading

/* Gold gradient text */
class="text-gradient-gold"

/* Truncate text to N lines */
class="line-clamp-2" /* (use for titles) */

/* Text colors */
text-brand-white        /* Primary text */
text-gray-300          /* Secondary text */
text-gray-400          /* Tertiary/muted text */
text-gray-500          /* Very muted */
```

---

## Card Components

### Basic Card
```html
<div class="card-dark p-6 md:p-7 lg:p-8">
  <div class="text-4xl md:text-5xl mb-5 md:mb-6">
    🏆
  </div>
  <h3 class="font-heading font-bold text-lg md:text-xl mb-3 md:mb-4">
    Card Title
  </h3>
  <p class="text-gray-400 text-sm md:text-base mb-4 md:mb-6">
    Card description
  </p>
</div>
```

### Feature List (in Card)
```html
<ul class="space-y-2.5 md:space-y-3 mb-6 md:mb-8">
  <li class="flex items-start gap-2.5 md:gap-3 text-xs md:text-sm text-gray-400">
    <span class="text-brand-gold flex-shrink-0 mt-1">✓</span>
    <span>Feature text</span>
  </li>
</ul>
```

---

## Interactive States

### Hover Effects
```css
/* Lift on hover */
hover:-translate-y-1

/* Smooth color change */
hover:text-brand-gold

/* Shadow on hover */
hover:shadow-lg hover:shadow-brand-gold/15

/* Border color change */
hover:border-brand-gold/60

/* Smooth transition */
transition-all duration-300
```

### Focus States (Accessibility)
```css
/* Button focus */
focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-black

/* Link focus */
focus:outline-none focus:text-brand-gold

/* Input focus */
focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20
```

### Active/Pressed States
```css
/* Button active (when clicked) */
active:scale-95

/* Disabled state */
disabled:opacity-50 disabled:cursor-not-allowed
```

---

## Navigation & Menu Classes

### Nav Links
```html
<a class="nav-link">
  Link text
</a>
```

### Mobile Menu Toggle
```html
<!--Hamburger icon with animation-->
<button class="inline-flex flex-col items-center justify-center w-10 h-10 p-2 rounded-md hover:bg-brand-gray/30">
  <div class="space-y-1.5 w-5 h-4 flex flex-col justify-between">
    <span class="block w-full h-0.5 bg-brand-gold rounded-full transition-all duration-300 origin-center" />
    <span class="block w-full h-0.5 bg-brand-gold rounded-full transition-opacity duration-300" />
    <span class="block w-full h-0.5 bg-brand-gold rounded-full transition-all duration-300 origin-center" />
  </div>
</button>
```

---

## Form Inputs

### Text Input
```html
<input
  type="text"
  placeholder="Enter text"
  class="input-field"
/>
```

### Textarea
```html
<textarea
  placeholder="Enter message"
  class="input-field resize-vertical min-h-32"
/>
```

### Select
```html
<select class="input-field">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

### Form variants
```css
/* Success state */
focus:border-green-500 focus:ring-green-500/20

/* Error state */
border-red-500 focus:border-red-500 focus:ring-red-500/20

/* Disabled input */
disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-brand-gray/50
```

---

## Sections & Containers

### Full-width Section
```html
<section class="py-12 md:py-16 lg:py-20 bg-brand-black">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <!-- Content -->
  </div>
</section>
```

### Container with Max Width
```html
<div class="max-w-4xl mx-auto px-4 sm:px-6">
  <!-- Centered content -->
</div>
```

### Backgrounds
```css
bg-brand-black       /* Dark background */
bg-brand-darkgray    /* Slightly lighter */
bg-brand-gray        /* Light gray */
bg-gradient-dark     /* Gradient (dark) */
bg-gradient-gold     /* Gradient (gold) */
```

---

## Utility Classes (Custom)

### Text Gradient
```html
<span class="text-gradient-gold">
  Gradient text
</span>
```

### Smooth Transitions
```html
<div class="transition-smooth">
  Smoothly animated element
</div>
```

### Line Clamping
```html
<!-- Truncate to 2 lines -->
<h3 class="line-clamp-2">
  Long title that will be truncated
</h3>
```

### Screen Reader Only (Hide visually)
```html
<span class="sr-only">
  Only visible to screen readers
</span>
```

---

## Common Responsive Patterns

### Hero Section
```html
<section class="relative min-h-screen flex items-center justify-center pt-20 md:pt-24">
  <Image src="..." fill priority quality={85} />
  <div class="relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-32 text-center">
    <!-- Content -->
  </div>
</section>
```

### CTA Buttons (Responsive)
```html
<div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
  <a href="..." class="btn-primary w-full sm:w-auto justify-center">
    CTA 1
  </a>
  <a href="..." class="btn-secondary w-full sm:w-auto justify-center">
    CTA 2
  </a>
</div>
```

### Image with Text Overlay
```html
<div class="relative h-48 md:h-56 lg:h-64 overflow-hidden rounded-lg">
  <Image src="..." fill className="object-cover" />
  <div class="absolute inset-0 bg-black/30 group-hover:bg-black/50" />
  <!-- Overlay content -->
</div>
```

### Feature Grid
```html
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
  <div class="card-dark p-4 md:p-6 text-center">
    <div class="text-3xl mb-2">🎯</div>
    <h3 class="font-bold text-sm md:text-base">Feature</h3>
  </div>
</div>
```

---

## Breakpoints Reference

```css
/* Mobile first approach */
default        /* 0px - Mobile (portrait) */
sm:           /* 640px - Small screens (landscape mobile) */
md:           /* 768px - Tablet */
lg:           /* 1024px - Desktop */
xl:           /* 1280px - Large desktop */
2xl:          /* 1536px - Extra large desktop */

/* Example */
text-lg md:text-xl lg:text-2xl
/* = Large on mobile, XL on tablet+, 2XL on desktop+ */
```

---

## Color Palette Quick Reference

```css
/* Golds */
brand-gold         /* #c9a84c - Primary accent */
brand-gold-light   /* #e8c96b - Lighter accent */
brand-gold-dark    /* #a8872d - Darker accent */

/* Backgrounds */
brand-black        /* #0a0a0a - Darkest background */
brand-darkgray     /* #1a1a1a - Dark gray background */
brand-gray         /* #2d2d2d - Medium gray */

/* Text */
brand-white        /* #f5f5f5 - Primary text color */
gray-300           /* Tailwind - Secondary text */
gray-400           /* Tailwind - Tertiary text */
gray-500           /* Tailwind - Muted text */
```

---

## Performance Tips

### Image Optimization Classes
```html
<!-- Responsive images with proper sizing -->
<Image
  src="..."
  alt="..."
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  loading="lazy"
/>

<!-- Background image optimization -->
<div class="bg-cover bg-center" style={{ backgroundImage: 'url(...)' }}>
```

### Lazy Loading
```html
<!-- Lazy load images below the fold -->
<Image loading="lazy" />

<!-- Or use Intersection Observer -->
<img loading="lazy" src="..." />
```

---

Generated: March 5, 2026
Code Snippet Library Version: 1.0
