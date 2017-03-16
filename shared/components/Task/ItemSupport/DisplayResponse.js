import React from 'react'

export default ({ task }) => {
  const submitForm = (e) => {
    e.preventDefault()
  }
  
  // localhost external_id: 9638d1bbd54b9e9ca057ee2d8052aee8
  // localhost uuid: c6233642-83a3-4d29-be31-e374248d6e57
  // prelive external_id: 8457bdd9-bdd4-4ca0-87a4-daaa55500829
  let item = task.data.item || {}
  let timeline = task.data.timeline || []
  // let transactions = task.data.transactions || []
  // let batch_transactions = task.data.batch_transactions || []
  // let itemEvents = task.data.events || []
  console.log(item, timeline)
  
  
  return (
    <div className="container">
      <div className="page-header">
        <h1 id="timeline">{ item.name }</h1>
      </div>
      <ul className="timeline">
        {
          timeline.map((t) => {
            if (t.cardType === 'event') {
              return (
                <li>
                  <div className="timeline-badge"><i className="glyphicon glyphicon-check"></i></div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Event: { t.action }</h4>
                      <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> Created At { new Date(t.created_at).toString() }</small></p>
                      <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> Resource Updated At { t.current_attributes ? new Date(t.resource_updated_at).toString() : 'NA' }</small></p>
                    </div>
                    <div className="timeline-body">
                      <ul>
                        <li>From: { t.from_state_name }</li>
                        <li>To: { t.to_state_name }</li>
                      </ul>
                    </div>
                  </div>
                </li>
              )
            } else if (t.cardType === 'transaction') {
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
  
  // return (
  //   <div>
  //     <h2>{ item.name }</h2>
  //     <h3>Transactions</h3>
  //     <table className="table">
  //       <thead>
  //         <tr>
  //           <th>From</th>
  //           <th>To</th>
  //           <th>Type</th>
  //           <th>Amount</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {
  //           transactions.sort((a, b) => {
  //             return new Date(a.created_at) - new Date(b.created_at)
  //           }).map((transaction) => {
  //             var fromAccount = transaction.description.split(" from ")[1].split(" for ")[0]
  //             var toAccount = transaction.description.split(" to ")[1].split(" by ")[0]
  //             
  //             if (fromAccount === 'Credit Card') fromAccount = `${transaction.related.transactions[0].user_name}'s ${fromAccount}`
  //             if (toAccount === 'Wallet Account') toAccount = `${transaction.related.transactions[0].user_name}'s ${toAccount}`
  //             
  //             let amount = parseFloat(Math.round((transaction.amount / 100.00) * 100) / 100).toFixed(2);
  //             
  //             return (
  //               <tr>
  //                 <td>{ fromAccount }</td>
  //                 <td>{ toAccount }</td>
  //                 <td>{ transaction.type }</td>
  //                 <td>${ amount }</td>
  //               </tr>
  //             )
  //           })
  //         }
  //       </tbody>
  //     </table>
  //     <h3>Batch Transactions</h3>
  //     <table className="table">
  //       <thead>
  //         <tr>
  //           <th>Description</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {
  //           batch_transactions.sort((a, b) => {
  //             return new Date(a.created_at) - new Date(b.created_at)
  //           }).map((transaction) => {
  //             return (
  //               <tr>
  //                 <td>{ transaction.description }</td>
  //               </tr>
  //             )
  //           })
  //         }
  //       </tbody>
  //     </table>
  //   </div>
  // )
}