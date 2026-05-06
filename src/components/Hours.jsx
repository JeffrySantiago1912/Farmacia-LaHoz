import { useEffect, useRef } from 'react'
import './Hours.css'

const WHATSAPP_URL = 'https://wa.me/18095563832?text=Hola%2C%20necesito%20asistencia%20de%20emergencia.'

export default function Hours() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.fade-in').forEach((el, i) => {
            setTimeout(() => el.classList.add('fade-in--visible'), i * 80)
          })
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="horarios" className="hours" ref={sectionRef}>
      <div className="hours__container">
        <div className="hours__left">
          <div className="fade-in">
            <div className="section-badge section-badge--light">Horarios de Atención</div>
          </div>
          <h2 className="section-title hours__title fade-in">
            Siempre aquí<br />
            <span className="text-white-green">cuando nos necesitas</span>
          </h2>
          <p className="hours__desc fade-in">
            Tu salud no tiene horario. Por eso estamos disponibles las <strong>24 horas del día,
            los 7 días de la semana</strong>, incluyendo feriados.
          </p>

          <div className="hours__big-badge fade-in">
            <div className="hours__big-badge-icon">🌙</div>
            <div>
              <p className="hours__big-badge-title">Abierto ahora mismo</p>
              <p className="hours__big-badge-sub">Incluyendo noches y feriados</p>
            </div>
          </div>

          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hours__emergency fade-in">
            <div className="hours__emergency-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div>
              <p className="hours__emergency-title">¿Emergencia nocturna?</p>
              <p className="hours__emergency-sub">Escríbenos por WhatsApp ahora</p>
            </div>
            <svg className="hours__emergency-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        <div className="hours__right fade-in">
          <div className="hours__schedule">
            <div className="hours__schedule-header">
              <div className="hours__schedule-dot"></div>
              <span>Disponibilidad</span>
            </div>
            <div className="hours__schedule-summary">
              <p className="hours__schedule-main">Abiertos 24/7</p>
              <p className="hours__schedule-sub">Atendemos todos los días, incluyendo feriados y madrugadas.</p>
              <div className="hours__schedule-status">
                <span className="hours__open-dot"></span>
                <span>Abierto ahora mismo</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
