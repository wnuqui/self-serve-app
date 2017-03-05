import React from 'react'
import TaskSelector from '../containers/TaskSelector'
import Task from '../containers/Task'

export default () => {
  return (
    <div id="app">
      <TaskSelector></TaskSelector>
      <Task></Task>
    </div>
  )
}
