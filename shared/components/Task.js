import React from 'react'
import SelectTask from './Tasks/SelectTask'
import UpdateUser from './Tasks/UpdateUser/index'

const TASKS = {
  'UPDATE_USER': UpdateUser
}

export default ({ task }) => {
  const CurrentTask = TASKS[task.name] || SelectTask
  
  return (
    <div>
      <h1>Task</h1>
      <CurrentTask { ...task } />
    </div>
  )
}