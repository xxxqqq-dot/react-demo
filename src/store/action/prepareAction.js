import { ADD_PREPARE_LIST, DEC_PREPARE_LIST } from '../contant'
export function addPrepareList(data) {
  return {
    type: ADD_PREPARE_LIST,
    data
  }
}

export function decPrepareList(data) {
  return {
    type: DEC_PREPARE_LIST,
    data
  }
}