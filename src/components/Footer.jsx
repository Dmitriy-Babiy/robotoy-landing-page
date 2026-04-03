import { useLang } from '../context/LanguageContext'
import './Footer.scss'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <div className="footer__logo">
            Robo<span>toy</span>
          </div>
          <p className="footer__brand-text">{t('footer.brand')}</p>
        </div>
        <div className="footer__column">
          <h4 className="footer__column-title">{t('footer.programs')}</h4>
          <a href="#" className="footer__link">{t('courses.1.title')}</a>
          <a href="#" className="footer__link">{t('courses.2.title')}</a>
          <a href="#" className="footer__link">{t('courses.3.title')}</a>
          <a href="#" className="footer__link">{t('footer.summerCamps')}</a>
        </div>
        <div className="footer__column">
          <h4 className="footer__column-title">{t('footer.company')}</h4>
          <a href="#" className="footer__link">{t('footer.aboutUs')}</a>
          <a href="#" className="footer__link">{t('footer.careers')}</a>
          <a href="#" className="footer__link">{t('footer.blog')}</a>
          <a href="#" className="footer__link">{t('footer.press')}</a>
        </div>
        <div className="footer__column">
          <h4 className="footer__column-title">{t('footer.contact')}</h4>
          <a href="mailto:hello@robotoy.com" className="footer__link">hello@robotoy.com</a>
          <a href="tel:+15551234567" className="footer__link">+1 (555) 123-4567</a>
          <a href="#" className="footer__link" aria-label="Instagram">Instagram</a>
          <a href="#" className="footer__link" aria-label="YouTube">YouTube</a>
        </div>
      </div>
      <div className="footer__bottom">
        <span>{t('footer.copyright')}</span>
        <span>{t('footer.privacy')} &middot; {t('footer.terms')}</span>
      </div>
    </footer>
  )
}
