import React, { useEffect } from 'react'
import { Routes,Route } from 'react-router-dom'
import { Login, Main, Navbar, Register } from './components'
import AuthService from './sevices/auth'
import { useDispatch } from 'react-redux'
import { signUserSuccess } from './slice/auth'
import { getItem } from './helpers/persistance-storage'

const App = () => {
  const dispatch = useDispatch()
  const  getUser = async () => {
    const response = await AuthService.getUser()
    dispatch(signUserSuccess(response.user))
  }
  useEffect(() => {
    const token = getItem("token")
    if(token){
      getUser();

    }
  },[])
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={< Main/>}/>
        <Route path='/login' element={< Login/>}/>
        <Route path='/register' element={< Register/>}/>

      </Routes>
    </div>
  )
}

export default App
