require('dotenv').config()

const MONGO_URL = process.env.MONGO_URL
const REDIS_URL = process.env.REDIS_URL

module.exports = {
  MONGO_URL,
  REDIS_URL
}
