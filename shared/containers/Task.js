import { connect } from 'react-redux'
import { fetchTaskData, errorTaskData, clearTask } from '../actions/Task'
import Task from '../components/Task'

const mapStateToProps = (state) => {
  return {
    task: state.task
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTaskData: (url, validate) => {
      dispatch(fetchTaskData(url, validate))
    },
    errorTaskData: (error) => {
      dispatch(errorTaskData(error))
    },
    clearTask: () => {
      dispatch(clearTask())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task)