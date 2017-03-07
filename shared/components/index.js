import React from 'react'
import Navbar from '../containers/Navbar'
import TaskSelector from '../containers/TaskSelector'
import Task from '../containers/Task'
import styles from '../../client/custom.css'

export default () => {
  return (
    <div id="app">
      <Navbar></Navbar>
      <div className="container-fluid">
        <div className="row">
          <TaskSelector></TaskSelector>
          <Task></Task>
        </div>
      </div>
    </div>
  )
}
