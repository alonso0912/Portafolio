function Hero({ profile }) {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-copy">
        <span className="eyebrow">Hola, soy {profile?.name || 'Tu Nombre'}</span>
        <h1>{profile?.title || 'Desarrollador Full Stack'}</h1>
        <p>{profile?.summary || 'Construyo experiencias digitales con aplicaciones web modernas, APIs seguras y diseños que convierten.'}</p>
        <div className="hero-actions">
          <a className="button" href="#contact">Contáctame</a>
          <a className="button button-outline" href={profile?.cvUrl || '/CV.pdf'} target="_blank" rel="noreferrer">Descargar CV</a>
        </div>
      </div>
      <div className="hero-details">
        <div className="profile-card">
          <h2>{profile?.name || 'Tu Nombre'}</h2>
          <p>{profile?.title || 'Desarrollador Full Stack'}</p>
          <p>{profile?.location || 'Ciudad, País'}</p>
          <a className="profile-email" href={`mailto:${profile?.email || 'tu-email@ejemplo.com'}`}>{profile?.email || 'tu-email@ejemplo.com'}</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
