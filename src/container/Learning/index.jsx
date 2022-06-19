import React from 'react'
import { connect } from 'react-redux'
import { addPrepareList, decPrepareList } from '../../store/action/prepareAction'
import { incLearnList } from '../../store/action/learnAction'
import TaskComponent from '../TaskComponent/TaskComponent'


function Learning(props) {

  return <TaskComponent list={props.learnList} title='learning' name='learn' color='#a3d09b'/>
}

const mapStateToProps = (state) => ({
  prepareList: state.prepareList,
  learnList: state.learnList
})

const mapDispatchToProps = {
  addPrepareList,
  decPrepareList,
  incLearnList
}

export default connect(mapStateToProps, mapDispatchToProps)(Learning)
