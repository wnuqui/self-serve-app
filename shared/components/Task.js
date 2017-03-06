import React from 'react'
import SelectTask from './SelectTask/index'
import UpdateUser from './UpdateUser/index'

const TASKS = {
  'UPDATE_USER': UpdateUser
}

export default ({ task, fetchTaskData, clearTask, errorTaskData }) => {
  const CurrentTask = TASKS[task.name] || SelectTask
  
  return (
    <div>
      <h1>Task: { task.name }</h1>
      <h1>Step: { task.step }</h1>
      <CurrentTask task={ task } fetchTaskData={ fetchTaskData } clearTask={ clearTask } errorTaskData={ errorTaskData } />
    </div>
  )
}