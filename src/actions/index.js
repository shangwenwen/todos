import { v4 } from 'node-uuid'

export const receiveTodos = (filter, res) => ({
  type: 'RECEIVE_TODOS',
  filter,
  res
})

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: v4(),
  text
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
