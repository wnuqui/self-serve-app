import React from 'react'

export default ({ task, fetchTaskData, errorTaskData, clearTask }) => {
  const submitForm = (e) => {
    e.preventDefault()
    
    let uuid = e.target.querySelector('.uuid').value
    
    if (uuid) {
      fetchTaskData({
        url: `http://api.foo.localhost:3001/users/${uuid}`,
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ test: true })
      }, (data) => {
        return !data.errors
      })
    } else {
      console.log('Enter valid uuid')
    }
  }
  
  return (
    <ul>
      <li>Please enter User UUID</li>
      { task.error ? JSON.stringify(task.error) : null }
      <li>
        <form onSubmit={ (e) => {  submitForm(e) } }>
          <input className="uuid" type="text"></input>
          <input type="submit"></input>
        </form>
      </li>
    </ul>
  )
}