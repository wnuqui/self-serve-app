import React from 'react'
import EnterUuid from './EnterUuid'
import DisplayResponse from './DisplayResponse'

const STEPS = {
  0: EnterUuid,
}

export default ({ task, fetchTaskData, clearTask }) => {
  const CurrentStep = STEPS[task.step]
  
  return (
    <CurrentStep task={ task } />
  )
}