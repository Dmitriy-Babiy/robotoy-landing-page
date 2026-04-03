import { motion } from "motion/react";
import { useLang } from "../context/LanguageContext";
import "./Features.scss";

const FEATURE_KEYS = [
  { icon: "🤖", key: "1", bg: "rgba(123, 47, 247, 0.25)" },
  { icon: "💻", key: "2", bg: "rgba(0, 212, 255, 0.25)" },
  { icon: "🏆", key: "3", bg: "rgba(255, 170, 0, 0.25)" },
  { icon: "🧠", key: "4", bg: "rgba(0, 212, 255, 0.25)" },
  { icon: "👥", key: "5", bg: "rgba(123, 47, 247, 0.25)" },
  { icon: "🎓", key: "6", bg: "rgba(255, 170, 0, 0.25)" },
];

export default function Features() {
  const { t } = useLang();

  return (
    <section className="features" id="about">
      <div className="features__container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {t("features.label")}
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t("features.title")}
        </motion.h2>
        <div className="features__grid">
          {FEATURE_KEYS.map((f, i) => (
            <motion.div
              key={f.key}
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
              <h3 className="features__card-title">
                {t(`features.${f.key}.title`)}
              </h3>
              <p className="features__card-text">
                {t(`features.${f.key}.text`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
