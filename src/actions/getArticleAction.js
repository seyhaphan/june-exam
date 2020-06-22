import Axios from "axios";
import { GET_ARTICLE, GET_ARTICLE_ID } from './getArticleActionType'

export const getArtilce = () => {
   return async (dispatch) => {
      const result = await Axios.get("http://110.74.194.125:3535/api/articles");

      dispatch({
         type: GET_ARTICLE,
         data: result.data
      })
   }

}
export const getArtilceById = (id) => {
   return async (dispatch) => {
      const result = await Axios.get(`http://110.74.194.125:3535/api/articles/${id}`);

      dispatch({
         type: GET_ARTICLE_ID,
         data: result.data
      })
   }

}