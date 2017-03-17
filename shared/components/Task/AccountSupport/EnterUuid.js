import React from 'react'

export default ({ task, fetchAccount }) => {
  const submitForm = (e) => {
    e.preventDefault()
    
    let uuid = e.target.querySelector('.uuid').value
    
    if (uuid) {
      fetchAccount(uuid)
    } else {
      console.log('Enter valid uuid')
    }
  }
  
  return (
    <ul>
      <li>Please enter Item ID</li>
      { task.error ? task.error : null }
      <li>
        <form onSubmit={ (e) => {  submitForm(e) } }>
          <input className="uuid" type="text"></input>
          <input type="submit"></input>
        </form>
      </li>
    </ul>
  )
}