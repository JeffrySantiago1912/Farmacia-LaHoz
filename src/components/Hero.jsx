import { useEffect, useRef } from 'react'
import './Hero.css'

const WHATSAPP_URL = 'https://wa.me/18095563832?text=Hola%2C%20me%20gustar%C3%ADa%20hacer%20un%20pedido%20o%20consultar%20sobre%20medicamentos.'
const WHATSAPP_INFO = 'https://wa.me/18095563832?text=Hola%2C%20necesito%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20Farmacia%20Ens.%20La%20Hoz.'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    el.classList.add('hero--visible')
  }, [])

  return (
    <section id="inicio" className="hero" ref={heroRef}>
      <div className="hero__bg-shapes">
        <div className="hero__shape hero__shape--1"></div>
        <div className="hero__shape hero__shape--2"></div>
        <div className="hero__shape hero__shape--3"></div>
      </div>

      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            Abierto las 24 horas • 7 días a la semana
          </div>

          <h1 className="hero__title">
            Tu salud es
            <span className="hero__title-highlight"> nuestra</span>
            <br />
            prioridad
          </h1>

          <p className="hero__description">
            En <strong>Farmacia Ens. La Hoz</strong> encontrarás todo lo que necesitas para tu bienestar.
            Medicamentos, cuidado personal, inyectables y mucho más en La Romana, República Dominicana.
          </p>

          <div className="hero__actions">

            <a href={WHATSAPP_INFO} target="_blank" rel="noopener noreferrer" className="hero__btn hero__btn--secondary">
              Más información
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">24/7</span>
              <span className="hero__stat-label">Siempre abierto</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">+500</span>
              <span className="hero__stat-label">Productos</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">★ 5.0</span>
              <span className="hero__stat-label">Calificación</span>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}
