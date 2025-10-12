# Design Guidelines: 21 Days of Prayer Sales Page

## Design Approach
**Reference-Based Approach**: Spiritual/Religious Product Sales Pages
Drawing inspiration from successful faith-based product pages and digital course platforms, this design emphasizes warmth, trust, and emotional connection while maintaining clear conversion paths.

## Core Design Principles
- **Warmth & Trust**: Create an inviting, spiritually uplifting atmosphere
- **Clarity & Simplicity**: Guide users effortlessly through the conversion journey
- **Emotional Connection**: Design speaks to spiritual transformation and hope

## Color Palette

### Primary Colors (Light Mode)
- **Background**: 48 100% 97% (warm cream/off-white #fffaf3)
- **Primary Gold**: 43 86% 38% (rich gold #b8860b)
- **Light Gold**: 45 86% 59% (bright gold #d4af37)
- **Accent Gold**: 44 88% 71% (soft gold #f7d774)

### Gradients
- **Hero Gradient**: Linear gradient from 44 88% 71% to 45 86% 59% (135deg)
- **Button Hover**: Solid 45 86% 59%

### Text Colors
- **Primary Text**: 0 0% 20% (dark gray #333)
- **Secondary Text**: 0 0% 60% (medium gray #999)
- **Footer Text**: 0 0% 47% (muted gray #777)

### Interactive States
- **Button Base**: 43 86% 38%
- **Button Hover**: 45 86% 59% with scale(1.05) transform
- **Links**: Inherit gold tones from context

## Typography

### Font Stack
- **Primary**: 'Poppins', system-ui, -apple-system, sans-serif
- **Fallback**: System sans-serif stack

### Type Scale
- **Hero H1**: 2.4rem (38px), bold, white on gradient
- **Hero Subtitle**: 1.2rem (19px), regular, white
- **Section H2**: 1.8rem (29px), semibold, primary gold
- **Price Old**: 1.8rem (29px), strikethrough, gray
- **Price New**: 2rem (32px), bold, primary gold
- **Button Text**: 1.2rem (19px), medium
- **Body**: 1rem (16px), line-height 1.6
- **Footer**: 0.9rem (14px)

## Layout System

### Spacing Primitives
Use Tailwind units: **4, 8, 10, 12, 16, 20, 40** (p-4, py-8, px-10, my-12, mx-16, py-20, px-40)

### Container Structure
- **Max Width**: 900px (max-w-4xl) for content container
- **Header Padding**: py-16 px-8 (60px vertical, 20px horizontal)
- **Section Margin**: my-10 (40px between major sections)
- **Card Padding**: p-8 (30px all sides)

### Responsive Breakpoints
- Mobile: Single column, p-4
- Tablet (md:): p-6, maintain single column
- Desktop (lg:): Full container width with max-w-4xl

## Component Library

### Header/Hero Section
- Full-width gradient background (gold gradient)
- Centered content with white text
- Emoji accents (✨, 🙏) for visual interest
- Price display: strikethrough old price + highlighted new price
- Primary CTA button below price
- Guarantee text below button
- Padding: py-16 px-8

### Content Cards
- White background with subtle shadow: shadow-md
- Rounded corners: rounded-2xl (15px)
- Padding: p-8
- Margin between cards: mb-10
- Clean, airy feel with generous whitespace

### Call-to-Action Buttons
- Background: Primary gold (#b8860b)
- Text: White, 1.2rem, medium weight
- Padding: py-5 px-10 (18px 40px)
- Border radius: rounded-full (40px pill shape)
- Hover: Background transitions to light gold + scale(1.05)
- Transition: 300ms ease

### List Items (Benefits/Features)
- Emoji bullets (🌞, 💎, 🕊️, 💭, ✨, etc.)
- Bold keywords using spans
- Regular weight body text
- Vertical spacing: mb-3 between items

### Testimonials
- Italic quotes in em tags
- Author names in bold
- Light card background
- Comfortable padding and spacing

### Price Display
- Strikethrough old price in gray
- Large, bold new price in primary gold
- Vertical rhythm: my-6
- Center alignment for emphasis

### Trust Indicators
- Security icons (🔒)
- Guarantee statements
- "Acesso vitalício" (lifetime access) messaging
- Positioned near CTAs

### Footer
- Light border-top (1px solid #eee)
- Centered text, small size
- Muted gray color
- Minimal padding: py-8

## Images

### Hero Section
**Background Pattern/Texture** (Optional but Recommended)
- Subtle spiritual imagery: soft rays of light, prayer hands silhouette, or abstract gold patterns
- Overlay gradient to ensure text readability
- Opacity: 0.1-0.2 for subtle effect
- Position: Background of hero section

### Card Icons/Illustrations
**Decorative Elements** (Not critical)
- Small icon graphics for each benefit/feature if desired
- Maintain warm, spiritual aesthetic
- Use sparingly to avoid clutter
- Alternative: Rely on emojis as provided in original

**No large hero image required** - gradient background with optional subtle texture is sufficient

## Animations & Interactions

### Minimal Animation Strategy
- Button hover: Background color transition (300ms) + scale(1.05)
- No scroll animations
- No complex entrance effects
- Focus on instant clarity over motion

## Accessibility & Quality

### Contrast & Readability
- White text on gold gradient meets WCAG AA
- Dark text on cream background: excellent contrast
- Button text clearly readable
- All interactive elements have clear visual affordance

### Mobile Optimization
- Full responsive scaling
- Touch-friendly button sizes (min 44px height)
- Readable text sizes on small screens
- Single column layout prevents cramping

## Content Structure (Page Flow)

1. **Hero**: Headline, subtitle, price, CTA, guarantee
2. **Introduction Card**: Problem/solution overview
3. **What You Get Card**: Bulleted list of deliverables
4. **Results Card**: Emotional benefits and outcomes
5. **Target Audience Card**: "Para quem é" qualification
6. **Social Proof Card**: Testimonials with names
7. **Accessibility Card**: Device compatibility, print option
8. **Final CTA Card**: Repeat price, CTA, trust indicators
9. **Footer**: Copyright and legal

### Conversion Optimization
- Two CTA placements: Hero and final section
- Price shown twice for reinforcement
- Guarantee prominently displayed
- Trust signals throughout (secure, lifetime access)
- Testimonials placed strategically before final CTA