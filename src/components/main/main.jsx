import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../../ui'
import { useNavigate } from 'react-router-dom'
import { articleStart, articleSuccess } from '../../slice/articleSlice'
import ArticleService from '../../sevices/article'
import ArticlesCard from '../articles-card/articles-card'

const Main = () => {
    const {articles ,isLoading} = useSelector(state => state.article)
   
    const dispatch = useDispatch()

    const getArticle = async () => {
    dispatch(articleStart())
    try {
      const response = await ArticleService.getArticles()
      dispatch(articleSuccess(response.articles))
      
    } catch (error) {
      console.log(error);
    }
  }

  
  useEffect(() => {
    getArticle()
  },[])
  
  const deleteArticleHandler = async (slug) => {
    try {
      await ArticleService.deleteArticle(slug)
    } catch (error) {
      console.log(error);
    }
    getArticle()
  }
  return (
    <>
      <>
        {isLoading && <Loader/>}
          <div className="album py-5 bg-light">
            <div>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {articles.map(item =>(
                        <ArticlesCard item={item} deleteArticleHandler={deleteArticleHandler} />
                      )
                      )}
              </div>
            </div>
          </div>
        

      </>
    </>
  )
}

export default Main