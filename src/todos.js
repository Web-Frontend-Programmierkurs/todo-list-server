import { v4 as uuid } from 'uuid'

const todos = []

export function createTodo(data) {
  const id = uuid()
  const timestamp = new Date()
  const todo = { ...data, id, timestamp }
  todos.push(todo)
  return todo
}

export function deleteTodo(id) {
  const index = todos.findIndex(x => x.id === id)
  if (index === -1) return null
  const todo = todos[index]
  todos.splice(index, 1)
  return todo
}

export function getTodos() {
  return todos
}

export function updateTodo(id, data) {
  const todo = todos.find(x => x.id === id)
  if (!todo) return null
  const timestamp = new Date()
  Object.assign(todo, data, { id, timestamp })
  return todo
}
