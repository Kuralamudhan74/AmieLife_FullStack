import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    // Validation functions
    const validatePhone = (phone) => {
        if (!phone) return true; // Phone is optional
        // Accept various phone formats: +91 XXXXX XXXXX, 10 digits, etc.
        const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
        return phoneRegex.test(phone.replace(/\s/g, ''));
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (formData.phone && !validatePhone(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number (at least 10 digits)';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Submit the form
            e.target.submit();
        }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
    };

    return (
        <div className="contact-page">
            {/* ===== HERO SECTION ===== */}
            <section className="contact-hero-section">
                <div className="container">
                    <motion.div
                        className="contact-hero-content"
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                    >
                        <h1 className="contact-title">Contact us</h1>
                        <p className="contact-subtitle">
                            Get in touch with us for any questions or inquiries about our products and services.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ===== CONTACT FORM & INFO SECTION ===== */}
            <section className="contact-content-section">
                <div className="container">
                    <div className="contact-wrapper">
                        {/* Contact Information */}
                        <motion.div
                            className="contact-info-column"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="contact-info-box">
                                <h3>Get in Touch</h3>
                                <div className="contact-details">
                                    <div className="detail-item">
                                        <h4>Email</h4>
                                        <a href="mailto:premalatha@novcor.in">premalatha@novcor.in</a>
                                    </div>
                                    <div className="detail-item">
                                        <h4>Phone</h4>
                                        <a href="tel:+918072590967">+91 8072590967</a>
                                    </div>
                                    <div className="detail-item">
                                        <h4>Follow Us</h4>
                                        <a
                                            href="https://www.instagram.com/amie_yourdaysecured"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Instagram: @amie_yourdaysecured
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            className="contact-form-column"
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <form className="contact-form" onSubmit={handleSubmit} noValidate>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={errors.name ? 'input-error' : ''}
                                    />
                                    {errors.name && <span className="error-message">{errors.name}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={errors.email ? 'input-error' : ''}
                                    />
                                    {errors.email && <span className="error-message">{errors.email}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="+91 XXXXX XXXXX"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={errors.phone ? 'input-error' : ''}
                                    />
                                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        placeholder="What is this about?"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={errors.subject ? 'input-error' : ''}
                                    />
                                    {errors.subject && <span className="error-message">{errors.subject}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Please share your message..."
                                        rows="6"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={errors.message ? 'input-error' : ''}
                                    ></textarea>
                                    {errors.message && <span className="error-message">{errors.message}</span>}
                                </div>

                                <motion.button
                                    type="submit"
                                    className="btn btn-primary submit-btn"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Send Message
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== CTA SECTION ===== */}
            <section className="contact-cta-section">
                <div className="container">
                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2>We Look Forward to Hearing From You</h2>
                        <p>
                            Whether you have a question about our products, need support, or just want to say hello,
                            we're here to help. Reach out to us today!
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
