import { useEffect, useState } from 'react'
import { getSkills } from '../services/api'

function Skills() {
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const data = await getSkills()
        setSkills(data)
      } catch (error) {
        console.error(error)
      }
    }

    loadSkills()
  }, [])

  return (
    <section id="skills" className="section-layout alt-background">
      <div className="section-header">
        <span>Habilidades</span>
        <h2>Habilidades técnicas por categoría</h2>
      </div>
      <div className="grid skills-grid">
        {skills.map((skill) => (
          <article key={skill._id} className="card skill-card">
            <h3>{skill.category}</h3>
            <ul>
              {skill.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
