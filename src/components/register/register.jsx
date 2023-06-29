import React from 'react'
import {Input} from "../../ui"
import { Icon } from '../../constants'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { signUserFailure, signUserStart, signUserSuccess} from '../../slice/auth'
import AuthService from '../../sevices/auth'

const Register = () => {
  const[userName, setUsername] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const {isLoading} = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const submitHandler = async (e) => {
    e.preventDefault()
    dispatch(signUserStart())
    const user = {username : userName, email, password}
    try {
      const response = await AuthService.UserRegister(user)
      dispatch(signUserSuccess(response.user))
    } catch (error) {
      console.log(error.response.data.errors)
      dispatch(signUserFailure(error.response.data.errors))
    }
  }


  return (
    <div className='text-center'>
      <main className="form-signin w-25 m-auto">
      <form>
       <span >{Icon}</span>
        <h1 className="h3 mb-3 fw-normal">Please register</h1>
      <Input type="text" label="Username" state={userName} setState={setUsername} />
      <Input type="email" label="Email address" state={email} setState={setEmail}/>
      <Input type="password" label="password" state={password} setState={setPassword}/>

        
        <button className="w-100 btn btn-lg btn-primary mt-2" type="submit" disabled={isLoading} onClick={submitHandler}>
          {isLoading ? "signing in ..." : "Register"}
        </button>
       
      </form>
    </main>
    </div>
  )
}

export default Register