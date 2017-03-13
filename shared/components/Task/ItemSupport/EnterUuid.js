import React from 'react'

export default ({ task, fetchItem }) => {
  const submitForm = (e) => {
    e.preventDefault()
    
    let uuid = e.target.querySelector('.uuid').value
    
    if (uuid) {
      fetchItem(uuid)
    } else {
      console.log('Enter valid uuid')
    }
  }
  
  return (
    <ul>
      <li>Please enter Item UUID</li>
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