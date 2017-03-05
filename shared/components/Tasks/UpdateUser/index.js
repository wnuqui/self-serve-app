import React from 'react'

const STEPS = {
  '-1': DisplayErrors,
  '0': EnterUUID,
  '1': DisplayEditableFields,
  '2': DisplayResponse
}

export default () => {
  return (
    <ul>
      <li>Update user</li>
    </ul>
  )
}