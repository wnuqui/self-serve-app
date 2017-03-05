import { connect } from 'react-redux'
import * as TaskActions from '../actions/Task'
import Task from '../components/Task'

const mapStateToProps = (state) => {
  return {
    task: state.task
  }
}

export default connect(mapStateToProps)(Task)