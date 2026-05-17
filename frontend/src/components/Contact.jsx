import { useState } from 'react'
import { sendContact } from '../services/api'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [feedback, setFeedback] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setFeedback(null)
    try {
      await sendContact(form)
      setFeedback('Gracias, tu mensaje fue enviado con éxito.')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setFeedback('No se pudo enviar el mensaje. Intenta de nuevo.')
    }
  }

  return (
    <section id="contact" className="section-layout alt-background">
      <div className="section-header">
        <span>Contacto</span>
        <h2>Escríbeme para tu próximo proyecto</h2>
        <p>Completa el formulario y responderé a la brevedad.</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label>
            Nombre
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            Correo electrónico
            <input name="email" type="email" value={form.email} onChange={handleChange} required />
          </label>
          <label>
            Asunto
            <input name="subject" value={form.subject} onChange={handleChange} />
          </label>
          <label className="full-width">
            Mensaje
            <textarea name="message" rows="5" value={form.message} onChange={handleChange} required />
          </label>
        </div>
        <button className="button" type="submit">Enviar mensaje</button>
        {feedback ? <p className="form-feedback">{feedback}</p> : null}
      </form>
    </section>
  )
}

export default Contact
