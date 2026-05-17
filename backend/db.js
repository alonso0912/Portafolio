const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const User = require('./models/User')
const Profile = require('./models/Profile')
const Project = require('./models/Project')
const Skill = require('./models/Skill')
const ResumeItem = require('./models/ResumeItem')

const connectDB = async (uri) => {
  if (mongoose.connection.readyState >= 1) {
    return mongoose.connection
  }
  return mongoose.connect(uri)
}

const seedDatabase = async () => {
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@portafolio.com'
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Admin1234'

  const admin = await User.findOne({ email: ADMIN_EMAIL })
  if (!admin) {
    const password = await bcrypt.hash(ADMIN_PASSWORD, 10)
    await User.create({ name: 'Administrador', email: ADMIN_EMAIL, password, role: 'admin' })
    console.log('Admin creado:', ADMIN_EMAIL)
  }

  const profileExists = await Profile.findOne()
  if (!profileExists) {
    await Profile.create({
      name: 'Tu Nombre',
      title: 'Desarrollador Full Stack',
      location: 'Ciudad, País',
      email: 'tu-email@ejemplo.com',
      phone: '+123 456 7890',
      summary:
        'Soy un desarrollador con experiencia en aplicaciones web modernas, APIs seguras y soluciones completas para empresas que buscan crecer digitalmente.',
      cvUrl: '/CV.pdf',
    })
    console.log('Perfil inicial creado')
  }

  const projectsCount = await Project.countDocuments()
  if (projectsCount === 0) {
    await Project.create([
      {
        title: 'Portafolio Profesional',
        description:
          'Sitio web de presentación con secciones de proyectos, habilidades, experiencia y contacto.',
        image: '/project-portfolio.png',
        repository: 'https://github.com/tuusuario/portafolio',
        url: 'https://tu-dominio.com',
        technologies: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB'],
      },
      {
        title: 'Tienda Web',
        description:
          'E-commerce responsive con carrito y filtros para una experiencia de compra clara.',
        image: '/project-store.png',
        repository: 'https://github.com/tuusuario/tienda-web',
        url: 'https://tienda.tu-dominio.com',
        technologies: ['React', 'Express', 'MongoDB'],
      },
      {
        title: 'API de Administración',
        description: 'Backend con autenticación JWT para un panel privado de gestión de contenidos.',
        image: '/project-api.png',
        repository: 'https://github.com/tuusuario/api-admin',
        url: 'https://api.tu-dominio.com',
        technologies: ['Node.js', 'Express', 'JWT'],
      },
    ])
    console.log('Proyectos iniciales creados')
  }

  const skillsCount = await Skill.countDocuments()
  if (skillsCount === 0) {
    await Skill.create([
      { category: 'Frontend', items: ['React', 'Vite', 'HTML5', 'CSS3', 'JavaScript'] },
      { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'REST APIs'] },
      { category: 'Herramientas', items: ['Git', 'Netlify', 'Postman', 'VS Code'] },
    ])
    console.log('Habilidades iniciales creadas')
  }

  const resumeCount = await ResumeItem.countDocuments()
  if (resumeCount === 0) {
    await ResumeItem.create([
      {
        type: 'experience',
        title: 'Desarrollador Full Stack',
        organization: 'Consultora Digital',
        dateRange: '2023 - Presente',
        description:
          'Construcción de aplicaciones web modernas, APIs seguras y paneles administrativos con React y Node.js.',
      },
      {
        type: 'experience',
        title: 'Ingeniero de Software',
        organization: 'Startup SaaS',
        dateRange: '2021 - 2023',
        description:
          'Lideré la implementación de nuevas funcionalidades y migración a arquitectura basada en microservicios.',
      },
      {
        type: 'education',
        title: 'Ingeniería en Sistemas',
        organization: 'Universidad Ejemplo',
        dateRange: '2017 - 2021',
        description: 'Formación en desarrollo de software, bases de datos y metodologías ágiles.',
      },
    ])
    console.log('Experiencia y formación inicial creada')
  }
}

module.exports = { connectDB, seedDatabase }
