import produce from 'immer'
import { INC_LEARN_LIST, DEC_LEARN_LIST } from '../contant'
const initList = []
export default function learnReducer(preState = initList, action) {
  const { type, data } = action
  let newList = []
  switch(type) {
    case INC_LEARN_LIST:

      //判断将要添加的数据是否已经存在
      const isAdd = preState.find(item => {
        return item.title === data.title
      })

      newList = produce(preState, drafState => {
        //将要添加的数据不存在在添加
        !isAdd&&drafState.unshift(data)
      })
      return newList
    case DEC_LEARN_LIST:
      
      let index = preState.findIndex(item => {
        return item.id === data.id
      })

      newList = produce(preState, drafState => {
        data&&drafState.splice(index, 1)
      })
      return newList

    default:
      return preState
  }
}

