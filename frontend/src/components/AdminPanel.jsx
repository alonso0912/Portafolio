import { useEffect, useState } from 'react'
import { getProjects, getProfile, login, createProject, updateProject, deleteProject, updateProfile } from '../services/api'

function AdminPanel({ token, onLogin, onLogout }) {
  const [mode, setMode] = useState(token ? 'manage' : 'login')
  const [projects, setProjects] = useState([])
  const [profile, setProfile] = useState(null)
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [projectForm, setProjectForm] = useState({
    title: '',
    description: '',
    image: '',
    repository: '',
    url: '',
    technologies: '',
  })
  const [profileForm, setProfileForm] = useState({
    name: '',
    title: '',
    location: '',
    email: '',
    phone: '',
    summary: '',
    cvUrl: '/CV.pdf',
  })
  const [message, setMessage] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    if (mode === 'manage') {
      loadProjects()
      loadProfile()
    }
  }, [mode])

  const loadProjects = async () => {
    try {
      const data = await getProjects()
      setProjects(data)
    } catch (error) {
      console.error(error)
    }
  }

  const loadProfile = async () => {
    try {
      const data = await getProfile()
      setProfile(data)
      setProfileForm({
        name: data.name || '',
        title: data.title || '',
        location: data.location || '',
        email: data.email || '',
        phone: data.phone || '',
        summary: data.summary || '',
        cvUrl: data.cvUrl || '/CV.pdf',
      })
    } catch (error) {
      console.error(error)
    }
  }

  const handleLoginChange = (event) => {
    const { name, value } = event.target
    setCredentials((prev) => ({ ...prev, [name]: value }))
  }

  const handleProjectChange = (event) => {
    const { name, value } = event.target
    setProjectForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleProfileChange = (event) => {
    const { name, value } = event.target
    setProfileForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleLoginSubmit = async (event) => {
    event.preventDefault()
    setMessage(null)
    try {
      const data = await login(credentials)
      onLogin(data.token)
      setMode('manage')
      setMessage('Inicio de sesión exitoso')
    } catch (error) {
      setMessage('Credenciales incorrectas')
    }
  }

  const handleProjectSubmit = async (event) => {
    event.preventDefault()
    setMessage(null)
    try {
      if (selectedProject) {
        await updateProject(selectedProject._id, {
          ...projectForm,
          technologies: projectForm.technologies.split(',').map((tech) => tech.trim()).filter(Boolean),
        }, token)
        setMessage('Proyecto actualizado')
      } else {
        await createProject({
          ...projectForm,
          technologies: projectForm.technologies.split(',').map((tech) => tech.trim()).filter(Boolean),
        }, token)
        setMessage('Proyecto agregado')
      }
      setProjectForm({ title: '', description: '', image: '', repository: '', url: '', technologies: '' })
      setSelectedProject(null)
      await loadProjects()
    } catch (error) {
      setMessage('No se pudo guardar el proyecto')
    }
  }

  const handleEditProject = (project) => {
    setSelectedProject(project)
    setProjectForm({
      title: project.title,
      description: project.description,
      image: project.image || '',
      repository: project.repository,
      url: project.url || '',
      technologies: (project.technologies || []).join(', '),
    })
    window.location.hash = '#admin'
  }

  const handleDeleteProject = async (id) => {
    setMessage(null)
    try {
      await deleteProject(id, token)
      setMessage('Proyecto eliminado')
      await loadProjects()
    } catch (error) {
      setMessage('No se pudo eliminar el proyecto')
    }
  }

  const handleProfileSubmit = async (event) => {
    event.preventDefault()
    setMessage(null)
    try {
      await updateProfile(profileForm, token)
      setMessage('Perfil actualizado')
      await loadProfile()
    } catch (error) {
      setMessage('No se pudo actualizar el perfil')
    }
  }

  return (
    <section id="admin" className="section-layout admin-section">
      <div className="section-header">
        <span>Administrador</span>
        <h2>Panel privado</h2>
        <p>Inicia sesión con tu usuario y contraseña para administrar proyectos y actualizar tu perfil.</p>
      </div>

      {!token ? (
        <form className="auth-form" onSubmit={handleLoginSubmit}>
          <label>
            Usuario
            <input name="username" value={credentials.username} onChange={handleLoginChange} required autoComplete="username" />
          </label>
          <label>
            Contraseña
            <input name="password" type="password" value={credentials.password} onChange={handleLoginChange} required />
          </label>
          <button className="button" type="submit">Iniciar sesión</button>
          {message ? <p className="form-feedback">{message}</p> : null}
        </form>
      ) : (
        <div className="admin-grid">
          <div className="admin-card">
            <div className="admin-header">
              <h3>Proyectos</h3>
              <button className="button button-outline" onClick={onLogout}>Cerrar sesión</button>
            </div>
            <form className="admin-form" onSubmit={handleProjectSubmit}>
              <label>
                Título
                <input name="title" value={projectForm.title} onChange={handleProjectChange} required />
              </label>
              <label>
                Descripción
                <textarea name="description" rows="4" value={projectForm.description} onChange={handleProjectChange} required />
              </label>
              <label>
                Imagen (URL o ruta, ej. /project-portfolio.svg)
                <input name="image" value={projectForm.image} onChange={handleProjectChange} placeholder="/project-portfolio.svg" />
              </label>
              <label>
                Repositorio
                <input name="repository" value={projectForm.repository} onChange={handleProjectChange} required />
              </label>
              <label>
                URL pública
                <input name="url" value={projectForm.url} onChange={handleProjectChange} />
              </label>
              <label>
                Tecnologías (separadas por coma)
                <input name="technologies" value={projectForm.technologies} onChange={handleProjectChange} />
              </label>
              <button className="button" type="submit">{selectedProject ? 'Actualizar proyecto' : 'Agregar proyecto'}</button>
            </form>
            <div className="project-list">
              {projects.map((project) => (
                <div key={project._id} className="project-row">
                  <div>
                    <strong>{project.title}</strong>
                    <p>{project.description}</p>
                  </div>
                  <div className="row-actions">
                    <button className="button button-sm button-outline" type="button" onClick={() => handleEditProject(project)}>Editar</button>
                    <button className="button button-sm" type="button" onClick={() => handleDeleteProject(project._id)}>Eliminar</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="admin-card">
            <h3>Perfil</h3>
            <form className="admin-form" onSubmit={handleProfileSubmit}>
              <label>
                Nombre
                <input name="name" value={profileForm.name} onChange={handleProfileChange} required />
              </label>
              <label>
                Título profesional
                <input name="title" value={profileForm.title} onChange={handleProfileChange} required />
              </label>
              <label>
                Ubicación
                <input name="location" value={profileForm.location} onChange={handleProfileChange} />
              </label>
              <label>
                Correo
                <input name="email" type="email" value={profileForm.email} onChange={handleProfileChange} required />
              </label>
              <label>
                Teléfono
                <input name="phone" value={profileForm.phone} onChange={handleProfileChange} />
              </label>
              <label>
                Resumen
                <textarea name="summary" rows="5" value={profileForm.summary} onChange={handleProfileChange} required />
              </label>
              <label>
                URL del CV (PDF)
                <input name="cvUrl" value={profileForm.cvUrl} onChange={handleProfileChange} placeholder="/CV.pdf" required />
              </label>
              <button className="button" type="submit">Guardar perfil</button>
            </form>
          </div>
        </div>
      )}
      {message ? <p className="form-feedback">{message}</p> : null}
    </section>
  )
}

export default AdminPanel
