import React from 'react'
// import UpdateUser from '../containers/Task.UpdateUser'
import Empty from './Task.Empty'

const TASKS = {
  // 'UPDATE_USER': UpdateUser
}

export default ({ taskName, taskProps }) => {
  if (!taskName) {
    return <Empty />
  }
  
  const CurrentTask = TASKS[taskName]
  
  return <CurrentTask { ...taskProps } />
}