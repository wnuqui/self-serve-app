import React from 'react'
import EnterUuid from './EnterUuid'
import DisplayResponse from './DisplayResponse'

const STEPS = {
  0: EnterUuid,
  1: DisplayResponse
}

export default (props) => {
  const task = props.task
  const CurrentStep = STEPS[task.step]
  
  return (
    <CurrentStep { ...props } />
  )
}