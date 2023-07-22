import React, { useState } from 'react'
import { AddForm } from '../../ui'
import ArticleService from '../../sevices/article'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createArticleFailure, createArticleStart, createArticleSucceess } from '../../slice/articleSlice'

const CreateArticle = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [body, setBody] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {isLoading} = useSelector(state => state.article)

const formSubmit = async (e) => {
  e.preventDefault()
  const article = {title, description, body}
  dispatch(createArticleStart())
  try {
    const response = await ArticleService.postArticle(article)
    dispatch(createArticleSucceess())
    navigate('/')
    console.log(response)
  } catch (error) {
    dispatch(createArticleFailure())
    console.log(error)
  }
}
 
const formProps = {title, description,body,setTitle,setDescription,setBody,formSubmit}

  return (
    <div>
      <h2 className='fs-2 fw-bold text-center'> Create article</h2>
      <AddForm {...formProps}/>
    </div>
  )
}

export default CreateArticle