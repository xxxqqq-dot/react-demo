import { INC_COMPLETE_LIST, DEC_COMPLETE_LIST } from '../contant'

export function incCompleteList(data) {
  return {
    type: INC_COMPLETE_LIST,
    data
  }
}

export function decCompleteList(data) {
  return {
    type: DEC_COMPLETE_LIST,
    data
  }
}