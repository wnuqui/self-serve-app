// import Immutable from 'immutable'

// const defaultState = Immutable.List()
const defaultState = {}

export default function taskReducer(state = defaultState, action) {
  switch(action.type) {
    case 'SELECT_TASK':
      return Object.assign({}, state, {
        name: action.name
      })
    case 'MOVE':
      return Object.assign({}, state, {
        step: action.step,
        data: action.data
      })
    default:
      return state
  }
}