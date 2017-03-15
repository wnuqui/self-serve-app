import React from 'react'

export default ({ task }) => {
  const submitForm = (e) => {
    e.preventDefault()
  }
  
  // 9638d1bbd54b9e9ca057ee2d8052aee8
  let item = task.data.item || {}
  let transactions = task.data.transactions || []
  let batch_transactions = task.data.batch_transactions || []
  console.log(item, transactions, batch_transactions)
  
  return (
    <div>
      <h2>{ item.name }</h2>
      <h3>Transactions</h3>
      <table className="table">
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {
            transactions.sort((a, b) => {
              return new Date(a.created_at) - new Date(b.created_at)
            }).map((transaction) => {
              var fromAccount = transaction.description.split(" from ")[1].split(" for ")[0]
              var toAccount = transaction.description.split(" to ")[1].split(" by ")[0]
              
              if (fromAccount === 'Credit Card') fromAccount = `${transaction.related.transactions[0].user_name}'s ${fromAccount}`
              if (toAccount === 'Wallet Account') toAccount = `${transaction.related.transactions[0].user_name}'s ${toAccount}`
              
              let amount = parseFloat(Math.round((transaction.amount / 100.00) * 100) / 100).toFixed(2);
              
              return (
                <tr>
                  <td>{ fromAccount }</td>
                  <td>{ toAccount }</td>
                  <td>{ transaction.type }</td>
                  <td>${ amount }</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <h3>Batch Transactions</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {
            batch_transactions.sort((a, b) => {
              return new Date(a.created_at) - new Date(b.created_at)
            }).map((transaction) => {
              return (
                <tr>
                  <td>{ transaction.description }</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}