import React from 'react'

const Input = ({label, type,state,setState}) => {
  return (
     <div className="form-floating">
          <input 
            type={type}
            className="form-control mt-2"
            // id="floatingInput" 
            placeholder={label}
            value={state}
            onChange={e => setState(e.target.value)}
            />
          <label htmlFor="floatingInput">{label}</label>
    </div>
  )
}

export default Input