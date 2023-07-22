import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { userLogout } from '../../slice/auth'
import { removeItem } from '../../helpers/persistance-storage'

const Navbar = () => {
  const  {loggedIn,user} = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logoutHandler = () => {
    dispatch(userLogout())
    navigate('/login')
    removeItem("token")
  }
  return (
   <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom pt-3 container">
     <Link to={"/"} style={{listStyle : "none", textDecoration : "none"}} >
        <h6>DevAbdu</h6>
     </Link>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        {loggedIn ? 
        <>
          <p className='me-3 py-2  m-0 text-dark text-decoration-none'> {user.username}</p>
          <Link to={"/create-article"} className='me-3 py-2 text-dark text-decoration-none' > Create </Link>

          <button className="btn btn-outline-danger " onClick={logoutHandler} >Logout</button>
        </> :
        <>
          <Link to={"/login"} className='me-3 py-2 text-dark text-decoration-none' > Login </Link>
          <Link to={"/register"} className='me-3 py-2 text-dark text-decoration-none' > Register </Link>
        </>}

     
      </nav>
    </div>
  )
}

export default Navbar