import { motion } from 'motion/react'
import './Testimonials.scss'

const testimonials = [
  {
    stars: 5,
    quote:
      'My son went from playing video games all day to building his own robots. Robotoy completely changed his relationship with technology.',
    name: 'Sarah M.',
    role: 'Parent of a 10-year-old',
    initials: 'SM',
    color: 'linear-gradient(135deg, #7b2ff7, #00d4ff)',
  },
  {
    stars: 5,
    quote:
      'The instructors are incredible. They explain complex concepts in ways that kids actually understand and get excited about.',
    name: 'David L.',
    role: 'Parent of twins, age 8',
    initials: 'DL',
    color: 'linear-gradient(135deg, #00d4ff, #00a86b)',
  },
  {
    stars: 5,
    quote:
      "My daughter won 2nd place at the regional robotics competition after just 6 months at Robotoy. Couldn't be prouder!",
    name: 'Elena K.',
    role: 'Parent of a 14-year-old',
    initials: 'EK',
    color: 'linear-gradient(135deg, #ffaa00, #ff6b00)',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <motion.p
          className="section-label section-label--purple"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Testimonials
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What Parents Say
        </motion.h2>
        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="testimonials__card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                opacity: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
                y: { duration: 0.15, ease: 'easeOut' },
              }}
              whileHover={{ y: -6 }}
            >
              <div className="testimonials__stars">
                {'★'.repeat(t.stars)}
              </div>
              <p className="testimonials__quote">{t.quote}</p>
              <div className="testimonials__author">
                <div className="testimonials__avatar" style={{ background: t.color }}>
                  {t.initials}
                </div>
                <div className="testimonials__author-info">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
