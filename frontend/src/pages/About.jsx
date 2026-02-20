import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './About.css';

const About = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const whoRef = useRef(null);
  const whoInView = useInView(whoRef, { once: true });

  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true });

  const trustRef = useRef(null);
  const trustInView = useInView(trustRef, { once: true });

  const techRef = useRef(null);
  const techInView = useInView(techRef, { once: true });

  const fitRef = useRef(null);
  const fitInView = useInView(fitRef, { once: true });

  const purposeRef = useRef(null);
  const purposeInView = useInView(purposeRef, { once: true });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="about-page">
      {/* ===== HERO SECTION ===== */}
      <section className="about-hero" ref={heroRef}>
        <div className="about-hero-content">
          <motion.p
            className="about-hero-join"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            /stock videos/
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Join the AMIE Life
          </motion.h1>
          <div className="about-hero-image-placeholder">
            <img src="/images/Join the AMIE Life About Us.jpg" alt="Join the AMIE Life" />
          </div>
          <motion.h2
            className="about-hero-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Leak-Proof Care for Every Stage of Life
          </motion.h2>
        </div>
      </section>

      {/* ===== WHO ARE WE SECTION ===== */}
      <section className="who-are-we-section section" ref={whoRef}>
        <div className="container">
          <motion.div
            className="who-are-we-content"
            initial="hidden"
            animate={whoInView ? 'visible' : 'hidden'}
            variants={stagger}
          >
            <motion.div className="who-are-we-text" variants={fadeUp}>
              <h3>WHO ARE WE?</h3>
              <p>
                AMIE LIFE is a technology-driven, reusable, leak-proof care brand built for people at every stage of life.
              </p>
              <p>
                We combine advanced absorbent textile technology with thoughtful design to create products that feel like everyday wear but perform like engineered protection. Our solutions are breathable, skin-friendly, durable, and built to reduce dependence on disposables while restoring confidence in everyday moments.
              </p>
            </motion.div>
            <motion.div className="who-are-we-image" variants={fadeUp}>
              <img src="/images/Who are we about us.jpg" alt="Who Are We" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== WHAT'S OUR STORY SECTION ===== */}
      <section className="our-story-section section" ref={storyRef}>
        <div className="container">
          <motion.h2
            className="section-title"
            initial="hidden"
            animate={storyInView ? 'visible' : 'hidden'}
            variants={fadeUp}
          >
            WHAT'S OUR STORY?
          </motion.h2>
          <motion.div
            className="our-story-content"
            initial="hidden"
            animate={storyInView ? 'visible' : 'hidden'}
            variants={stagger}
          >
            <motion.div className="story-text" variants={fadeUp}>
              <p className="lead">AMIE LIFE began with listening.</p>
              <p>We heard parents worried about diaper rash and waste.</p>
              <p>We heard teenagers navigating their first periods.</p>
              <p>We heard adults dealing with light leaks during work, travel, and workouts.</p>
              <p>We heard older individuals seeking dignity and discretion in daily protection.</p>
              <p className="story-highlight">Across all these voices, one truth stood out.</p>
              <p>Leaks weren't just a functional problem – they were a confidence problem.</p>
              <p className="story-highlight">That insight shaped AMIE LIFE.</p>
              <p>We built leak-proof wear that blends into everyday life, supports movement, and protects quietly, so people can focus on living, not worrying.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== WHY TRUST US SECTION ===== */}
      <section className="why-trust-section section" ref={trustRef}>
        <div className="container">
          <motion.div
            className="why-trust-content"
            initial="hidden"
            animate={trustInView ? 'visible' : 'hidden'}
            variants={stagger}
          >
            <motion.div className="why-trust-text" variants={fadeUp}>
              <h3>WHY TRUST US?</h3>
              <p className="trust-lead">Because leaks are universal. Worry shouldn't be.</p>
              <p>AMIE LIFE exists to evolve how the world manages everyday leaks by delivering:</p>
              <ul className="trust-list">
                <li>Comfortable, non-bulky protection</li>
                <li>Reliable leak-proof performance</li>
                <li>Skin-safe, breathable fabrics</li>
                <li>Long-lasting reusable design</li>
                <li>Lower environmental impact</li>
              </ul>
            </motion.div>
            <motion.div className="why-trust-image" variants={fadeUp}>
              <img src="/images/Why trust us About us.jpg" alt="Why Trust Us" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== TECHNOLOGY AT THE CORE SECTION ===== */}
      <section className="technology-core-section section" ref={techRef}>
        <div className="container">
          <motion.div
            className="technology-core-content"
            initial="hidden"
            animate={techInView ? 'visible' : 'hidden'}
            variants={stagger}
          >
            <motion.div className="tech-core-visual" variants={fadeUp}>
              <img src="/images/Technology at the core about us.jpg" alt="Technology at the Core" />
            </motion.div>
            <motion.div className="tech-core-text" variants={fadeUp}>
              <h3>TECHNOLOGY AT THE CORE</h3>
              <p>
                Powered by NOVCOR Medical Textiles, AMIE LIFE is built on advanced absorbent textile engineering.
              </p>
              <p>Our products use:</p>
              <ul className="tech-list">
                <li>Bonded and seamless absorbent layers</li>
                <li>One way moisture absorption fabrics</li>
                <li>Medical-grade antimicrobial protection</li>
                <li>Breathable, soft materials</li>
                <li>Wash-durable construction</li>
              </ul>
              <p>
                This ensures high performance, comfort, and reliability for babies, menstruators, and adults managing bladder sensitivity.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== WE'RE FIT FOR REAL LIFE SECTION ===== */}
      <section className="fit-for-life-section section" ref={fitRef}>
        <div className="container">
          <motion.div
            className="fit-for-life-content"
            initial="hidden"
            animate={fitInView ? 'visible' : 'hidden'}
            variants={stagger}
          >
            <motion.div className="fit-for-life-text" variants={fadeUp}>
              <h3>WE'RE FIT FOR REAL LIFE</h3>
              <p>AMIE LIFE is designed for everyday moments, including:</p>
              <div className="life-scenarios">
                <div className="scenario">
                  <h4>Sneezing or sudden movement</h4>
                  <p>Reliable protection so you can move freely without anxiety.</p>
                </div>
                <div className="scenario">
                  <h4>Workouts and active days</h4>
                  <p>Breathable, flexible, and secure during movement.</p>
                </div>
                <div className="scenario">
                  <h4>Long work or travel hours</h4>
                  <p>All-day comfort with dependable absorbency.</p>
                </div>
                <div className="scenario">
                  <h4>Sleep and overnight use</h4>
                  <p>Peaceful rest with leak-proof coverage.</p>
                </div>
                <div className="scenario">
                  <h4>Baby care and parenting</h4>
                  <p>Gentle, reusable, and rash-friendly diapering solutions.</p>
                </div>
              </div>
            </motion.div>
            <motion.div className="fit-for-life-image" variants={fadeUp}>
              <div className="image-placeholder tall">/image/n</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== VIDEO DIVIDER ===== */}
      <section className="video-divider-section">
        <div className="video-placeholder-bar">
          <span>/stock videos/</span>
        </div>
      </section>

      {/* ===== OUR PURPOSE SECTION ===== */}
      <section className="our-purpose-section section" ref={purposeRef}>
        <div className="container">
          <motion.div
            className="our-purpose-content"
            initial="hidden"
            animate={purposeInView ? 'visible' : 'hidden'}
            variants={stagger}
          >
            <motion.h2 className="section-title" variants={fadeUp}>
              OUR PURPOSE
            </motion.h2>
            <motion.p className="purpose-text" variants={fadeUp}>
              We are building a future where leak-proof care is comfortable, confident, and sustainable.
            </motion.p>
            <motion.p className="purpose-text" variants={fadeUp}>
              From first diaper to first period, from active adulthood to later years, AMIE LIFE designs next-generation reusable leak-proof wear that supports people through real, everyday life.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
