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