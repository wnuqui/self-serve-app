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
    var urls = [
      `http://api.foo.localhost:3001/items/${uuid}`,
      `http://api.foo.localhost:3001/items/${uuid}/transactions`,
      `http://api.foo.localhost:3001/items/${uuid}/batch_transactions`
    ]
    
    var promises = urls.map(fetch)
    
    Promise.all(promises).then((responses) => {
      responses.forEach((response) => {
        console.log(response)
      })
    })
    // fetch(opts.url, opts)
    //   .then((response) => {
    //     return response.json()
    //   })
    //   .then((response) => {
    //     if (validate(response)) {
    //       dispatch(updateTaskData(response))
    //     } else {
    //       dispatch(displayError(response.errors))
    //     }
    //   })
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