import { motion } from 'motion/react'
import './WhyUs.scss'

const steps = [
  {
    num: '01',
    title: 'Expert Instructors',
    text: 'Our teachers are engineers and programmers with real industry experience and a passion for teaching kids.',
    color: '#00d4ff',
    bg: 'rgba(0, 212, 255, 0.1)',
    border: 'rgba(0, 212, 255, 0.2)',
  },
  {
    num: '02',
    title: 'Modern Equipment',
    text: 'We use Arduino, Raspberry Pi, LEGO Mindstorms, and custom 3D-printed parts. No toy kits — real tools.',
    color: '#7b2ff7',
    bg: 'rgba(123, 47, 247, 0.15)',
    border: 'rgba(123, 47, 247, 0.3)',
  },
  {
    num: '03',
    title: 'Project-Based Learning',
    text: 'Every course ends with a showcase project. Students present their work to parents and peers.',
    color: '#ffaa00',
    bg: 'rgba(255, 170, 0, 0.15)',
    border: 'rgba(255, 170, 0, 0.3)',
  },
  {
    num: '04',
    title: 'Flexible Schedule',
    text: 'Weekday evenings and weekends. Online and in-person options available for every age group.',
    color: '#00d4ff',
    bg: 'rgba(0, 212, 255, 0.1)',
    border: 'rgba(0, 212, 255, 0.2)',
  },
]

export default function WhyUs() {
  return (
    <section className="whyus" id="why-us">
      <div className="whyus__container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Why Robotoy
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What Makes Us Different
        </motion.h2>
        <div className="whyus__layout">
          <div className="whyus__left">
            {steps.map((s, i) => (
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
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
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
                  <span>Years of<br />Teaching</span>
                </div>
              </div>
              <motion.div
                className="whyus__floating-badge"
                style={{ top: -10, right: 20 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="whyus__badge-emoji">🏅</span> 120+ Awards Won
              </motion.div>
              <motion.div
                className="whyus__floating-badge"
                style={{ bottom: 20, left: -20 }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <span className="whyus__badge-emoji">🌍</span> 15 Locations
              </motion.div>
              <motion.div
                className="whyus__floating-badge"
                style={{ bottom: -10, right: -10 }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                <span className="whyus__badge-emoji">⭐</span> 4.9 Rating
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
