import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    articles : [],
    articleDetails: null,
    errors : null
}
export const  articleSlice = createSlice( {
    name :"article",
    initialState,
    reducers :  { 
        articleStart : state => {
            state.isLoading = true;
        },
        articleSuccess : (state,action) => {
            state.isLoading = false;
            state.articles = action.payload;
        },
        articleFailures : (state) => {
            state.errors = "erroeer"
        },

        getarticleStart : state => {
            state.isLoading = true;
        },
        getArticleSuccess : (state,action) => {
            state.isLoading = false;
            state.articleDetails = action.payload; 
        },
        getArticleFailure : (state) => {
            state.isLoading = false;
        },
        createArticleStart : state => {
            state.isLoading = true;
        },
        createArticleSucceess: state => {
            state.isLoading = false;
        },
        createArticleFailure: state => {
            state.isLoading = false;
            state.errors = "Oooh You made it wrong"
        }
    }
})

export const {articleStart,articleSuccess,articleFailures,getarticleStart,getArticleSuccess,getArticleFailure,createArticleStart,createArticleSucceess,createArticleFailure} = articleSlice.actions
export default  articleSlice.reducer