import React from 'react'
import SelectTask from './SelectTask/index'
import ItemSupport from './ItemSupport/index'
import AccountSupport from './AccountSupport/index'

const TASKS = {
  'ITEM_SUPPORT': ItemSupport,
  'ACCOUNT_SUPPORT': AccountSupport,
}

export default (props) => {
  const task = props.task
  const CurrentTask = TASKS[task.name] || SelectTask
  
  return (
    <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
      <CurrentTask { ...props } />
    </main>
  )
}