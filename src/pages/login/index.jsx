import React from 'react'
import login from './index.module.scss'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  function toTask() {
    navigate('/task')
  }
  return (
    <div className={login.loginContainer} onClick={toTask}>Start App</div>
  )
}
