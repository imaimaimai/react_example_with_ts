import React, {useState, useEffect} from 'react';
import TaskOutput from './TaskOutput'

export default function TaskInput() {

  const [text, setText] = useState("");

  const [todos, setTodo] = useState([{
    task: 'Learn React',
    isCompleted: false
  },
    {
      task: 'お腹減った',
      isCompleted: false
    }]);

  useEffect(() => {
    document.title = `Your latest task is ${text}`
  },[todos])

  function handleClick(e:React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setTodo([...todos, {
      task: text.toUpperCase(),
      isCompleted: false
    }])
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setText(e.target.value);
  }

  function handleRemoveTask(index: number) {
    const newTodos = [...todos]
    newTodos.splice(index,1)
    setTodo(newTodos)
  }

  return (
    <div>
      <input onChange={handleChange} name="taskName" value={text} type="text" placeholder="Enter your todo!!" />
      <button onClick={handleClick}>Click me</button>
      <h1>ToDo List</h1>
      <ol>
        {todos.map((todo, index) => (
          <li key={index}>{todo.task} <span onClick={() => handleRemoveTask(index)}>X</span></li>
        ))}
      </ol>
    </div>
  )
}