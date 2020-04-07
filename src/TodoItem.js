import React, {useState, useContext, useReducer} from 'react'
import {Context} from './context'

export default function TodoItem({title, id, completed}) {
    // const [checked, setCheked] = useState(completed)
    // const {toggleTodo, removeTodo} = useContext(Context)
    const {dispath} = useContext(Context)
  return (
    <li className="todo">
      <div className="alert alert-dismissible alert-primary">
          <button type="button" className="close" data-dismiss="alert"
            onClick = {() => dispath({
              type: 'remove',
              payload: id
            })}
          >&times;</button>
          <label>
            <input
              type="checkbox"
              checked = {completed}
              onChange = {() => dispath({
                type: 'toggle',
                payload: id
              })}
            />
            <span>{title}</span>
          </label>
      </div>
    </li>
  )
}
