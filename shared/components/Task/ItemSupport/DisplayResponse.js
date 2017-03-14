import React from 'react'

export default ({ task, clearTask }) => {
  const submitForm = (e) => {
    e.preventDefault()
  }
  
  let item = task.data
  console.log(item)
  
  return (
    <div>
      <h1>DONE</h1>
      <ul>
        <li>
        </li>
        <li onClick={ () => { clearTask() } }>Back to start</li>
      </ul>
    </div>
  )
}