import React from 'react'

export default ({ task, fetchTaskData }) => {
  const submitForm = (e) => {
    e.preventDefault()
    
    fetchTaskData({
      url: `http://api.foo.localhost:3001/users/${uuid}`,
      method: 'PATCH',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: task.data
    }, (data) => {
      return !data.errors
    })
  }
  
  return (
    <ul>
      <li>
        { task.error ? JSON.stringify(task.error) : null }
        <form onSubmit={ (e) => {  submitForm(e) } }>
          <input className="first_name" type="text" defaultValue={ task.data.users.first_name }></input>
          <input className="last_name" type="text" defaultValue={ task.data.users.last_name }></input>
          <input className="email" type="text" defaultValue={ task.data.users.email }></input>
          <input type="submit"></input>
        </form>
      </li>
    </ul>
  )
}