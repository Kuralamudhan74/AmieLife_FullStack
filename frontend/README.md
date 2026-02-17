# AMIE LIFE - Premium React Website

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd d:/Synora_Technologies/AmieLife_FullStack/frontend
npm install
```

If npm has issues, try:
```bash
npm cache clean --force
npm install
```

Or use yarn:
```bash
yarn install
```

### 2. Run Development Server

```bash
npm run dev
```

The website will open at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

## ✨ Features Implemented

### Modern Effects & Animations
- ✅ Parallax scrolling effects
- ✅ Floating animations
- ✅ Smooth scroll reveal animations (AOS)
- ✅ Interactive carousels (React Slick)
- ✅ Framer Motion page transitions
- ✅ Glass morphism effects
- ✅ Gradient text effects
- ✅ Hover lift animations
- ✅ Video background support

### Components Created
- ✅ Sticky Header with smooth scroll effects
- ✅ Mobile responsive navigation
- ✅ Home page with 7+ sections
- ✅ About page with 6+ sections
- ✅ Premium Footer with newsletter
- ✅ Product carousels
- ✅ Testimonial sliders

### Design Features
- ✅ Premium color scheme (Purple & Cream)
- ✅ Modern typography (Playfair Display + Poppins)
- ✅ Fully responsive design
- ✅ Smooth transitions throughout
- ✅ Custom scrollbar styling
- ✅ Interactive button effects

## 📁 Project Structure

```
frontend/
├── public/
│   ├── images/          # Add your product images here
│   └── videos/          # Add your hero videos here
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── About.jsx
│   │   └── About.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

## 🎨 Customization Guide

### Adding Images

1. **Product Images**: Place in `public/images/products/`
2. **Hero Videos**: Place in `public/videos/`
3. **Icons**: Using React Icons library

Update the placeholders in Home.jsx:

```jsx
// Replace:
<div className="video-placeholder"></div>

// With:
<video autoPlay loop muted>
  <source src="/videos/hero-video.mp4" type="video/mp4" />
</video>
```

### Adding Real Products

Edit `src/pages/Home.jsx`:

```jsx
const products = [
  {
    name: "Your Product Name",
    icon: "🌙",
    image: "/images/products/product1.jpg",
    price: "$29.99"
  },
  // Add more products...
]
```

### Color Customization

Edit `src/index.css` variables:

```css
:root {
  --primary-cream: #F5F1E8;
  --dark-purple: #2B1B3D;
  --accent-purple: #4A3B5C;
  --gold: #D4AF37;
}
```

## 📦 Dependencies

### Core
- React 18.3.1
- React DOM 18.3.1
- React Router DOM 6.22.0

### Animations
- Framer Motion 11.0.5
- AOS (Animate On Scroll) 2.3.4
- React Intersection Observer 9.13.0

### UI Components
- React Slick 0.30.2
- Slick Carousel 1.8.1
- React Icons 5.0.1

### Build Tools
- Vite 5.1.4
- @vitejs/plugin-react 4.2.1

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🎯 Performance Tips

1. **Optimize Images**: Use WebP format for better compression
2. **Lazy Loading**: Images load as user scrolls
3. **Code Splitting**: Automatic with Vite
4. **Minification**: Enabled in production build

## 🐛 Troubleshooting

### npm install fails
```bash
# Clear cache and try again
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 already in use
Edit `vite.config.js`:
```js
server: {
  port: 3001, // Change to any available port
}
```

### Carousel not working
Ensure slick CSS is imported in `main.jsx`:
```js
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
```

## 🚀 Deployment

### Build for production
```bash
npm run build
```

The `dist` folder contains your production-ready files.

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Drag & drop the `dist` folder to Netlify
2. Or connect your Git repository

## 📝 License

Proprietary - Amie Life © 2026

## 👨‍💻 Development

Built with ❤️ using:
- React + Vite
- Framer Motion
- Modern CSS
- Best practices

---

**Need help?** Check the code comments or contact the development team.
