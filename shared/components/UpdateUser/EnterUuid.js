import React from 'react'

export default ({ task, fetchTaskData, errorTaskData, clearTask }) => {
  const submitForm = (e) => {
    e.preventDefault()
    
    let uuid = e.target.querySelector('.uuid').value
    
    if (uuid) {
      let url = `http://api.foo.localhost:3001/users/${uuid}`
      
      fetchTaskData(url, (data) => {
        return true
      })
    } else {
      errorTaskData('Must enter valid uuid')
    }
  }
  
  return (
    <ul>
      <li>Please enter UUID</li>
      { task.error ? <li>task.error</li> : <span /> }
      <li>
        <form onSubmit={ (e) => {  submitForm(e) } }>
          <input className="uuid" type="text"></input>
          <input type="submit"></input>
        </form>
      </li>
    </ul>
  )
}