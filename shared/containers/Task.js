import { connect } from 'react-redux'
import { fetchItem, fetchTaskData } from '../actions/Task'
import Task from '../components/Task/index'

const mapStateToProps = (state) => {
  return {
    task: state.task
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItem: (uuid) => {
      dispatch(fetchItem(uuid))
    },
    fetchTaskData: (url, validate) => {
      dispatch(fetchTaskData(url, validate))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task)