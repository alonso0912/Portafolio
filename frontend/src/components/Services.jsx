import { useEffect, useState } from 'react'
import { getServices } from '../services/api'

function Services() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices()
        setServices(data)
      } catch (err) {
        setError('No fue posible cargar los servicios. Intenta de nuevo más tarde.')
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

  return (
    <section id="services" className="services-section">
      <div className="section-header">
        <span>Servicios</span>
        <h2>Lo que puedo hacer por tu negocio</h2>
        <p>Trabajo con soluciones completas para web, apps y APIs con despliegue listo para producción.</p>
      </div>

      {loading ? (
        <p className="loading">Cargando servicios...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.id} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default Services
