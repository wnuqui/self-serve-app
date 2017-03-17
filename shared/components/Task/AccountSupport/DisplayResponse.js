import React from 'react'

export default ({ task }) => {
  const submitForm = (e) => {
    e.preventDefault()
  }
  
  // test data: edf7d223-d22f-4f81-a3bc-b740083fc001
  let account_id = task.data.account_id
  let timeline = task.data.timeline
  console.log(account_id, timeline)
  
  return (
    <div className="container">
      <div className="page-header">
        <h1 id="timeline">{ account_id }</h1>
      </div>
      <ul className="timeline">
        {
          timeline.map((t) => {
            if (t.cardType === 'transaction') {
              var fromAccount = t.description.split(" from ")[1].split(" for ")[0]
              var toAccount = t.description.split(" to ")[1].split(" by ")[0]
              
              if (fromAccount === 'Credit Card') fromAccount = `${t.related.transactions[0].user_name}'s ${fromAccount}`
              if (toAccount === 'Wallet Account') toAccount = `${t.related.transactions[0].user_name}'s ${toAccount}`
              
              let amount = parseFloat(Math.round((t.amount / 100.00) * 100) / 100).toFixed(2);
              
              return (
                <li className="timeline-inverted">
                  <div className="timeline-badge success"><i className="glyphicon glyphicon-thumbs-up"></i></div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Transaction</h4>
                      <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> Created At { new Date(t.created_at).toString() }</small></p>
                      <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> Updated At { new Date(t.updated_at).toString() }</small></p>
                    </div>
                    <div className="timeline-body">
                      <ul>
                        <li>From: { fromAccount }</li>
                        <li>To: { toAccount }</li>
                        <li>Type: { t.type }</li>
                        <li>Amount: { amount }</li>
                      </ul>
                      <ul>
                        <li>Description: { t.description }</li>
                      </ul>
                    </div>
                  </div>
                </li>
              )
            } else if (t.cardType === 'batch_transaction') {
              return (
                <li>
                  <div className="timeline-badge"><i className="glyphicon glyphicon-check"></i></div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Batch Transaction</h4>
                      <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> Created At { new Date(t.created_at).toString() }</small></p>
                      <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> Updated At { new Date(t.updated_at).toString() }</small></p>
                    </div>
                    <div className="timeline-body">
                      <ul>
                        <li>From: { t.from_user_name }</li>
                        <li>Amount: { t.amount }</li>
                        <li>Type: { t.type }</li>
                        <li>Type Method: { t.type_method }</li>
                        <li>State: { t.state }</li>
                      </ul>
                      <ul>
                        <li>Description: { t.description }</li>
                      </ul>
                    </div>
                  </div>
                </li>
              )
            }
          })
        }
      </ul>
    </div>
  )
}