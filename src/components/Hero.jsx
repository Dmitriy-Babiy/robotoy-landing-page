import { motion } from 'motion/react'
import './Hero.scss'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow hero__glow--blue" />
      <div className="hero__glow hero__glow--purple" />

      <div className="hero__content">
        <div className="hero__text">
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Enrolling for 2026
          </motion.div>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Build the <span>Future</span> with Robotics
          </motion.h1>

          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Robotoy is where kids aged 6–16 learn to design, build, and program
            real robots. From beginner circuits to AI-powered machines — we make
            STEM exciting.
          </motion.p>

          <motion.div
            className="hero__buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="#contact"
              className="btn btn--primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Learning
            </motion.a>
            <motion.a
              href="#courses"
              className="btn btn--secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Courses
            </motion.a>
          </motion.div>

          <motion.div
            className="hero__stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="hero__stat">
              <strong>2,500+</strong>
              <span>Students</span>
            </div>
            <div className="hero__stat">
              <strong>50+</strong>
              <span>Courses</span>
            </div>
            <div className="hero__stat">
              <strong>98%</strong>
              <span>Satisfaction</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="hero__robot-container">
            <motion.div
              className="hero__orbit hero__orbit--1"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <div className="hero__orbit-dot hero__orbit-dot--cyan" style={{ top: 0, left: '50%', marginLeft: -6 }} />
            </motion.div>
            <motion.div
              className="hero__orbit hero__orbit--2"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              <div className="hero__orbit-dot hero__orbit-dot--purple" style={{ bottom: 0, right: 0 }} />
              <div className="hero__orbit-dot hero__orbit-dot--cyan" style={{ top: '50%', left: 0, marginTop: -6 }} />
            </motion.div>

            <div className="hero__robot-svg">
              <svg width="200" height="220" viewBox="0 0 200 220" fill="none">
                <rect x="60" y="50" width="80" height="70" rx="16" fill="url(#headGrad)" stroke="rgba(0,212,255,0.4)" strokeWidth="2" />
                <circle cx="82" cy="80" r="10" fill="#0a0a0f" />
                <circle cx="82" cy="80" r="6" fill="#00d4ff" />
                <circle cx="118" cy="80" r="10" fill="#0a0a0f" />
                <circle cx="118" cy="80" r="6" fill="#7b2ff7" />
                <rect x="85" y="100" width="30" height="6" rx="3" fill="rgba(0,212,255,0.5)" />
                <rect x="8" y="32" width="16" height="16" rx="4" fill="#7b2ff7" opacity="0.6">
                  <animate attributeName="y" values="32;28;32" dur="3s" repeatCount="indefinite" />
                </rect>
                <rect x="176" y="46" width="12" height="12" rx="3" fill="#00d4ff" opacity="0.5">
                  <animate attributeName="y" values="46;42;46" dur="4s" repeatCount="indefinite" />
                </rect>
                <line x1="100" y1="30" x2="100" y2="50" stroke="rgba(0,212,255,0.4)" strokeWidth="2" />
                <circle cx="100" cy="26" r="6" fill="#00d4ff" opacity="0.7">
                  <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
                </circle>
                <rect x="55" y="130" width="90" height="60" rx="12" fill="url(#bodyGrad)" stroke="rgba(123,47,247,0.3)" strokeWidth="2" />
                <rect x="70" y="145" width="60" height="8" rx="4" fill="rgba(0,212,255,0.3)" />
                <rect x="70" y="160" width="40" height="6" rx="3" fill="rgba(123,47,247,0.3)" />
                <rect x="35" y="135" width="16" height="50" rx="8" fill="url(#armGrad)">
                  <animate attributeName="y" values="135;130;135" dur="2.5s" repeatCount="indefinite" />
                </rect>
                <rect x="149" y="135" width="16" height="50" rx="8" fill="url(#armGrad)">
                  <animate attributeName="y" values="135;140;135" dur="2.5s" repeatCount="indefinite" />
                </rect>
                <rect x="68" y="195" width="20" height="25" rx="6" fill="url(#legGrad)" />
                <rect x="112" y="195" width="20" height="25" rx="6" fill="url(#legGrad)" />
                <defs>
                  <linearGradient id="headGrad" x1="60" y1="50" x2="140" y2="120">
                    <stop stopColor="#1a1a2e" />
                    <stop offset="1" stopColor="#16213e" />
                  </linearGradient>
                  <linearGradient id="bodyGrad" x1="55" y1="130" x2="145" y2="190">
                    <stop stopColor="#16213e" />
                    <stop offset="1" stopColor="#1a1a2e" />
                  </linearGradient>
                  <linearGradient id="armGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor="#7b2ff7" stopOpacity="0.6" />
                    <stop offset="1" stopColor="#00d4ff" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="legGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor="#16213e" />
                    <stop offset="1" stopColor="#1a1a2e" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
