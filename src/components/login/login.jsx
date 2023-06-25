import React, { useState } from 'react'
import { Input } from '../../ui'
import { Icon } from '../../constants'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { userLoggedIn } from '../../slice/auth'

const Login = () => {
   const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const {isLoading} = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(userLoggedIn())
  }
 
  return (
    <div className='text-center'>
      <main className="form-signin w-25 m-auto">
      <form>
       <span >{Icon}</span>
        <h1 className="h3 mb-3 fw-normal">Login</h1>
      
      <Input type="email" label="Email address" state={email} setState={setEmail}/>
      <Input type="password" label="password" state={password} setState={setPassword}/>

        
        <button className="w-100 btn btn-lg btn-primary mt-2"  type="submit" onClick={submitHandler}>
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