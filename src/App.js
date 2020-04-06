import React, {useState, useEffect} from 'react'
import TodoList from './TodoList'

import './App.css'

export default function App() {
  
  
  const [todos, setTodos] = useState([])
  // першим аргументом передаємо стан, state
  // todos === this.state = {todos: []}
  // другим аргументом передаємо метод, накшталт setState, 
  // але називаєио як хочемо
  // setTodos === this.setState({todos: []})
  
  
  const [todoTitle, setTodoTitle] = useState('')
  // В useState пишемо початковий стан
 


  const addTodo = event => {
    if(event.key === 'Enter') {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: todoTitle,
          completed: false
        }
      
      ])
      setTodoTitle('')
    }
    console.log(setTodos)
  }

  useEffect(() => {
    const raw = localStorage.getItem('todos') || [] 
    setTodos(JSON.parse(raw))
  }, [])

  useEffect(() => {
    console.log(todos.length, todos)

    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

    return (
          <div className="container">
            <h1>Todo app</h1>

              <div className="input-field">
                  <label>Todo name</label>
              <input type="text" value = {todoTitle} 
                onChange = {event => setTodoTitle(event.target.value)}
                onKeyPress = {addTodo}
                />

              </div>

              <TodoList todos={todos} />
          </div>
        );
    }

