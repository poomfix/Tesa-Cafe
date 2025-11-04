import React from 'react'
import './tesa-card.css'

const Footer = () => {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-left">
          <div className="brand-small">
            <span className="brand-mark">☕</span>
            <span className="brand-name-small">Tesa Cafe</span>
          </div>
          <div className="muted">123 Coffee Lane · Open 8:00–18:00</div>
        </div>

        <div className="footer-right">
          <div className="muted">© {new Date().getFullYear()} Tesa Cafe</div>
          <div className="footer-links">
            <a className="muted" href="#">Privacy</a>
            <a className="muted" href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer