// import { lazy } from "react"
import { Navigate } from "react-router-dom"
import LazyLoad from "../utils/lazyload"
// import Login from "../pages/login"
// import Task from "../pages/task"
// const Login = lazy(() => import('../pages/login'))
// const Task = lazy(() => import('../pages/task'))
const routes = [
  {
    path: '/',
    element: <Navigate to='/login' />
  },
  {
    path: '/login',
    element: LazyLoad('login')
  },
  {
    path: '/task',
    element: LazyLoad('task')
  }
]
export default routes