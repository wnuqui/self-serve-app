import React from 'react'

export default ({ task }) => {
  const submitForm = (e) => {
    e.preventDefault()
  }

  let legalEntity = task.data || {}
  console.log('legalEntity ko', legalEntity);

  return (
    <div className="container">
      <div className="page-header">
        <h1 id="legal-entity">{ `${legalEntity.name}` }</h1>
      </div>

      <ul className="timeline">
        <li>
          <div className="timeline-badge success"><i className="glyphicon glyphicon-thumbs-up"></i></div>
          <div className="timeline-panel">
            <div className="timeline-body">
              <ul>
                <li>Id: { legalEntity.id }</li>
                <li>Name: { legalEntity.name }</li>
                <li>KYC State: { legalEntity.kyc_state }</li>
                <li>Entity Type: { legalEntity.entity_type }</li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
