export function selectTask(name) {
  return {
    type: 'SELECT_TASK',
    date: Date.now(),
    name
  }
}

export function move(step, data) {
  return {
    type: 'MOVE',
    date: Date.now(),
    step,
    data
  }
}