import { GET_ARTILCE } from '../actions/getArticleAction'
import { GET_ARTICLE_ID } from '../actions/getArticleActionType'

const defaultStatus = {
   data: []
}

export const getArticleReducer = (state = defaultStatus, action) => {
   switch (action.type) {
      case GET_ARTILCE:
         return {
            ...state,
            data: action.data
         }
      case GET_ARTICLE_ID:
         return {
            ...state,
            data: action.data
         }
      default:
         return state
   }
}