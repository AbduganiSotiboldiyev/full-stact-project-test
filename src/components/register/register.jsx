import React from 'react'
import {Input} from "../../ui"
import { Icon } from '../../constants'
import { useState } from 'react'
const Register = () => {
  const[userName, setUsername] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  return (
    <div className='text-center'>
      <main className="form-signin w-25 m-auto">
      <form>
       <span >{Icon}</span>
        <h1 className="h3 mb-3 fw-normal">Please register</h1>
      <Input type="text" label="Username" state={userName} setState={setUsername} />
      <Input type="email" label="Email address" state={email} setState={setEmail}/>
      <Input type="password" label="password" state={password} setState={setPassword}/>

        
        <button className="w-100 btn btn-lg btn-primary mt-2" type="submit">Sign in</button>
       
      </form>
    </main>
    </div>
  )
}

export default Register