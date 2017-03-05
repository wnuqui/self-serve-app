import { connect } from 'react-redux'
import * as TaskActions from '../actions/Task'
import TaskSelector from '../components/TaskSelector'

const mapDispatchToProps = (dispatch) => {
  return {
    selectTask: (taskName) => {
      console.log(taskName)
      // dispatch(selectTask(taskName))
    }
  }
}

export default connect(mapDispatchToProps)(TaskSelector)