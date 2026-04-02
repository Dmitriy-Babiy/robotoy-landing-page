import { motion } from 'motion/react'
import './Courses.scss'

const courses = [
  {
    emoji: '🔧',
    title: 'Little Engineers',
    age: '6–8 years',
    text: 'Introduction to mechanics and simple circuits. Kids build their first moving robots using snap-fit parts.',
    price: '$120',
    color: '#00d4ff',
    bg: 'linear-gradient(135deg, rgba(0,212,255,0.1), rgba(0,100,200,0.2))',
    tagBg: 'rgba(0, 212, 255, 0.1)',
    glowColor: '#00d4ff',
  },
  {
    emoji: '⚡',
    title: 'Code & Create',
    age: '9–12 years',
    text: 'Block-based programming meets real hardware. Students program robots to solve mazes, follow lines, and compete.',
    price: '$160',
    color: '#7b2ff7',
    bg: 'linear-gradient(135deg, rgba(123,47,247,0.1), rgba(80,20,180,0.2))',
    tagBg: 'rgba(123, 47, 247, 0.15)',
    glowColor: '#7b2ff7',
  },
  {
    emoji: '🚀',
    title: 'AI Robotics Lab',
    age: '13–16 years',
    text: 'Python, computer vision, and machine learning. Build autonomous robots that see, think, and adapt in real time.',
    price: '$200',
    color: '#ffaa00',
    bg: 'linear-gradient(135deg, rgba(255,170,0,0.1), rgba(200,100,0,0.2))',
    tagBg: 'rgba(255, 170, 0, 0.15)',
    glowColor: '#ffaa00',
  },
]

export default function Courses() {
  return (
    <section className="courses" id="courses">
      <div className="courses__container">
        <motion.p
          className="section-label section-label--purple"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Our Programs
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Choose Your Path
        </motion.h2>
        <div className="courses__grid">
          {courses.map((c, i) => (
            <motion.div
              key={c.title}
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
                  {c.age}
                </span>
                <h3 className="courses__card-title">{c.title}</h3>
                <p className="courses__card-text">{c.text}</p>
                <div className="courses__card-meta">
                  <span className="courses__price">
                    {c.price} <small>/month</small>
                  </span>
                  <motion.a
                    href="#contact"
                    className="courses__enroll-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Enroll
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
