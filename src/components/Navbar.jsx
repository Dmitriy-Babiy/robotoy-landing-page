import { motion } from 'motion/react'
import ThemeToggle from './ThemeToggle'
import './Navbar.scss'

export default function Navbar() {
  return (
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
        <a href="#about" className="navbar__link">About</a>
        <a href="#courses" className="navbar__link">Courses</a>
        <a href="#why-us" className="navbar__link">Why Us</a>
        <a href="#contact" className="navbar__link">Contact</a>
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
    </motion.nav>
  )
}
