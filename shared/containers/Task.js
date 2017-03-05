import { connect } from 'react-redux'
import * as TaskActions from '../actions/Task'
import Task from '../components/Task'

const mapStateToProps = (state) => {
  return state.task
}

export default connect(mapStateToProps)(Task)