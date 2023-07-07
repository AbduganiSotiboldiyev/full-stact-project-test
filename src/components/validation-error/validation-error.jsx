import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'

const ValidationError = () => {
    const {error,loggedIn} = useSelector(state => state.auth)

    const errorMessage = useCallback(() => {
        return Object.keys(error).map(name => {
            const msg = error[name]
            return `${name} - ${msg}`
        })
    }, [error])
    
  return  (
  <>
            {!loggedIn ? 
                (
                    error !== null && errorMessage().map((error) => (
                        <div className="alert alert-danger m-1 p-1" role="alert" key={error}>{error}</div>
                    ))

                ) :
            ''
        }
  </>
            
            
        
  )
}

export default ValidationError