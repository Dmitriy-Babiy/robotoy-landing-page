import { motion } from "motion/react";
import "./Features.scss";

const features = [
  {
    icon: "🤖",
    title: "Hands-On Building",
    text: "Kids assemble real robots from scratch using professional kits, sensors, and motors. Learning by doing, not just watching.",
    bg: "rgba(123, 47, 247, 0.15)",
  },
  {
    icon: "💻",
    title: "Visual Programming",
    text: "From Scratch blocks to Python — we guide students through programming concepts at their own pace with fun challenges.",
    bg: "rgba(0, 212, 255, 0.15)",
  },
  {
    icon: "🏆",
    title: "Competition Ready",
    text: "Our students compete in national and international robotics championships. Many have won top prizes in WRO and FIRST Lego.",
    bg: "rgba(255, 170, 0, 0.15)",
  },
  {
    icon: "🧠",
    title: "AI & Machine Learning",
    text: "Advanced students explore computer vision, neural networks, and how to teach their robots to recognize and react.",
    bg: "rgba(0, 212, 255, 0.15)",
  },
  {
    icon: "👥",
    title: "Small Group Classes",
    text: "Maximum 8 students per group ensures personal attention. Every child gets help exactly when they need it.",
    bg: "rgba(123, 47, 247, 0.15)",
  },
  {
    icon: "🎓",
    title: "Certified Curriculum",
    text: "Our program is aligned with STEM education standards and provides certificates recognized by leading tech companies.",
    bg: "rgba(255, 170, 0, 0.15)",
  },
];

export default function Features() {
  return (
    <section className="features" id="about">
      <div className="features__container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          What We Offer
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Everything Kids Need to Thrive in Tech
        </motion.h2>
        <div className="features__grid">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="features__card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                opacity: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
                y: { duration: 0.15, ease: "easeOut" },
              }}
              whileHover={{ y: -8 }}
            >
              <div className="features__icon" style={{ background: f.bg }}>
                {f.icon}
              </div>
              <h3 className="features__card-title">{f.title}</h3>
              <p className="features__card-text">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
