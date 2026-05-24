function Nav({ adminMode }) {
  return (
    <nav className="nav-bar">
      <div className="nav-brand">Portafolio</div>
      <ul className="nav-links">
        <li><a href="#hero">Inicio</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#skills">Habilidades</a></li>
        <li><a href="#resume">Experiencia</a></li>
        <li><a href="#contact">Contacto</a></li>
        {adminMode ? <li><a href="#admin">Panel admin</a></li> : null}
      </ul>
      {adminMode ? <span className="nav-status">Modo admin</span> : null}
    </nav>
  )
}

export default Nav
