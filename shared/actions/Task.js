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
              
              fetch(`http://api.foo.localhost:3001/items/${uuid}/batch_transactions`)
                .then(r3 => r3.json())
                .then((r3) => {
                  let itemData = {
                    item: r1.items,
                    transactions: r2.transactions,
                    batch_transactions: r3.batch_transactions
                  }
                  
                  dispatch(updateTaskData(itemData))
                })
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