import { motion } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import './Testimonials.scss'

const TESTIMONIAL_KEYS = [
  { key: '1', initials: 'SM', color: 'linear-gradient(135deg, #7b2ff7, #00d4ff)' },
  { key: '2', initials: 'DL', color: 'linear-gradient(135deg, #00d4ff, #00a86b)' },
  { key: '3', initials: 'EK', color: 'linear-gradient(135deg, #ffaa00, #ff6b00)' },
]

export default function Testimonials() {
  const { t, lang } = useLang()

  const initialsMap = {
    ru: { '1': 'АМ', '2': 'ДЛ', '3': 'ЕК' },
  }

  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <motion.p
          className="section-label section-label--purple"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {t('testimonials.label')}
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('testimonials.title')}
        </motion.h2>
        <div className="testimonials__grid">
          {TESTIMONIAL_KEYS.map((item, i) => (
            <motion.div
              key={item.key}
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
              <div className="testimonials__stars">★★★★★</div>
              <p className="testimonials__quote">
                {t(`testimonials.${item.key}.quote`)}
              </p>
              <div className="testimonials__author">
                <div className="testimonials__avatar" style={{ background: item.color }}>
                  {initialsMap[lang]?.[item.key] ?? item.initials}
                </div>
                <div className="testimonials__author-info">
                  <strong>{t(`testimonials.${item.key}.name`)}</strong>
                  <span>{t(`testimonials.${item.key}.role`)}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
