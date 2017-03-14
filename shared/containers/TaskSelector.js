import { connect } from 'react-redux'
import { selectTask } from '../actions/Task'
import TaskSelector from '../components/TaskSelector'

const mapStateToProps = (state) => {
  return {
    ct: state.task ? state.task.name : null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectTask: (taskName) => {
      dispatch(selectTask(taskName))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskSelector)