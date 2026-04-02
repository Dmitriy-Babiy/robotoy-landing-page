import { useState, useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'motion/react'
import ThemeToggle from './ThemeToggle'
import './Navbar.scss'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#courses', label: 'Courses' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <>
      <motion.nav
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="navbar__logo">
          Robo<span>toy</span>
        </div>

        <div className="navbar__links">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className="navbar__link">
              {label}
            </a>
          ))}
          <ThemeToggle />
          <motion.a
            href="#contact"
            className="navbar__cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enroll Now
          </motion.a>
        </div>

        <div className="navbar__mobile-actions">
          <ThemeToggle />
          <button
            className={`navbar__burger ${isMenuOpen ? 'navbar__burger--active' : ''}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </motion.nav>

      {createPortal(
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mobile-menu__overlay" onClick={closeMenu} />
              <motion.div
                className="mobile-menu__content"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <button
                  className="mobile-menu__close"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <span />
                  <span />
                </button>
                {NAV_LINKS.map(({ href, label }, i) => (
                  <motion.a
                    key={href}
                    href={href}
                    className="mobile-menu__link"
                    onClick={closeMenu}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    {label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  className="mobile-menu__cta"
                  onClick={closeMenu}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + NAV_LINKS.length * 0.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enroll Now
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}
