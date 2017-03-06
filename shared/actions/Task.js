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

export function fetchTaskData(url, validate) {
  return function(dispatch) {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw Error(res.statusText)
        
        return res
      })
      .then(res => res.json())
      .then(data => {
        if (validate(data)) {
          dispatch(updateTaskData(data))
        } else {
          // inspect error
          let error = data.error
          dispatch(displayError(error))
        }
      })
      .catch((err) => { console.log(err) })
  }
}