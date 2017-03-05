import React from 'react'

export default ({ selectTask }) => {
  return (
    <div>
      <h1>TaskSelector</h1>
      <ul>
        <li onClick={ () => { selectTask('UPDATE_USER') } }>Update User</li>
      </ul>
    </div>
  )
}
