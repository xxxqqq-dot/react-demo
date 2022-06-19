import produce from 'immer'
import { INC_COMPLETE_LIST, DEC_COMPLETE_LIST } from '../contant'
const initList = []
export default function parpareReducer(preState = initList, action) {
  const { type, data } = action
  let newList = []
  switch (type) {
    case INC_COMPLETE_LIST:

      const isAdd = preState.find(item => {
        return item.title === data.title
      })

      newList = produce(preState, drafState => {
        !isAdd&&drafState.unshift(data)
      })
      return newList

    case DEC_COMPLETE_LIST:
      
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

