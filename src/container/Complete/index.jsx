import React from 'react'
import { connect } from 'react-redux'
import { addPrepareList, decPrepareList, } from '../../store/action/prepareAction'
import { incLearnList, decLearnList } from '../../store/action/learnAction'
import { incCompleteList, decCompleteList } from '../../store/action/completeAction'
import TaskComponent from '../TaskComponent/TaskComponent'

function Complete(props) {

  return <TaskComponent list={props.completeList} title='complete' name='complete' color='#e2e2e2'/>
}

const mapStateToProps = (state) => ({
  prepareList: state.prepareList,
  learnList: state.learnList,
  completeList: state.completeList
})

const mapDispatchToProps = {
  addPrepareList,
  decPrepareList,
  incLearnList,
  incCompleteList,
  decLearnList,
  decCompleteList
}

export default connect(mapStateToProps, mapDispatchToProps)(Complete)
