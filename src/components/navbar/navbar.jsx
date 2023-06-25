import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom pt-3 container">
     <Link to={"/"} style={{listStyle : "none", textDecoration : "none"}} >
        <h6>DevAbdu</h6>
     </Link>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <Link to={"/login"} className='me-3 py-2 text-dark text-decoration-none' > Login </Link>
        <Link to={"/register"} className='me-3 py-2 text-dark text-decoration-none' > Register </Link>

     
      </nav>
    </div>
  )
}

export default Navbar