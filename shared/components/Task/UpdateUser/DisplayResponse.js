import React from 'react'

export default ({ task, updateTask, clearTask }) => {
  const submitForm = (e) => {
    e.preventDefault()
  }
  
  return (
    <ul>
      <li>
        <h1>DONE</h1>
      </li>
      <li onClick={ () => { clearTask() } }>Back to start</li>
    </ul>
  )
}