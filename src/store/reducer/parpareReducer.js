import produce from 'immer'
import { ADD_PREPARE_LIST, DEC_PREPARE_LIST } from '../contant'
const initList = []
export default function parpareReducer(preState = initList, action) {
  const { type, data } = action
  let newList = []
  switch(type) {
    case ADD_PREPARE_LIST:

      const isAdd = preState.find(item => {
        return item.title === data.title
      })

      newList = produce(preState, drafState => {
        !isAdd&&drafState.unshift(data)
      })
      return newList

    case DEC_PREPARE_LIST:
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

