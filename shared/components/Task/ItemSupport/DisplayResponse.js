import React from 'react'

export default ({ task }) => {
  const submitForm = (e) => {
    e.preventDefault()
  }
  
  const states = {
    22000: 'Pending',
    22100: 'Payment Required',
    22110: 'Wire Pending',
    22111: 'Paypal Pending',
    22120: 'Passive',
    22150: 'Payment Pending',
    22175: 'Payment Held',
    22180: 'Payment Authorized',
    22195: 'Voided',
    22190: 'Fraud Hold',
    22200: 'Payment Deposited',
    22300: 'Work Completed',
    22400: 'Problem Flagged',
    22410: 'Problem Resolve Requested',
    22420: 'Problem Escalated',
    22500: 'Completed',
    22550: 'Release Pending',
    22560: 'Partial Release Pending',
    22565: 'Partial Release Checking',
    22575: 'Cancelled',
    22600: 'Refunded',
    22650: 'Refund Flagged',
    22610: 'Refund Pending',
    22670: 'Off Platform Refunded',
    22700: 'Partial Completed',
    22750: 'Completed Partially Refunded',
    22800: 'Partial Paid',
    22680: 'Off Platform Chargedback',
    22900: 'Restored'
  }
  
  let item = task.data.item
  let transactions = task.data.transactions
  let batch_transactions = task.data.batch_transactions
  console.log(item, transactions, batch_transactions)
  
  return (
    <div>
      <h1>{ item.name }</h1>
      <ul>
        <li>{ item.amount }</li>
        <li>{ item.state }</li>
        <li>{ states[item.status] }</li>
      </ul>
    </div>
  )
}