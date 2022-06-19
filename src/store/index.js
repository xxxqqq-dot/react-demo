import { configureStore } from '@reduxjs/toolkit'
import parpareReducer from './reducer/parpareReducer'
import learnReducer from './reducer/learnReducer'
import completeReducer from './reducer/completeReducer'
export default configureStore({
  reducer: {
    prepareList: parpareReducer,
    learnList: learnReducer,
    completeList: completeReducer
  }
})

