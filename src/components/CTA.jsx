import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import './CTA.scss'

const INITIAL_FORM = { name: '', email: '', phone: '' }

export default function CTA() {
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { t } = useLang()

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }, [])

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      setIsSubmitting(true)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1200))

      setIsSubmitting(false)
      setIsSuccess(true)
      setFormData(INITIAL_FORM)

      setTimeout(() => setIsSuccess(false), 5000)
    },
    []
  )

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
          {t('cta.titleStart')}<span>{t('cta.titleHighlight')}</span>{t('cta.titleEnd')}
        </h2>
        <p className="cta__subtitle">
          {t('cta.subtitle')}
        </p>

        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success"
              className="cta__success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <div className="cta__success-icon">&#10003;</div>
              <h3 className="cta__success-title">{t('cta.successTitle')}</h3>
              <p className="cta__success-text">{t('cta.successText')}</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              className="cta__form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="cta__fields">
                <input
                  type="text"
                  name="name"
                  className="cta__input"
                  placeholder={t('cta.name')}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
                <input
                  type="email"
                  name="email"
                  className="cta__input"
                  placeholder={t('cta.email')}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
                <input
                  type="tel"
                  name="phone"
                  className="cta__input"
                  placeholder={t('cta.phone')}
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  autoComplete="tel"
                />
              </div>
              <motion.button
                type="submit"
                className="cta__submit"
                disabled={isSubmitting}
                whileHover={isSubmitting ? {} : { scale: 1.03 }}
                whileTap={isSubmitting ? {} : { scale: 0.97 }}
              >
                {isSubmitting ? t('cta.sending') : t('cta.submit')}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>

        <p className="cta__note">{t('cta.note')}</p>
      </motion.div>
    </section>
  )
}
