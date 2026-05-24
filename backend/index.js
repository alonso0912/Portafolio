const app = require('./app')
const { connectDB, seedDatabase } = require('./db')
require('dotenv').config()

const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/portafolio'

connectDB(MONGO_URI)
  .then(async () => {
    console.log('Conexión a MongoDB establecida')
    await seedDatabase()
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`)
    })
  })
  .catch((error) => {
    console.error('Error conectando a MongoDB:', error.message)
  })
