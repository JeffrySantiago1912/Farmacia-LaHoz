import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    el.classList.add('hero--visible')
  }, [])

  return (
    <section id="inicio" className="hero" ref={heroRef}>
      <div className="hero__bg-image" />
      <div className="hero__bg-overlay" />

      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            Farmacia Ens. La Hoz &middot; La Romana, RD
          </div>

          <h1 className="hero__title">
            Tu salud,<br />
            <span className="hero__title-highlight">nuestra</span> prioridad
          </h1>

          <p className="hero__description">
            Medicamentos, productos de cuidado personal y asesoría profesional.
            Abiertos <strong>las 24 horas</strong> para servirte en La Romana, República Dominicana.
          </p>

          <div className="hero__tags">
            <span className="hero__tag">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
              Medicamentos
            </span>
            <span className="hero__tag">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m18 2 4 4-14 14H4v-4Z"/><path d="m14.5 5.5 4 4"/>
              </svg>
              Inyectables
            </span>
            <span className="hero__tag">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/><rect width="13" height="8" x="9" y="14" rx="2"/><path d="M12 14v8M9 18h13"/>
              </svg>
              Delivery
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
