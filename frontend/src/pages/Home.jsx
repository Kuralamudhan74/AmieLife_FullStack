import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Slider from 'react-slick';
import { FaLeaf, FaHeart, FaShieldAlt, FaStar, FaQuoteLeft, FaRecycle } from 'react-icons/fa';
import { MdEco } from 'react-icons/md';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollYProgress } = useScroll();
  const sliderRef = useRef(null);

  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const featureRef = useRef(null);
  const featureInView = useInView(featureRef, { once: true });

  const protectionRef = useRef(null);
  const protectionInView = useInView(protectionRef, { once: true });

  const whyRef = useRef(null);
  const whyInView = useInView(whyRef, { once: true });

  const productsRef = useRef(null);
  const productsInView = useInView(productsRef, { once: true });

  const scienceRef = useRef(null);
  const scienceInView = useInView(scienceRef, { once: true });

  const testimonialsRef = useRef(null);
  const testimonialsInView = useInView(testimonialsRef, { once: true });

  const sustainRef = useRef(null);
  const sustainInView = useInView(sustainRef, { once: true });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
  };

  const productCategories = [
    { name: 'Period Panties and Nightwear', placeholder: true },
    { name: 'Reusable Baby Diapers', placeholder: true },
    { name: "Men's and Women's Incontinence Wear", placeholder: true },
    { name: 'First Period Gift Hampers', placeholder: true },
    { name: 'Reusable Absorbent Inserts', placeholder: true },
  ];

  const testimonials = [
    {
      quote: "I forgot I was wearing leak-proof underwear. That's the best part.",
      author: 'Sharon A',
    },
    {
      quote: 'No rashes, no discomfort, just reliable protection through long days.',
      author: 'Deepika',
    },
    {
      quote: 'Sustainable, comfortable, and genuinely dependable.',
      author: 'Malini',
    },
  ];

  return (
    <div className="home-page">
      {/* ===== HERO SECTION ===== */}
      <section className="hero-section" ref={heroRef}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.div
            className="hero-logo-large"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <svg width="80" height="80" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" fill="#F5F1E8" />
              <path d="M20 8L25 18H15L20 8Z" fill="#2B1B3D" />
              <circle cx="20" cy="25" r="5" fill="#2B1B3D" />
            </svg>
            <span className="hero-brand-name">amie</span>
          </motion.div>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your Day, <span className="hero-title-highlight">Secured.</span>
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Next-Gen Reusable Leak-Proof Wear for Every Stage of Life
          </motion.p>
        </div>
        <div className="hero-video-placeholder">
          <span>/Videos/</span>
        </div>
      </section>

      {/* ===== FEATURE SECTION - Designed with advanced absorbent textile technology ===== */}
      <section className="feature-highlight-section section" ref={featureRef}>
        <div className="container">
          <motion.div
            className="feature-highlight-card"
            initial="hidden"
            animate={featureInView ? 'visible' : 'hidden'}
            variants={fadeUp}
          >
            <div className="feature-highlight-image">
              <div className="image-placeholder">IMAGE</div>
            </div>
            <div className="feature-highlight-text">
              <h2>Designed with advanced absorbent textile technology</h2>
              <p>
                AMIE delivers reliable protection, all-day comfort, and long-term reusability. From periods to incontinence, from infancy to adulthood, our leak-proof wear lets you live freely, confidently, and responsibly.
              </p>
              <div className="feature-highlight-buttons">
                <button className="btn btn-primary">Shop by category</button>
                <button className="btn btn-outline">View all Products</button>
              </div>
            </div>
          </motion.div>
          <div className="feature-pillars">
            <div className="pillar">
              <span>Leak-Proof by Design</span>
            </div>
            <div className="pillar-divider"></div>
            <div className="pillar">
              <span>Comfortable by Nature</span>
            </div>
            <div className="pillar-divider"></div>
            <div className="pillar">
              <span>Reusable by Choice</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROTECTION SECTION ===== */}
      <section className="protection-section section" ref={protectionRef}>
        <div className="container">
          <motion.h2
            className="section-title"
            initial="hidden"
            animate={protectionInView ? 'visible' : 'hidden'}
            variants={fadeUp}
          >
            Protection, Thoughtfully Designed for Every Need
          </motion.h2>
          <motion.div
            className="protection-grid"
            initial="hidden"
            animate={protectionInView ? 'visible' : 'hidden'}
            variants={stagger}
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div key={i} className="protection-item" variants={fadeUp}>
                <div className="image-placeholder small">/images/</div>
              </motion.div>
            ))}
          </motion.div>
          <p className="protection-caption">/Product Images /</p>
        </div>
      </section>

      {/* ===== WHY AMIE LIFE SECTION ===== */}
      <section className="why-amie-section section" ref={whyRef}>
        <div className="container">
          <motion.div
            className="why-amie-content"
            initial="hidden"
            animate={whyInView ? 'visible' : 'hidden'}
            variants={stagger}
          >
            <motion.div className="why-amie-text" variants={fadeUp}>
              <h2>Why AMIE LIFE ?</h2>
              <p className="why-amie-lead">
                Leaks Are a Part of Life. Worry Doesn't Have to Be.
              </p>
              <p>
                Leaks happen at every stage of life. What hasn't evolved enough is how we manage them.
              </p>
              <p>
                AMIE exists to change that.
              </p>
              <p>
                We design leak-proof wear that feels like everyday clothing, performs like engineered protection, and lasts far beyond single use. Our products are made for people who want comfort without compromise, confidence without bulk, and care without waste.
              </p>
              <p>
                Whether it's your first period, daily bladder leaks, overnight protection, or baby care, AMIE is built for real bodies, real movement, and real life.
              </p>
            </motion.div>
            <motion.div className="why-amie-image" variants={fadeUp}>
              <div className="image-placeholder tall">/Images/</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== PRODUCTS SECTION ===== */}
      <section className="products-section section" ref={productsRef}>
        <div className="container">
          <motion.h2
            className="section-title"
            initial="hidden"
            animate={productsInView ? 'visible' : 'hidden'}
            variants={fadeUp}
          >
            Tried. Trusted. Designed to Perform
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial="hidden"
            animate={productsInView ? 'visible' : 'hidden'}
            variants={fadeUp}
          >
            Explore our most loved and newly launched essentials, crafted for repeat use and everyday confidence.
          </motion.p>
          <motion.div
            className="products-grid"
            initial="hidden"
            animate={productsInView ? 'visible' : 'hidden'}
            variants={stagger}
          >
            {productCategories.map((product, index) => (
              <motion.div key={index} className="product-category-card" variants={fadeUp}>
                <div className="image-placeholder product-img"></div>
                <p className="product-category-name">{product.name}</p>
              </motion.div>
            ))}
          </motion.div>
          <p className="products-note">
            Each product is thoughtfully designed to support movement, rest, and everything in between.
          </p>
        </div>
      </section>

      {/* ===== SCIENCE SECTION ===== */}
      <section className="science-section section" ref={scienceRef}>
        <div className="container">
          <motion.div
            className="science-content"
            initial="hidden"
            animate={scienceInView ? 'visible' : 'hidden'}
            variants={stagger}
          >
            <motion.div className="science-text" variants={fadeUp}>
              <h2>The Science Behind Staying Dry</h2>
              <p className="science-lead">Staying comfortable starts beneath the surface.</p>
              <ul className="science-list">
                <li>Advanced SAF technology for leak-proof protection</li>
                <li>One-side quick-absorption fabric for moisture control</li>
                <li>Fully bonded, seamless design for comfort and durability</li>
                <li>Supports skin hygiene while staying soft, breathable, and easy to wear</li>
              </ul>
              <p className="science-result">
                The result is protection that feels natural on the body, holds up to daily use, and continues to perform wash after wash.
              </p>
            </motion.div>
            <motion.div className="science-visual" variants={fadeUp}>
              <div className="image-placeholder tall">/Images/</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="testimonials-section section" ref={testimonialsRef}>
        <div className="container">
          <motion.h2
            className="section-title"
            initial="hidden"
            animate={testimonialsInView ? 'visible' : 'hidden'}
            variants={fadeUp}
          >
            Loved and Lived In
          </motion.h2>
          <motion.div
            className="testimonials-grid"
            initial="hidden"
            animate={testimonialsInView ? 'visible' : 'hidden'}
            variants={stagger}
          >
            {testimonials.map((t, index) => (
              <motion.div key={index} className="testimonial-card" variants={fadeUp}>
                <div className="testimonial-image-area"></div>
                <p className="testimonial-text">"{t.quote}" — {t.author}</p>
              </motion.div>
            ))}
          </motion.div>
          <p className="testimonials-tagline">Real people. Real routines. Real trust.</p>
        </div>
      </section>

      {/* ===== SUSTAINABILITY SECTION ===== */}
      <section className="sustainability-section section" ref={sustainRef}>
        <div className="container">
          <motion.div
            className="sustainability-content"
            initial="hidden"
            animate={sustainInView ? 'visible' : 'hidden'}
            variants={stagger}
          >
            <motion.div className="sustainability-text" variants={fadeUp}>
              <h2>One Reusable Choice. Years of Impact.</h2>
              <p>
                Disposable pads and diapers can take up to 800 years to decompose.
              </p>
              <p>
                AMIE products are designed for hundreds of uses, drastically reducing waste, cost, and environmental burden.
              </p>
              <p>
                By choosing reusable leak-proof wear, you reduce landfill waste, save money over time, and support a circular approach to personal hygiene.
              </p>
              <p className="sustainability-tagline">Better for you. Better for the planet.</p>
            </motion.div>
            <motion.div className="sustainability-image" variants={fadeUp}>
              <div className="image-placeholder tall">/Images/</div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
