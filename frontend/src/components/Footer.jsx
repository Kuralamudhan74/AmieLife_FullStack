import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            {/* Newsletter Section */}
            <motion.div
              className="footer-newsletter"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3>Comfort. Confidence. Conscious living.</h3>
              <p>
                Get product updates, early launches, care tips, and insights on
                sustainable hygiene delivered straight to your inbox.
              </p>
              <form className="newsletter-form">
                <div className="input-wrapper">
                  <HiMail className="input-icon" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="newsletter-input"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="btn btn-primary subscribe-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Logo & Social */}
            <motion.div
              className="footer-column"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link to="/" className="footer-logo">
                <svg width="35" height="35" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" fill="#F5F1E8"/>
                  <path d="M20 8L25 18H15L20 8Z" fill="#2B1B3D"/>
                  <circle cx="20" cy="25" r="5" fill="#2B1B3D"/>
                </svg>
                <span>amie</span>
              </Link>
              <p className="footer-tagline">
                Comfort. Confidence. Conscious living.
              </p>
              <div className="social-links">
                <motion.a
                  href="#"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaFacebookF />
                </motion.a>
                <motion.a
                  href="#"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaInstagram />
                </motion.a>
                <motion.a
                  href="#"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaTwitter />
                </motion.a>
                <motion.a
                  href="#"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedinIn />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="footer-column"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/support">Support</Link></li>
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div
              className="footer-column"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4>Support</h4>
              <ul className="footer-links">
                <li><Link to="/faqs">FAQs</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms & Conditions</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {currentYear} AMIE LIFE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
