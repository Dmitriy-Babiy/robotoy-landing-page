import { motion } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import './LangToggle.scss'

export default function LangToggle() {
  const { lang, toggleLang } = useLang()

  return (
    <motion.button
      className="lang-toggle"
      onClick={toggleLang}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={lang === 'en' ? 'Switch to Russian' : 'Switch to English'}
    >
      <span className={`lang-toggle__option ${lang === 'en' ? 'lang-toggle__option--active' : ''}`}>
        EN
      </span>
      <span className="lang-toggle__divider">/</span>
      <span className={`lang-toggle__option ${lang === 'ru' ? 'lang-toggle__option--active' : ''}`}>
        RU
      </span>
    </motion.button>
  )
}
