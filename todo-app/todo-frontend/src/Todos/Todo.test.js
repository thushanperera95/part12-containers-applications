import { render, screen } from "@testing-library/react"
import Todo from "./Todo"

describe('Todo tests', () => {
  it('correctly renders todo', () => {
    const todo = {
      text: 'Test todo',
      done: false
    }

    const { queryByText } = render(<Todo todo={todo} />)

    expect(queryByText('Test todo')).toBeInTheDocument()
    expect(queryByText('This todo is not done')).toBeInTheDocument()
    expect(queryByText('This todo is done')).not.toBeInTheDocument()
  })
})