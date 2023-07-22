import React from 'react'

const TextArea = ({label, state,setState,height}) => {
  return (
    <div>
        <div className="form-floating">
            <textarea className="form-control"
             placeholder={label} 
             id="floatingTextarea2" 
             style={{height: height,margin: "2rem auto"}}
             value={state}
             onChange={(e) => setState(e.target.value)}
             ></textarea>
            <label htmlFor="floatingTextarea2">{label}</label>
        </div>
    </div>
  )
}

export default TextArea