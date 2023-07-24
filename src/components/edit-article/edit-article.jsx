import React, { useEffect, useState } from 'react'
import { AddForm } from '../../ui'
import ArticleService from '../../sevices/article'
import { createArticleFailure, createArticleStart, createArticleSucceess, getArticleSuccess, getarticleStart } from '../../slice/articleSlice'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

const EditArticle = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [body, setBody] = useState('')
  const {slug} = useParams()
  const navigate =  useNavigate()
  const dispatch = useDispatch()
    const getArticleDetail = async () => {
    dispatch(getarticleStart())
    try {
      const response = await ArticleService.getArticlesDetails(slug)
     
      setTitle(response.article.title)
      setDescription(response.article.description)
      setBody(response.article.body)
      dispatch(getArticleSuccess(response.article))
      
    } catch (error) {
      console.log(error);
    }
  }

  
  useEffect(() => {
    getArticleDetail()
  },[])

  const formSubmit =async (e) => {
    e.preventDefault();
    dispatch(createArticleStart())
    const article = {title, description, body}
    try {
      await ArticleService.editArticle(slug, article)
      dispatch(createArticleSucceess())
      navigate('/')
    } catch (error) {
      dispatch(createArticleFailure())
      
    }
   
  }

  const formProps = {title, description,body,setTitle,setDescription,setBody,formSubmit}

  return (
    <div className='text-center'>
      <h2 className='fs-2 fw-bold text-center'> Edit article</h2>
      <AddForm {...formProps}/>
    </div>
  )
}

export default EditArticle