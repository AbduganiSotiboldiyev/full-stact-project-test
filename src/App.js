import React, { useEffect } from 'react'
import { Routes,Route } from 'react-router-dom'
import { ArticleDetail, CreateArticle, EditArticle, Login, Main, Navbar, Register } from './components'
import AuthService from './sevices/auth'
import { useDispatch } from 'react-redux'
import { signUserSuccess } from './slice/auth'
import { getItem } from './helpers/persistance-storage'
import ArticleService from './sevices/article'
import { articleStart, articleSuccess } from './slice/articleSlice'

const App = () => {
  const dispatch = useDispatch()
  // get user
  const  getUser = async () => {
    const response = await AuthService.getUser()
    dispatch(signUserSuccess(response.user))
  }

 

  useEffect(() => {
    const token = getItem("token")
    if(token){
      getUser();

    }
    
  },[])
  return (
    <div >
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path='/' element={< Main/>}/>
          <Route path='/login' element={< Login/>}/>
          <Route path='/register' element={< Register/>}/>
          <Route path='/article/:slug' element={<ArticleDetail/>}/>c
          <Route path='/create-article' element={<CreateArticle/>}/>
          <Route path='/edit-article/:slug' element={<EditArticle/>}/>
        </Routes>

      </div>
    </div>
  )
}

export default App
