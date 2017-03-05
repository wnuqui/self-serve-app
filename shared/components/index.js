import React from 'react'
import TaskSelector from '../containers/TaskSelector'
import Task from '../containers/Task'

export default () => {
  return (
    <div id="app">
      <h1>Self Serve App</h1>
      <TaskSelector></TaskSelector>
      <Task></Task>
    </div>
  )
}
