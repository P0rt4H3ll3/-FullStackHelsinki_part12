import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import TodoList from './List' // Ensure this import matches your file structure

test('renders content and handles interactions', async () => {
  const todos = [
    {
      text: 'Sample Todo',
      done: false
    }
  ]

  const deleteTodo = vi.fn()
  const completeTodo = vi.fn()

  render(
    <TodoList
      todos={todos}
      deleteTodo={deleteTodo}
      completeTodo={completeTodo}
    />
  )

  const sampleTodo = screen.getByText('Sample Todo')
  const sampleDone = screen.getByText('This todo is not done') // Find element with initial text
  const user = userEvent.setup()
  const buttonDone = screen.getByText('Set as done')
  const buttonDelete = screen.getByText('Delete')

  // Check if the initial content is rendered correctly
  expect(sampleTodo).toBeInTheDocument()
  expect(sampleDone).toBeInTheDocument() // Ensure the initial text is present
  // Simulate button click and check if the todo status changes
  await user.click(buttonDone)
  expect(completeTodo).toHaveBeenCalledTimes(1) // Check for updated text
  await user.click(buttonDelete)
  expect(deleteTodo).toHaveBeenCalledTimes(1)
  // Optionally, add assertions to check if deleteTodo was called
})
