import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaInstagram } from 'react-icons/fa'
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
            {/* Logo & Tagline */}
            <div className="footer-column footer-brand-col">
              <Link to="/" className="footer-logo">
                <svg width="35" height="35" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" fill="#F5F1E8" />
                  <path d="M20 8L25 18H15L20 8Z" fill="#2B1B3D" />
                  <circle cx="20" cy="25" r="5" fill="#2B1B3D" />
                </svg>
                <span>amie</span>
              </Link>
              <p className="footer-tagline">
                Comfort. Confidence. Conscious living.
              </p>
            </div>

            {/* Links */}
            <div className="footer-column footer-links-col">
              <ul className="footer-links">
                <li><Link to="/faqs">FAQs</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms & Conditions</Link></li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="footer-column footer-social-col">
              <h4>Follow us</h4>
              <div className="social-links">
                <motion.a
                  href="https://www.instagram.com/amie_yourdaysecured"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaInstagram />
                </motion.a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="footer-column footer-contact-col">
              <h4>Contact</h4>
              <div className="contact-info">
                <a href="mailto:premalatha@novcor.in" className="contact-link">
                  <span className="contact-label">Email:</span>
                  <span>premalatha@novcor.in</span>
                </a>
                <a href="tel:+918072590967" className="contact-link">
                  <span className="contact-label">Phone:</span>
                  <span>+91 8072590967</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>Comfort. Confidence. Conscious living.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
