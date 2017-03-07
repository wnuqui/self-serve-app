import React from 'react'

export default ({ task, updateTask }) => {
  const submitForm = (e) => {
    e.preventDefault()
    
    let user = {}
    
    // submitData(user, (err, data) => {
    //   if (!err) {
    //     updateTask({ user: data.user }, task.step + 1)
        updateTask({ user: task.data }, task.step + 1)
    //   } else {
    //     updateTask({ err: err }, task.step)
    //   }
    // })
  }
  
  return (
    <ul>
      <li>
        <form onSubmit={ (e) => {  submitForm(e) } }>
          <input className="firstname" type="text" value={ task.data.firstname }></input>
          <input className="lastname" type="text" value={ task.data.lastname }></input>
          <input type="submit"></input>
        </form>
      </li>
    </ul>
  )
}