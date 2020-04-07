import React, {useState, useEffect, useReducer} from 'react'
import TodoList from './TodoList'

import './App.css'
import { Context } from './context'
import reducer from './reducer'

export default function App() {
  
  const [state, dispath] = useReducer(reducer, 
    JSON.parse(localStorage.getItem('todos')))
  // dispath - дія, яку будемо відправляти

  // const [todos, setTodos] = useState([])
    // першим аргументом передаємо стан, state
    // todos === this.state = {todos: []}
    // другим аргументом передаємо метод, накшталт setState, 
    // але називаєио як хочемо
    // setTodos === this.setState({todos: []})
  
  
  const [todoTitle, setTodoTitle] = useState('')
  // В useState пишемо початковий стан
 


  const addTodo = event => {
    if(event.key === 'Enter') {
      // setTodos([
      //   ...todos,
      //   {
      //     id: Date.now(),
      //     title: todoTitle,
      //     completed: false
      //   }
      
      // ])

      dispath({
        type: 'add',
        payload: todoTitle
      })
      setTodoTitle('')
    }
    // console.log(setTodos)
  }

  
  // useEffect(() => {
  //   const raw = localStorage.getItem('todos') || [] 
  //   setTodos(JSON.parse(raw))
  // }, [])

  useEffect(() => {
    // console.log(todos.length, todos)

    localStorage.setItem('todos', JSON.stringify(state))
  }, [state])

  // const removeTodo = id => {
  //   setTodos(state.filter(todo => {
  //     return todo.id !== id
  //   }))
  // }

  // const toggleTodo = id => {
  //   setTodos(state.map(todo => {
  //     if(todo.id === id) {
  //       todo.completed = !todo.completed
  //     }
  //     return todo
  //   }))
  
    return (
      <Context.Provider value ={{dispath}}>
          <div className="container">
            <h1>Todo app</h1>

              <div className="input-field">
                  <label>Todo name</label>
              <input type="text" value = {todoTitle} 
                onChange = {event => setTodoTitle(event.target.value)}
                onKeyPress = {addTodo}
                />

              </div>

              <TodoList todos={state} />
          </div>
        </Context.Provider>
        );
    }

