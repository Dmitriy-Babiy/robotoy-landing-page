import { motion } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import './Courses.scss'

const COURSE_KEYS = [
  {
    key: '1',
    emoji: '🔧',
    price: '$120',
    color: '#00d4ff',
    bg: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(0,100,200,0.35))',
    tagBg: 'rgba(0, 212, 255, 0.15)',
    glowColor: '#00d4ff',
  },
  {
    key: '2',
    emoji: '⚡',
    price: '$160',
    color: '#7b2ff7',
    bg: 'linear-gradient(135deg, rgba(123,47,247,0.2), rgba(80,20,180,0.35))',
    tagBg: 'rgba(123, 47, 247, 0.2)',
    glowColor: '#7b2ff7',
  },
  {
    key: '3',
    emoji: '🚀',
    price: '$200',
    color: '#ffaa00',
    bg: 'linear-gradient(135deg, rgba(255,170,0,0.2), rgba(200,100,0,0.35))',
    tagBg: 'rgba(255, 170, 0, 0.2)',
    glowColor: '#ffaa00',
  },
]

export default function Courses() {
  const { t } = useLang()

  return (
    <section className="courses" id="courses">
      <div className="courses__container">
        <motion.p
          className="section-label section-label--purple"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {t('courses.label')}
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('courses.title')}
        </motion.h2>
        <div className="courses__grid">
          {COURSE_KEYS.map((c, i) => (
            <motion.div
              key={c.key}
              className="courses__card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                opacity: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
                y: { duration: 0.15, ease: 'easeOut' },
              }}
              whileHover={{ y: -10 }}
            >
              <div className="courses__card-glow" style={{ background: `linear-gradient(90deg, transparent, ${c.glowColor}, transparent)`, backgroundSize: '200% 100%' }} />
              <div className="courses__card-image" style={{ background: c.bg }}>
                {c.emoji}
              </div>
              <div className="courses__card-body">
                <span className="courses__age-tag" style={{ background: c.tagBg, color: c.color }}>
                  {t(`courses.${c.key}.age`)}
                </span>
                <h3 className="courses__card-title">{t(`courses.${c.key}.title`)}</h3>
                <p className="courses__card-text">{t(`courses.${c.key}.text`)}</p>
                <div className="courses__card-meta">
                  <span className="courses__price">
                    {c.price} <small>{t('courses.month')}</small>
                  </span>
                  <motion.a
                    href="#contact"
                    className="courses__enroll-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t('courses.enroll')}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
