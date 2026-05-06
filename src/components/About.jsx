import { useEffect, useRef } from 'react'
import './About.css'

const WHATSAPP_URL = 'https://wa.me/18095563832?text=Hola%2C%20quisiera%20conocer%20m%C3%A1s%20sobre%20Farmacia%20Ens.%20La%20Hoz.'

const values = [
  { icon: '🏆', title: 'Calidad Garantizada', desc: 'Todos nuestros productos son de marcas certificadas y de confianza.' },
  { icon: '❤️', title: 'Atención Personalizada', desc: 'Nuestro equipo te atiende con calidez y profesionalismo en cada visita.' },
  { icon: '⚡', title: 'Respuesta Rápida', desc: 'Atendemos tu consulta por WhatsApp en minutos, las 24 horas del día.' },
  { icon: '🛡️', title: 'Precios Accesibles', desc: 'Ofrecemos los mejores precios para que tu salud nunca sea un lujo.' },
]

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.fade-in').forEach((el, i) => {
            setTimeout(() => el.classList.add('fade-in--visible'), i * 150)
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
    <section id="nosotros" className="about" ref={sectionRef}>
      <div className="about__container">
        <div className="about__visual fade-in">
          <div className="about__big-card">
            <div className="about__big-card-bg"></div>
            <div className="about__big-card-content">
              <div className="about__cross">
                <div className="about__cross-v"></div>
                <div className="about__cross-h"></div>
              </div>
              <h3>Farmacia Ens.</h3>
              <p className="about__card-title">La Hoz</p>
              <div className="about__card-location">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
                La Romana, República Dominicana
              </div>
            </div>
          </div>

          <div className="about__mini-card about__mini-card--top fade-in">
            <span className="about__mini-icon">🏅</span>
            <div>
              <p className="about__mini-title">Más de 10 años</p>
              <p className="about__mini-sub">sirviendo a La Romana</p>
            </div>
          </div>

          <div className="about__mini-card about__mini-card--bottom fade-in">
            <span className="about__mini-icon">👨‍⚕️</span>
            <div>
              <p className="about__mini-title">Personal capacitado</p>
              <p className="about__mini-sub">farmacéuticos certificados</p>
            </div>
          </div>
        </div>

        <div className="about__content">
          <div className="fade-in">
            <div className="section-badge">Sobre Nosotros</div>
          </div>
          <h2 className="section-title fade-in">
            Comprometidos en brindarte<br/>
            <span className="text-green">el mejor servicio</span>
          </h2>
          <p className="about__text fade-in">
            Somos una farmacia de confianza en el corazón de La Romana. Nuestro compromiso es ofrecer
            atención de calidad, medicamentos accesibles y un servicio cálido que hace la diferencia
            en la salud de nuestra comunidad.
          </p>
          <p className="about__text fade-in">
            Con años de experiencia en el sector farmacéutico y un equipo altamente capacitado,
            nos enorgullece ser la farmacia preferida de miles de familias dominicanas.
          </p>

          <div className="about__values fade-in">
            {values.map(v => (
              <div key={v.title} className="about__value">
                <span className="about__value-icon">{v.icon}</span>
                <div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="about__cta fade-in">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Contáctanos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
