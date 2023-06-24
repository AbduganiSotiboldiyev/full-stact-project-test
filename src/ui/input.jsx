import React from 'react'

const Input = ({label, type,state,setState}) => {
  return (
     <div class="form-floating">
          <input 
            type={type}
            class="form-control mt-2"
            id="floatingInput" 
            placeholder={label}
            value={state}
            onChange={e => setState(e.target.value)}
            />
          <label for="floatingInput">{label}</label>
    </div>
  )
}

export default Input