// import Immutable from 'immutable'

// const defaultState = Immutable.List()
const defaultState = {}

export default function taskReducer(state = defaultState, action) {
  switch(action.type) {
    case 'SELECT_TASK':
      return Object.assign({}, state, {
        name: action.name,
        step: 0
      })
    case 'UPDATE_TASK_DATA':
      return Object.assign({}, state, {
        data: action.data,
        step: state.step + 1
      })
    case 'CLEAR_TASK':
      return {}
    case 'DISPLAY_ERROR':
      return Object.assign({}, state, {
        error: action.error
      })
    default:
      return state
  }
}