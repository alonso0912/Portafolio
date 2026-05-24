import { useEffect, useState } from 'react'
import { getProjects } from '../services/api'

function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await getProjects()
        setProjects(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  return (
    <section id="projects" className="section-layout">
      <div className="section-header">
        <span>Proyectos</span>
        <h2>Proyectos destacados</h2>
        <p>Estas son algunas de las soluciones que he desarrollado para clientes y equipos.</p>
      </div>
      {loading ? (
        <p className="loading">Cargando proyectos...</p>
      ) : (
        <div className="grid cards-grid">
          {projects.map((project) => (
            <article key={project._id} className="card project-card">
              {project.image ? (
                <img
                  className="project-image"
                  src={project.image}
                  alt={`Captura del proyecto ${project.title}`}
                  loading="lazy"
                />
              ) : null}
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-list">
                  {project.technologies?.map((tech) => (
                    <span key={tech} className="tech-chip">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="card-actions">
                <a className="button button-sm" href={project.repository} target="_blank" rel="noreferrer">Repositorio</a>
                {project.url ? (
                  <a className="button button-sm button-outline" href={project.url} target="_blank" rel="noreferrer">Sitio</a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default Projects
