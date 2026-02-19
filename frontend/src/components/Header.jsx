import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import './Header.css'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'SHOP', path: '/shop' },
    { name: 'PRODUCT', path: '/product' },
    { name: 'SUPPORT', path: '/support' },
    { name: 'ABOUT US', path: '/about' },
  ]

  return (
    <motion.header
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="18" fill="#2B1B3D" />
                <path d="M20 8L25 18H15L20 8Z" fill="#F5F1E8" />
                <circle cx="20" cy="25" r="5" fill="#F5F1E8" />
              </svg>
              <span className="logo-text">amie</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    className="active-indicator"
                    layoutId="activeIndicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <Link to="/contact">
            <motion.button
              className="btn btn-primary sign-up-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="mobile-nav">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <motion.button
                  className="btn btn-primary mobile-sign-up"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Contact
                </motion.button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
