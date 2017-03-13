// import Immutable from 'immutable'

// const defaultState = Immutable.List()
const defaultState = {
  name: 'ITEM_SUPPORT',
  step: 0
}

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
        step: state.step += 1,
        error: null
      })
    case 'DISPLAY_ERROR':
      return Object.assign({}, state, {
        error: action.error
      })
    case 'CLEAR_TASK':
      return {}
    default:
      return state
  }
}