import React, { useState,useEffect } from 'react'
import { Input } from '../../ui'
import { Icon } from '../../constants'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { signUserFailure, signUserStart, signUserSuccess } from '../../slice/auth'
import AuthService from '../../sevices/auth'
import ValidationError from '../validation-error/validation-error'


const Login = () => {
   const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const navigate = useNavigate()
  const {isLoading,loggedIn} = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const submitHandler =async (e) => {
    e.preventDefault()
    dispatch(signUserStart())
    navigate('/')
    const user = {email, password}
    try {
      const response = await AuthService.userLogin(user)
      dispatch(signUserSuccess(response.user))
      
    } catch (error) {
      dispatch(signUserFailure(error.response.data.errors))  
    }

  }
  useEffect(() =>{
    if(loggedIn) {
      navigate('/')
    }
  },[loggedIn])
 
  return (
    <div className='text-center'>
      <main className="form-signin w-25 m-auto">
      <form>
       <span >{Icon}</span>
        <h1 className="h3 mb-3 fw-normal">Login</h1>
        <ValidationError/>
    
      <Input type="email" label="Email address" state={email} setState={setEmail}/>
      <Input type="password" label="password" state={password} setState={setPassword}/>

        
        <button className="w-100 btn btn-lg btn-primary mt-2" disabled={isLoading} type="submit" onClick={submitHandler}>
          {isLoading ? "Please wait..." : "Login"}
        </button>
        <div>
          <p>If you don't have an account please 
            <Link to="/register"> Register </Link>
             first.
          </p>
        </div>
       
      </form>
    </main>
    </div>
  )
}

export default Login