import React from 'react'
import SelectTask from './SelectTask/index'
import ItemSupport from './ItemSupport/index'
import UpdateUser from './UpdateUser/index'

const TASKS = {
  'ITEM_SUPPORT': ItemSupport,
  'UPDATE_USER': UpdateUser,
}

export default (props) => {
  const task = props.task
  const CurrentTask = TASKS[task.name] || SelectTask
  
      // <h1>Task: { task.name }, Step: { task.step }</h1>
  return (
    <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
      <CurrentTask { ...props } />
    </main>
  )
}