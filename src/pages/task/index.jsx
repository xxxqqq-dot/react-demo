import React from 'react'
import task from './index.module.scss'
import Learning from '../../container/Learning'
import PrepareStydy from '../../container/PrepareStudy'
import Complete from '../../container/Complete'

export default function Task(props) {


  return (
    <div className={task.taskContainer}>
      <PrepareStydy>
        
        <button className={task.addBtn}>+</button>
      </PrepareStydy>

      <Learning />

      <Complete />

    </div>
  )
}
