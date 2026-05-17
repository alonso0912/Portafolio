const servicesData = [
  {
    id: 1,
    title: 'Desarrollo web profesional',
    description: 'Diseño y desarrollo de sitios web responsivos, accesibles y optimizados para SEO.',
  },
  {
    id: 2,
    title: 'Aplicaciones con React',
    description: 'Interfaces modernas y dinámicas con React, Vite y mejores prácticas de UX.',
  },
  {
    id: 3,
    title: 'APIs con Node y Express',
    description: 'Backend escalable y seguro para conectar tus aplicaciones con bases de datos y terceros.',
  },
  {
    id: 4,
    title: 'Despliegue y mantenimiento',
    description: 'Publicación en hosting, configuración de dominio y soporte continuo para tu proyecto.',
  },
]

exports.getServices = (req, res) => {
  res.json(servicesData)
}
