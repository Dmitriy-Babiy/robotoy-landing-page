import { motion } from 'motion/react'
import './CTA.scss'

export default function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="cta__glow cta__glow--left" />
      <div className="cta__glow cta__glow--right" />
      <motion.div
        className="cta__card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="cta__title">
          Ready to Build the <span>Future</span>?
        </h2>
        <p className="cta__subtitle">
          Book a free trial lesson and see how your child lights up when their
          first robot comes alive. No commitment required.
        </p>
        <form className="cta__form" onSubmit={(e) => e.preventDefault()}>
          <div className="cta__fields">
            <input
              type="text"
              className="cta__input"
              placeholder="Your name"
              required
            />
            <input
              type="email"
              className="cta__input"
              placeholder="Email address"
              required
            />
            <input
              type="tel"
              className="cta__input"
              placeholder="Phone number"
              required
            />
          </div>
          <motion.button
            type="submit"
            className="cta__submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Get Free Trial
          </motion.button>
        </form>
        <p className="cta__note">Free trial lesson for new students. Cancel anytime.</p>
      </motion.div>
    </section>
  )
}
