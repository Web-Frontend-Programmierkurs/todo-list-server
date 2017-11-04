import express from 'express'
import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from './todos'

const router = new express.Router()

router.get('/todos', (req, res) => {
  const todos = getTodos()
  res.json(todos)
})

router.post('/todos', (req, res) => {
  const todo = addTodo(req.body)
  res.json(todo)
})

router.delete('/todos/:id', (req, res) => {
  const todo = deleteTodo(req.params.id)
  res.json(todo)
})

router.patch('/todos/:id', (req, res) => {
  const todo = updateTodo(req.params.id, req.body)
  res.json(todo)
})

export default router
