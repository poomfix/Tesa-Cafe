import React from 'react'
import './tesa-card.css'

const Header = () => {
  return (
    <header className="site-header" role="banner">
      <div className="header-inner">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true">☕</div>
          <div className="brand-text">
            <div className="brand-name">Tesa Cafe</div>
            <div className="tagline">Minimal pastel — handcrafted coffee</div>
          </div>
        </div>

        <nav className="header-nav" aria-label="Main navigation">
          <a className="nav-link" href="#">Menu</a>
          <a className="nav-link" href="#">About</a>
          <a className="nav-link" href="#">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header