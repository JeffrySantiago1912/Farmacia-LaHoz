import { useState, useEffect } from 'react'
import './Navbar.css'

const WHATSAPP_URL = 'https://wa.me/18095563832?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20Farmacia%20Ens.%20La%20Hoz.'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#horarios', label: 'Horarios' },
    { href: '#testimonios', label: 'Testimonios' },
    { href: '#ubicacion', label: 'Ubicación' },
  ]

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <a href="#inicio" className="navbar__logo">
          <div className="navbar__logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="white" fillOpacity="0.15"/>
              <rect x="13" y="5" width="6" height="22" rx="3" fill="white"/>
              <rect x="5" y="13" width="22" height="6" rx="3" fill="white"/>
            </svg>
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">La Hoz</span>
            <span className="navbar__logo-subtitle">Farmacia Ens.</span>
          </div>
        </a>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link" onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}

        </ul>



        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {menuOpen && <div className="navbar__overlay" onClick={() => setMenuOpen(false)} />}
    </nav>
  )
}
