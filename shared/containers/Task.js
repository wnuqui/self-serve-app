import { connect } from 'react-redux'
import { updateTask, clearTask } from '../actions/Task'
import Task from '../components/Task'

const mapStateToProps = (state) => {
  return {
    task: state.task
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateTask: (data, step) => {
      dispatch(updateTask(data, step))
    },
    clearTask: () => {
      dispatch(clearTask())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task)