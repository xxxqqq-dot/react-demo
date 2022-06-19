import { INC_LEARN_LIST, DEC_LEARN_LIST } from '../contant'

export function incLearnList(data) {
  return {
    type: INC_LEARN_LIST,
    data
  }
}

export function decLearnList(data) {
  return {
    type: DEC_LEARN_LIST,
    data
  }
}