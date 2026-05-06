import { useEffect, useRef } from 'react'
import './Services.css'

const WHATSAPP_BASE = 'https://wa.me/18095563832?text='

const services = [
  {
    icon: '💊',
    title: 'Medicamentos',
    description: 'Amplio inventario de medicamentos de marca y genéricos. Consulta disponibilidad al instante.',
    cta: 'Consultar disponibilidad',
    msg: 'Hola%2C%20quisiera%20consultar%20la%20disponibilidad%20de%20un%20medicamento.',
    color: '#E8F5E9',
    accent: '#1A9641',
  },
  {
    icon: '💉',
    title: 'Inyectables',
    description: 'Servicio de aplicación de inyectables con personal capacitado y equipos esterilizados.',
    cta: 'Solicitar servicio',
    msg: 'Hola%2C%20necesito%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20inyectables.',
    color: '#F0FAF2',
    accent: '#157534',
  },
  {
    icon: '🧴',
    title: 'Cuidado Personal',
    description: 'Productos de higiene, belleza y cuidado corporal de las mejores marcas disponibles.',
    cta: 'Ver productos',
    msg: 'Hola%2C%20me%20gustar%C3%ADa%20saber%20qu%C3%A9%20productos%20de%20cuidado%20personal%20tienen.',
    color: '#E8F5E9',
    accent: '#1A9641',
  },
  {
    icon: '👶',
    title: 'Productos de Bebé',
    description: 'Todo para el cuidado de tu bebé: pañales, cremas, fórmulas y suplementos infantiles.',
    cta: 'Consultar',
    msg: 'Hola%2C%20busco%20productos%20para%20beb%C3%A9.',
    color: '#F0FAF2',
    accent: '#157534',
  },
  {
    icon: '🩺',
    title: 'Toma de Presión',
    description: 'Control de presión arterial y glucosa. Monitoreo rápido y confiable sin cita previa.',
    cta: 'Más información',
    msg: 'Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20toma%20de%20presi%C3%B3n.',
    color: '#E8F5E9',
    accent: '#1A9641',
  },
  {
    icon: '🌿',
    title: 'Vitaminas y Suplementos',
    description: 'Vitaminas, minerales y suplementos naturales para mantener tu salud en óptimas condiciones.',
    cta: 'Ver catálogo',
    msg: 'Hola%2C%20me%20interesan%20las%20vitaminas%20y%20suplementos%20disponibles.',
    color: '#F0FAF2',
    accent: '#157534',
  },
]

function ServiceCard({ service, index }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('service-card--visible'), index * 100)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [index])

  return (
    <div className="service-card" ref={cardRef} style={{ '--card-color': service.color, '--card-accent': service.accent }}>
      <div className="service-card__icon-wrap">
        <span className="service-card__icon">{service.icon}</span>
      </div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__desc">{service.description}</p>
      <a
        href={`${WHATSAPP_BASE}${service.msg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="service-card__cta"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        {service.cta}
      </a>
    </div>
  )
}

export default function Services() {
  const titleRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in--visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )
    if (titleRef.current) observer.observe(titleRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="servicios" className="services">
      <div className="services__container">
        <div className="services__header fade-in" ref={titleRef}>
          <div className="section-badge">Nuestros Servicios</div>
          <h2 className="section-title">Todo lo que tu salud necesita</h2>
          <p className="section-desc">
            Ofrecemos una amplia variedad de servicios farmacéuticos para atender todas tus necesidades de salud y bienestar.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
