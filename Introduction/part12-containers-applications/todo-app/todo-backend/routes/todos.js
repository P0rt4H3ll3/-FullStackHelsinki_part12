const express = require('express')
const { Todo } = require('../mongo')
const router = express.Router()

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos)
})

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })
  res.send(todo)
})

const singleRouter = express.Router()

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()
  res.sendStatus(200)
})

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  try {
    res.json(req.todo)
  } catch (error) {
    console.error('Error updating todo:', error)
    res.sendStatus(500)
  }
})

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  try {
    const todo = req.body
    const id = req.todo._id
    const newTodo = await Todo.findByIdAndUpdate(
      id,
      { ...todo },
      { new: true, useFindAndModify: false }
    )
    if (newTodo) {
      return res.json(newTodo)
    } else {
      res.sendStatus(400)
    }
  } catch (error) {
    console.error('Error updating todo:', error)
    res.sendStatus(500) // Server error
  }
})

router.use('/:id', findByIdMiddleware, singleRouter)

module.exports = router
