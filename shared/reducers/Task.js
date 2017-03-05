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
    case 'UPDATE_TASK':
      return Object.assign({}, state, {
        data: action.data,
        step: action.step
      })
    case 'CLEAR_TASK':
      return {}
    default:
      return state
  }
}