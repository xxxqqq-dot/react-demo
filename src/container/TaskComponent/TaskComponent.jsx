import React, { useRef } from 'react'
import task from './index.module.scss'
import { connect } from 'react-redux'
import { addPrepareList, decPrepareList, } from '../../store/action/prepareAction'
import { incLearnList, decLearnList } from '../../store/action/learnAction'
import { incCompleteList, decCompleteList } from '../../store/action/completeAction'
import styled from 'styled-components'
const StyledDiv = styled.div`
    background-color: ${(props) => props.color || 'skyblue'}
  `

function PrepareStydy(props) {
  
  //开始拖拽事件
  function handleDragStart(e, data) {

    //根据父组件传入的name属性保存相应的值进行数据交换，
    //传入的name值为'prepare','learn','complete'之一，对应表示task组件中的三个子组件
    let dataName = props.name
    e.dataTransfer.setData(dataName, JSON.stringify({ id: data.id, title: data.title }));
  }
  const eleRef = useRef(null)

  //进入目标元素事件
  function handleDragEnter() {

    eleRef.current.classList.add(task.activeClass);
  }

  function handleDragLeave() {
    eleRef.current.classList.remove(task.activeClass);
  }

  function handleDragover(e) {
    e.preventDefault();
  }

  function handleDrop(e) {

    eleRef.current.classList.remove(task.activeClass);

    let data = null

    //判断当前进入的目标组件为哪个(prepare,learn,complete)之后，在继续接下来的操作
    switch (props.name) {
      case 'prepare':
        return
      case 'learn':
        //当目标组件为learn组件时，只能获取从prepare组件传递的数据，
        //若获取的数据不是从prepare组件拖拽过来的，则直接返回，否则继续接下来的操作
        data = e.dataTransfer.getData('prepare') ? JSON.parse(e.dataTransfer.getData('prepare')) : null;
        if (!data) return
        props.incLearnList(data);
        props.decPrepareList(data);
        break;
      case 'complete':
        data = e.dataTransfer.getData('learn') ? JSON.parse(e.dataTransfer.getData('learn')) : null;
        if (!data) return
        props.incCompleteList(data)
        props.decLearnList(data)
        break;
      default:
        return
    }
  }

  function decList(data) {
    switch (props.name) {
      case 'prepare':
        props.decPrepareList(data);
        return
      case 'learn':
        if (!data) return
        props.decLearnList(data);
        break;
      case 'complete':
        if (!data) return
        props.decCompleteList(data)
        break;
      default:
        return
    }
  }

  return (
    <div className={task.taskContainer}>
      <StyledDiv className={task.taskTitle} color={props.color}>{props.title}</StyledDiv>
      <StyledDiv className={`${task.taskContext} ${task.context}`}
        color={props.color}
        ref={eleRef}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragover}
        onDrop={handleDrop}
      >
        {
          props.list.map(item => {
            return (
              <div className={task.item}
                draggable
                onDragStart={e => handleDragStart(e, item)}
                key={item.id}>
                {item.title}
                <button onClick={() => decList(item)}>x</button>
              </div>
            )
          })

        }

        {props.children}
      </StyledDiv>
    </div>
  )
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

export default connect(mapStateToProps, mapDispatchToProps)(PrepareStydy)