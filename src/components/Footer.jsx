import './Footer.css'

const WHATSAPP_URL = 'https://wa.me/18095563832?text=Hola%2C%20quisiera%20hacer%20una%20consulta.'

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#horarios', label: 'Horarios' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#ubicacion', label: 'Ubicación' },
]

const services = [
  'Medicamentos',
  'Inyectables',
  'Cuidado Personal',
  'Productos de Bebé',
  'Toma de Presión',
  'Vitaminas y Suplementos',
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__container">
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-icon">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <rect width="36" height="36" rx="10" fill="rgba(255,255,255,0.1)"/>
                  <rect x="15" y="6" width="6" height="24" rx="3" fill="white"/>
                  <rect x="6" y="15" width="24" height="6" rx="3" fill="white"/>
                </svg>
              </div>
              <div>
                <p className="footer__logo-name">La Hoz</p>
                <p className="footer__logo-sub">Farmacia Ens.</p>
              </div>
            </div>
            <p className="footer__tagline">
              Tu farmacia de confianza en La Romana. Comprometidos con tu salud y bienestar las 24 horas del día.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="footer__wa-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              (809) 556-3832
            </a>
          </div>

          <div className="footer__col">
            <h4>Navegación</h4>
            <ul>
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Servicios</h4>
            <ul>
              {services.map(s => (
                <li key={s}>
                  <a href="#servicios">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contacto</h4>
            <div className="footer__contact">
              <div className="footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
                <span>La Romana, República Dominicana</span>
              </div>
              <div className="footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12a19.79 19.79 0 01-3.07-8.67A2 2 0 013.6 1.27h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.38a16 16 0 006.07 6.07l.98-.98a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                <span>(809) 556-3832</span>
              </div>
              <div className="footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>Abierto 24/7</span>
              </div>
            </div>

            <div className="footer__status">
              <span className="footer__status-dot"></span>
              <span>Abierto ahora mismo</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-container">
          <p className="footer__copy">
            © {new Date().getFullYear()} Farmacia Ens. La Hoz. Todos los derechos reservados.
          </p>
          <p className="footer__dev">
            Desarrollado por{' '}
            <a href="https://jeffrysantiago1912.github.io/AbbaTech/" target="_blank" rel="noopener noreferrer">
              AbbaTech
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
