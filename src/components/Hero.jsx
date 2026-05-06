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
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hero__btn hero__btn--primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Hacer Pedido por WhatsApp
            </a>
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

      <div className="hero__scroll-indicator">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel"></div>
        </div>
        <span>Desliza para explorar</span>
      </div>
    </section>
  )
}
