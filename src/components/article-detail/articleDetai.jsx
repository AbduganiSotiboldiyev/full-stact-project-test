import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getArticleFailure, getArticleSuccess, getarticleStart } from '../../slice/articleSlice'
import ArticleService from '../../sevices/article'
import moment from 'moment/moment'
import Loader from '../../ui/loader'

const ArticleDetail = () => {
    const {slug} = useParams()
    const {articleDetails,isLoading} = useSelector(state => state.article)
    const {user} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        const getArticleDetail = async () => {
            dispatch(getarticleStart())
            try {
                const response = await ArticleService.getArticlesDetails(slug)
                dispatch(getArticleSuccess(response.article))
                
            } catch (error) {
                dispatch(getArticleFailure())
                
            }
        }
        getArticleDetail()
    },[slug])

    const deleteArticleHandler = async () => {
        try {
            await ArticleService.deleteArticle(slug)
            navigate('/')

        } catch (error) {
            console.log(error)
        }
    }

    console.log(articleDetails);

  return isLoading ? (<Loader/>) : (
    
    articleDetails !== null && (
    <div>
        <div className=''>
            <p className='fw-bold fs-4 text-capitalize'>
                Author : {articleDetails.author.username}
            </p>
        </div>
        <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">{articleDetails.title}</h1>
        <p className="col-md-8 fs-4 mb-5">{articleDetails.description}</p>
         <div className=''>
            <p className='fw-bold fs-5'>
                <span className ="text-muted">Created at: </span>
               {moment().format("MMM Do, YYYY")}
            </p>
        </div>
        <div>
            <p>
                {articleDetails.body}
            </p>
        </div>
        {user.username === articleDetails.author.username && (
            <>
                <button className="btn btn-primary btn-sm" type="button" onClick={() => {navigate(`/edit-article/${slug}`)}}>Update</button>
                <button className="btn btn-outline-danger btn-sm" type="button" onClick={deleteArticleHandler}> Delete</button>
            
            </>
            )}

      </div>
       
    </div>
  ))
}

export default ArticleDetail