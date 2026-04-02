import './Footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <div className="footer__logo">
            Robo<span>toy</span>
          </div>
          <p className="footer__brand-text">
            Inspiring the next generation of engineers, programmers, and
            innovators through hands-on robotics education.
          </p>
        </div>
        <div className="footer__column">
          <h4 className="footer__column-title">Programs</h4>
          <a href="#" className="footer__link">Little Engineers</a>
          <a href="#" className="footer__link">Code & Create</a>
          <a href="#" className="footer__link">AI Robotics Lab</a>
          <a href="#" className="footer__link">Summer Camps</a>
        </div>
        <div className="footer__column">
          <h4 className="footer__column-title">Company</h4>
          <a href="#" className="footer__link">About Us</a>
          <a href="#" className="footer__link">Careers</a>
          <a href="#" className="footer__link">Blog</a>
          <a href="#" className="footer__link">Press</a>
        </div>
        <div className="footer__column">
          <h4 className="footer__column-title">Contact</h4>
          <a href="mailto:hello@robotoy.com" className="footer__link">hello@robotoy.com</a>
          <a href="tel:+15551234567" className="footer__link">+1 (555) 123-4567</a>
          <a href="#" className="footer__link" aria-label="Instagram">Instagram</a>
          <a href="#" className="footer__link" aria-label="YouTube">YouTube</a>
        </div>
      </div>
      <div className="footer__bottom">
        <span>&copy; 2026 Robotoy. All rights reserved.</span>
        <span>Privacy Policy &middot; Terms of Service</span>
      </div>
    </footer>
  )
}
