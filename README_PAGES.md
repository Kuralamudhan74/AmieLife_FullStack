# Amie Life React Pages - Implementation Guide

## Overview
React component files have been successfully created for the Amie Life website in the directory:
**d:/Synora_Technologies/AmieLife_FullStack/frontend/src/pages/**

## Created Files

### 1. Home.jsx
**Location:** `d:/Synora_Technologies/AmieLife_FullStack/frontend/src/pages/Home.jsx`

**Purpose:** Main landing page component

**Planned Sections:**
- Hero Section with animated floating elements
- Technology Section showcasing bio-engineering and molecular science
- Why Amie Section highlighting key features (Natural, Health First, Science-Backed, Safety)
- Products Carousel with react-slick
- Science Section with statistics and research highlights
- Sustainability Section emphasizing environmental commitment
- Testimonials Section with customer reviews
- Call-to-Action Section

**Key Technologies:**
- Framer Motion for animations
- React Slick for product carousel
- React Icons (FaLeaf, FaHeart, FaBrain, etc.)
- Custom hooks (useScroll, useTransform, useInView)

### 2. Home.css
**Location:** `d:/Synora_Technologies/AmieLife_FullStack/frontend/src/pages/Home.css`

**Features:**
- Gradient backgrounds
- Responsive design
- Hero section styling
- Animation classes
- Card layouts
- Carousel styling

### 3. About.jsx
**Location:** `d:/Synora_Technologies/AmieLife_FullStack/frontend/src/pages/About.jsx`

**Purpose:** Company information and story page

**Planned Sections:**
- Hero Section
- Who Are We
- What's Our Story
- Why Trust Us
- Technology at the Core
- We're Fit for Real Life
- Our Purpose

### 4. About.css
**Location:** `d:/Synora_Technologies/AmieLife_FullStack/frontend/src/pages/About.css`

**Features:**
- About page specific styling
- Section layouts
- Responsive design patterns

## Current Status

The files have been created with:
- Proper React component structure
- All necessary imports
- TypeScript-ready JSX syntax
- Basic starter implementation
- Comments indicating where to expand

## Required Dependencies

Install these packages before using the components:

```bash
cd frontend
npm install framer-motion react-slick slick-carousel react-icons
```

### Dependency Details:
- **framer-motion**: ^10.x - For smooth animations and transitions
- **react-slick**: ^0.29.x - Carousel component
- **slick-carousel**: ^1.8.x - Carousel styles
- **react-icons**: ^4.x - Icon library (Font Awesome, Material Design, etc.)

## Implementation Steps

### Step 1: Install Dependencies
```bash
cd d:/Synora_Technologies/AmieLife_FullStack/frontend
npm install framer-motion react-slick slick-carousel react-icons
```

### Step 2: Prepare Assets
Create the images directory and add product/testimonial images:
```bash
mkdir -p public/images
# Add your images: product1.jpg, product2.jpg, etc.
```

### Step 3: Expand Component Code
Open each .jsx file in your code editor and expand the sections marked with:
- `// Add full implementation here`
- `{/* Add remaining sections */}`

### Step 4: Customize Styles
Edit the .css files to match your brand colors, fonts, and design system.

### Step 5: Test
```bash
npm run dev
# Navigate to the pages to test functionality
```

## Design Reference

Refer to these PDF documents for detailed design specifications:
- `Home page-15.02.2026.pdf` - Home page layout and content
- `About page- 15.02.2026.pdf` - About page layout and content

## Component Architecture

```
Home Component
├── Hero Section (animated)
├── Technology Grid (4 cards)
├── Why Amie Features (4 cards)
├── Products Carousel (5+ products)
├── Science Section (with stats)
├── Sustainability Section
├── Testimonials Grid (3 testimonials)
└── CTA Section

About Component
├── Hero Section
├── Who Are We Section
├── Our Story Timeline
├── Trust Factors Grid
├── Technology Section
├── Real Life Applications
└── Purpose Statement
```

## Animation Features

### Framer Motion Animations Used:
1. **Floating Animation** - Smooth up/down movement for hero elements
2. **Fade In Up** - Elements fade in and slide up on scroll
3. **Stagger Children** - Sequential animation of child elements
4. **Parallax** - Background moves at different speed than foreground
5. **Hover Effects** - Scale, rotate, and shadow changes on hover
6. **Scroll Progress** - Elements transform based on scroll position

## Responsive Breakpoints

```css
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px
```

## File Structure

```
frontend/src/pages/
├── Home.jsx          (31 lines - starter)
├── Home.css          (44 lines - starter)
├── About.jsx         (23 lines - starter)
└── About.css         (19 lines - starter)
```

## Next Development Tasks

1. ✅ Create file structure
2. ✅ Add imports and basic setup
3. ⏳ Implement full Hero section with animations
4. ⏳ Build Technology cards grid
5. ⏳ Create Why Amie features section
6. ⏳ Implement Products carousel
7. ⏳ Add Science section with stats
8. ⏳ Build Sustainability section
9. ⏳ Create Testimonials grid
10. ⏳ Add CTA section
11. ⏳ Implement About page sections
12. ⏳ Add responsive CSS
13. ⏳ Test animations
14. ⏳ Optimize performance

## Notes

- The starter files include all necessary imports
- Basic component structure is in place
- Expand each section based on your design requirements
- Use the PDF design documents as reference for exact content and layout
- Test responsiveness at each breakpoint
- Ensure accessibility (alt tags, ARIA labels, keyboard navigation)

## Support

For questions or issues:
1. Check the PDF design documents
2. Review Framer Motion documentation
3. Check React Slick documentation
4. Test in multiple browsers

---

**Created:** February 17, 2026
**Location:** d:/Synora_Technologies/AmieLife_FullStack/
**Status:** Starter files created, ready for expansion
