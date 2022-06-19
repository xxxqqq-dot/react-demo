import React, { useState, useRef, useEffect } from 'react'
import task from './index.module.scss'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { addPrepareList } from '../../store/action/prepareAction'
import TaskComponent from '../TaskComponent/TaskComponent'

function PrepareStydy(props) {
  const [isShow, setIsShow] = useState(false)
  const iptRef = useRef(null)

  useEffect(() => {
    //输入框展示后自动获取焦点
    if(isShow) {
      iptRef.current.focus()
    }
  }, [isShow])

  function showIpt() {
    setIsShow(true)
  }

  function addList(e) {
    
    setIsShow(false)
    if (!iptRef.current.value.trim()) return

    const obj = {
      id: nanoid(),
      title: iptRef.current.value.trim()
    }

    //隐藏输入框
    

    //修改redux中prepareList
    props.addPrepareList(obj)
  }

  function keyUpAddList(e) {
    if (e.code !== 'Enter') return
    addList()
  }

  function blurAddList() {
    addList()
  }

  return (
    <TaskComponent list={props.prepareList} title='prepare to study' name='prepare' color='#f5e0e1'>
      {
          isShow ?
            <input className={task.ipt} type="text"
              ref={iptRef} placeholder='失去焦点或按回车键添加'
              onBlur={blurAddList}
              onKeyUp={keyUpAddList} />
            : ''
        }
      <button className={task.addBtn} onClick={showIpt}>+</button>

    </TaskComponent>
  )
}

const mapStateToProps = (state) => ({
  prepareList: state.prepareList
})

const mapDispatchToProps = {
  addPrepareList
}

export default connect(mapStateToProps, mapDispatchToProps)(PrepareStydy)