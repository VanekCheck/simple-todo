import React, { ReactNode } from "react"

interface TodoListProps {
    children: ReactNode
}

const TodoList: React.FC<TodoListProps> = ( {children}) => {
  return (
    <div>{children}</div>
  )
}

export default TodoList