import React from 'react'
import EnterUuid from './EnterUuid'
import DisplayUser from './DisplayUser'
import DisplayResponse from './DisplayResponse'

const STEPS = {
  0: EnterUuid,
  1: DisplayUser,
  2: DisplayResponse,
}

export default ({ task, updateTask, clearTask }) => {
  const CurrentStep = STEPS[task.step]
  
  return (
    <CurrentStep task={ task } updateTask={ updateTask } clearTask={ clearTask } />
  )
}