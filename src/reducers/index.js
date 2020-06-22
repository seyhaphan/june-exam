import { combineReducers } from "redux"
import { getArticleReducer } from "./getArticleReducer";

export const reducers = {
   getArticle: getArticleReducer
}

export const rootReducer = combineReducers(reducers);