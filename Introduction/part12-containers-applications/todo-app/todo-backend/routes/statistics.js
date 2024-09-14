const express = require('express')
const statisticRouter = express.Router()
const redis = require('../redis')

/* GET todos listing. */
statisticRouter.get('/', async (_, res) => {
  const count = await redis.getAsync('added_todos')
  res.json(count)
})

statisticRouter.get('/delete', async (_, res) => {
  await redis.setAsync('added_todos', 0)
  const count = await redis.getAsync('added_todos')
  res.json(count)
})
module.exports = statisticRouter
