import React from 'react'
import EnterUuid from './EnterUuid'
import DisplayUser from './DisplayUser'
import DisplayResponse from './DisplayResponse'

const STEPS = {
  0: EnterUuid,
  1: DisplayUser,
  2: DisplayResponse,
}

export default (props) => {
  const task = props.task
  const CurrentStep = STEPS[task.step]
  
  return (
    <CurrentStep { ...props } />
  )
}