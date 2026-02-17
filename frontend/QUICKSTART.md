# 🚀 QUICK START GUIDE - AMIE LIFE

## Installation (2 minutes)

### Option 1: NPM (Recommended)
```bash
cd d:/Synora_Technologies/AmieLife_FullStack/frontend
npm install
npm run dev
```

### Option 2: If NPM has issues
```bash
cd d:/Synora_Technologies/AmieLife_FullStack/frontend
npm cache clean --force
npm install --legacy-peer-deps
npm run dev
```

### Option 3: Use Yarn
```bash
cd d:/Synora_Technologies/AmieLife_FullStack/frontend
yarn install
yarn dev
```

## What You Get

✨ **Fully functional React website with:**

### Pages
- **Home** (`/`) - Full landing page with:
  - Hero section with video background
  - Technology showcase
  - Why AMIE section
  - Product carousel
  - Science section
  - Sustainability info
  - Testimonials slider
  
- **About** (`/about`) - Complete about page with:
  - Company overview
  - Story timeline
  - Trust factors
  - Technology details
  - Real-life applications
  - Purpose statement

### Features
- ✅ Sticky navigation header
- ✅ Mobile responsive menu
- ✅ Smooth scroll animations
- ✅ Parallax effects
- ✅ Floating animations
- ✅ Product carousels
- ✅ Glass morphism effects
- ✅ Beautiful footer with newsletter
- ✅ Social media links
- ✅ Professional color scheme

## Color Palette

- **Primary Cream**: #F5F1E8 (Background)
- **Dark Purple**: #2B1B3D (Headers, Footer)
- **Accent Purple**: #4A3B5C (Buttons, Links)
- **Gold**: #D4AF37 (Accents, Highlights)

## Fonts Used

- **Headings**: Playfair Display (Serif)
- **Body**: Poppins (Sans-serif)

## Next Steps After Installation

### 1. Add Your Assets
```
public/
├── images/
│   ├── products/
│   │   ├── product1.jpg
│   │   ├── product2.jpg
│   │   └── ...
│   ├── logo.png
│   └── hero-bg.jpg
└── videos/
    └── hero-video.mp4
```

### 2. Update Content

Edit these files to add your real content:

- **Products**: `src/pages/Home.jsx` (line ~20)
- **Testimonials**: `src/pages/Home.jsx` (line ~25)
- **About Content**: `src/pages/About.jsx`
- **Footer Links**: `src/components/Footer.jsx`

### 3. Deploy

Once satisfied, build for production:
```bash
npm run build
```

Upload the `dist` folder to your hosting provider.

## Recommended Hosting

- **Vercel** (Free, automatic deployments)
- **Netlify** (Free, drag & drop)
- **GitHub Pages** (Free)

## Support

If you encounter issues:

1. **Clear cache**: `npm cache clean --force`
2. **Delete node_modules**: `rm -rf node_modules`
3. **Reinstall**: `npm install`
4. **Try different port**: Edit `vite.config.js`

## Technologies Used

| Library | Purpose |
|---------|---------|
| React 18 | UI Framework |
| Vite | Build Tool |
| Framer Motion | Animations |
| React Slick | Carousels |
| React Router | Navigation |
| React Icons | Icon Library |
| AOS | Scroll Animations |

---

**Ready to impress your client!** 🎉

The website is designed to be modern, fast, and beautiful.
All the "magic" effects are already implemented!
