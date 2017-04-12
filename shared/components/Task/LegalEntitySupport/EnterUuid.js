import React from 'react'

export default ({ task, fetchLegalEntity }) => {
  const submitForm = (e) => {
    e.preventDefault()

    let uuid = e.target.querySelector('.uuid').value

    if (uuid) {
      fetchLegalEntity(uuid)
    } else {
      console.log('Enter valid uuid')
    }
  }

  return (
    <ul>
      <li>Please enter LegalEntity ID</li>
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
