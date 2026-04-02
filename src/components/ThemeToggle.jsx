import { motion } from 'motion/react'
import { useTheme } from '../context/ThemeContext'
import './ThemeToggle.scss'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <motion.div
        className="theme-toggle__track"
        animate={{
          backgroundColor: isDark ? 'rgba(123, 47, 247, 0.3)' : 'rgba(0, 212, 255, 0.15)',
        }}
      >
        <motion.div
          className="theme-toggle__thumb"
          animate={{
            x: isDark ? 24 : 0,
            backgroundColor: isDark ? '#7b2ff7' : '#00d4ff',
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
        <span className="theme-toggle__icon theme-toggle__icon--sun">☀️</span>
        <span className="theme-toggle__icon theme-toggle__icon--moon">🌙</span>
      </motion.div>
    </motion.button>
  )
}
