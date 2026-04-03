import { motion } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import './WhyUs.scss'

const STEP_KEYS = [
  { key: '1', num: '01', color: '#00d4ff', bg: 'rgba(0, 212, 255, 0.1)', border: 'rgba(0, 212, 255, 0.2)' },
  { key: '2', num: '02', color: '#7b2ff7', bg: 'rgba(123, 47, 247, 0.15)', border: 'rgba(123, 47, 247, 0.3)' },
  { key: '3', num: '03', color: '#ffaa00', bg: 'rgba(255, 170, 0, 0.15)', border: 'rgba(255, 170, 0, 0.3)' },
  { key: '4', num: '04', color: '#00d4ff', bg: 'rgba(0, 212, 255, 0.1)', border: 'rgba(0, 212, 255, 0.2)' },
]

export default function WhyUs() {
  const { t } = useLang()

  return (
    <section className="whyus" id="why-us">
      <div className="whyus__container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {t('whyus.label')}
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('whyus.title')}
        </motion.h2>
        <div className="whyus__layout">
          <div className="whyus__left">
            {STEP_KEYS.map((s, i) => (
              <motion.div
                key={s.num}
                className="whyus__step"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div
                  className="whyus__step-num"
                  style={{ background: s.bg, borderColor: s.border, color: s.color }}
                >
                  {s.num}
                </div>
                <div className="whyus__step-content">
                  <h3>{t(`whyus.${s.key}.title`)}</h3>
                  <p>{t(`whyus.${s.key}.text`)}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="whyus__right"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="whyus__circle-graphic">
              <div className="whyus__spin-ring" />
              <div className="whyus__spin-ring whyus__spin-ring--2" />
              <div className="whyus__center-circle">
                <div className="whyus__center-text">
                  <strong>8+</strong>
                  <span>{t('whyus.years')}<br />{t('whyus.teaching')}</span>
                </div>
              </div>
              <motion.div
                className="whyus__floating-badge"
                style={{ top: -10, right: 30 }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'mirror',
                  ease: 'easeInOut',
                }}
              >
                <span className="whyus__badge-emoji">🏅</span> {t('whyus.awards')}
              </motion.div>
              <motion.div
                className="whyus__floating-badge"
                style={{ bottom: 20, left: -20 }}
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'mirror',
                  ease: 'easeInOut',
                }}
              >
                <span className="whyus__badge-emoji">🌍</span> {t('whyus.locations')}
              </motion.div>
              <motion.div
                className="whyus__floating-badge"
                style={{ bottom: -10, right: -10 }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'mirror',
                  ease: 'easeInOut',
                }}
              >
                <span className="whyus__badge-emoji">⭐</span> {t('whyus.rating')}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
