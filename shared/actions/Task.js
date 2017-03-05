export function selectTask(name) {
  return {
    type: 'SELECT_TASK',
    date: Date.now(),
    name
  }
}

export function updateTask(data, step) {
  return {
    type: 'UPDATE_TASK',
    date: Date.now(),
    data,
    step
  }
}

export function clearTask(data, step) {
  return {
    type: 'CLEAR_TASK',
    date: Date.now()
  }
}