import React from 'react'

export default ({ task }) => {
  const submitForm = (e) => {
    e.preventDefault()
  }
  
  let marketplace = task.data.marketplace || {}

  return (
    <div className="container">
      <div className="page-header">
        <h1 id="marketplace">{ marketplace.name }</h1>
      </div>

      <ul className="timeline">
        <li>
          <div className="timeline-badge success"><i className="glyphicon glyphicon-thumbs-up"></i></div>
          <div className="timeline-panel">
            <div className="timeline-body">
              <ul>
                <li>Id: { marketplace.id }</li>
                <li>Short Name: { marketplace.short_name }</li>
                <li>State: { marketplace.state }</li>
                <li>Active: { marketplace.active }</li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
