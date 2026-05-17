import serverless from 'serverless-http'
import app from '../../../backend/app.js'
import db from '../../../backend/db.js'

const { connectDB, seedDatabase } = db
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/portafolio'

let handler = null

const getHandler = async () => {
  if (!handler) {
    await connectDB(MONGO_URI)
    await seedDatabase()
    handler = serverless(app)
  }
  return handler
}

export const handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  const func = await getHandler()
  return func(event, context)
}
