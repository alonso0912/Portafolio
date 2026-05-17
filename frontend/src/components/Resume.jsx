import { useEffect, useState } from 'react'
import { getResume } from '../services/api'

function Resume() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const loadResume = async () => {
      try {
        const data = await getResume()
        setItems(data)
      } catch (error) {
        console.error(error)
      }
    }

    loadResume()
  }, [])

  return (
    <section id="resume" className="section-layout">
      <div className="section-header">
        <span>Experiencia</span>
        <h2>Formación y experiencia académica</h2>
        <p>Trayectoria profesional y educativa que impulsa las soluciones que desarrollo.</p>
      </div>
      <div className="timeline">
        {items.map((item) => (
          <article key={item._id} className="timeline-item">
            <span className="timeline-type">{item.type === 'experience' ? 'Experiencia' : 'Educación'}</span>
            <div>
              <h3>{item.title}</h3>
              <p className="timeline-meta">{item.organization} · {item.dateRange}</p>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Resume
