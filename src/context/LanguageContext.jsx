import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { translations } from '../i18n/translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('robotoy-lang')
    return saved || 'en'
  })

  useEffect(() => {
    localStorage.setItem('robotoy-lang', lang)
    document.documentElement.setAttribute('lang', lang)
  }, [lang])

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'ru' : 'en'))
  }, [])

  const t = useCallback(
    (key) => translations[lang]?.[key] ?? translations.en[key] ?? key,
    [lang]
  )

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLang must be used within LanguageProvider')
  return context
}
