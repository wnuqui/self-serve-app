import fetch from 'isomorphic-fetch'

export function selectTask(name) {
  return {
    type: 'SELECT_TASK',
    date: Date.now(),
    name
  }
}

export function updateTaskData(data) {
  return {
    type: 'UPDATE_TASK_DATA',
    date: Date.now(),
    data
  }
}

export function clearTask(data) {
  return {
    type: 'CLEAR_TASK',
    date: Date.now()
  }
}

export function displayError(error) {
  return {
    type: 'DISPLAY_ERROR',
    date: Date.now(),
    error
  }
}

export function fetchItem(uuid) {
  return function(dispatch) {
    fetch(`http://api.foo.localhost:3001/items/${uuid}`)
      .then(r1 => r1.json())
      .then((r1) => {
        
        if (r1.errors) {
          dispatch(displayError(JSON.stringify(r1.errors)))
        } else {
          fetch(`http://api.foo.localhost:3001/items/${uuid}/transactions`)
            .then(r2 => r2.json())
            .then((r2) => {
              
              fetch(`http://api.foo.localhost:3001/items/${uuid}/events`)
                .then(r3 => r3.json())
                .then((r3) => {
                  var timeline = [].concat(r2.transactions.map((t) => {
                    t.cardType = 'transaction'
                    return t
                  })).concat(r3.events.map((e) => {
                    e.cardType = 'event'
                    if (e.current_attributes) e.resource_updated_at = JSON.parse(e.current_attributes).updated_at
                    return e
                  })).concat([
                    {
                      cardType: 'event',
                      action: 'Item Created',
                      resource_updated_at: r1.items.created_at
                    }
                  ])
                  
                  timeline.sort((a, b) => {
                    let aDate = new Date(a.cardType === 'transaction' ? a.updated_at : a.resource_updated_at)
                    let bDate = new Date(b.cardType === 'transaction' ? b.updated_at : b.resource_updated_at)
                    
                    return aDate - bDate
                    // return new Date(a.created_at) - new Date(b.created_at)
                  })
                  
                  let itemData = {
                    item: r1.items,
                    timeline: timeline
                    // transactions: r2.transactions,
                    // events: r3.events
                  }
                  
                  dispatch(updateTaskData(itemData))
                })
            })
        }
      })
  }
}

export function fetchAccount(uuid) {
  return function(dispatch) {
    fetch(`http://api.foo.localhost:3001/transactions?account_id=${uuid}`)
      .then(r1 => r1.json())
      .then((r1) => {
        
        if (r1.errors) {
          dispatch(displayError(JSON.stringify(r1.errors)))
        } else {
          fetch(`http://api.foo.localhost:3001/batch_transactions?account_id=${uuid}`)
            .then(r2 => r2.json())
            .then((r2) => {
              let transactions = r1.transactions || []
              let batch_transactions = r2.batch_transactions || []
              
              console.log(r2)
              
              var timeline = [].concat(transactions.map((t) => {
                t.cardType = 'transaction'
                return t
              })).concat(batch_transactions.map((e) => {
                e.cardType = 'batch_transaction'
                return e
              }))              
              
              timeline.sort((a, b) => {
                // let aDate = new Date(a.cardType === 'transaction' ? a.updated_at : a.resource_updated_at)
                // let bDate = new Date(b.cardType === 'transaction' ? b.updated_at : b.resource_updated_at)
                return new Date(a.updated_at) - new Date(b.updated_at)
              })
              
              let itemData = {
                account_id: uuid,
                timeline: timeline
              }
              
              dispatch(updateTaskData(itemData))
            })
        }
      })
  }
}

export function fetchTaskData(opts, validate) {
  return function(dispatch) {
    console.log(opts)
    fetch(opts.url, opts)
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        if (validate(response)) {
          dispatch(updateTaskData(response))
        } else {
          dispatch(displayError(response.errors))
        }
      })
  }
}