import React, {useState, useEffect} from 'react';

type Props = [{
  task: string,
  isCompleted: boolean
}]

export default function TaskOutput(props: Props) {

  const initialState = [
    {
      task: 'Learn React',
      isCompleted: false
    }
  ]

  const [todos, setTodo] = useState(initialState)

  

  function handleRemoveTask(index: number) {
    const newTodos = [...props]
    newTodos.splice(index,1)
    setTodo(newTodos)
  }

  return (
    <div>
      <h1>ToDo List</h1>
      <ol>
        {todos.map((todo, index) => (
          <li key={index}>{todo.task} <span onClick={() => handleRemoveTask(index)}>X</span></li>
        ))}
      </ol>
    </div>
  )
}