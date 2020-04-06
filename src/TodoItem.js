import React, {useState} from 'react'


export default function TodoItem({title, id, completed}) {
    const[checked, setCheked] = useState(completed)
  return (
    <li className="todo">
      <div className="alert alert-dismissible alert-primary">
          <button type="button" className="close" data-dismiss="alert">&times;</button>
          <label>
            <input
              type="checkbox"
              checked = {checked}
              onChange = {() => setCheked(!checked)}
            />
            <span>{title}</span>
          </label>
      </div>
    </li>
  )
}
