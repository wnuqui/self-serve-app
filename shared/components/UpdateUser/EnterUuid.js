import React from 'react'

export default ({ task, updateTask }) => {
  const submitForm = (e) => {
    e.preventDefault()
    
    let uuid = e.target.querySelector('.uuid').value
    
    if (uuid) {
      // fetchData(uuid, (err, data) => {
      //   if (!err) {
          updateTask({
            firstname: 'test0',
            lastname: 'test1'
          }, task.step + 1)
          // updateTask({ user: data.user }, task.step + 1)
      //   } else {
      //     updateTask({ err: err }, task.step)
      //   }
      // })
    } else {
      updateTask({ err: ['Must enter valid uuid'] }, task.step)
    }
  }
  
  return (
    <ul>
      <li>Please enter UUID</li>
      <li>
        <form onSubmit={ (e) => {  submitForm(e) } }>
          <input className="uuid" type="text"></input>
          <input type="submit"></input>
        </form>
      </li>
    </ul>
  )
}