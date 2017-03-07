import React from 'react'
import SelectTask from './SelectTask/index'
import UpdateUser from './UpdateUser/index'

const TASKS = {
  'UPDATE_USER': UpdateUser
}

export default ({ task, fetchTaskData, clearTask, errorTaskData }) => {
  const CurrentTask = TASKS[task.name] || SelectTask
  
  return (
    <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
      <h1>Task: { task.name }, Step: { task.step }</h1>
      <CurrentTask task={ task } fetchTaskData={ fetchTaskData } clearTask={ clearTask } errorTaskData={ errorTaskData } />
    </main>
  )
}