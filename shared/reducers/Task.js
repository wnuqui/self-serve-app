const initialState = {}

export default function taskReducer(state = initialState, action) {
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