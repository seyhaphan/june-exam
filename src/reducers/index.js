import { combineReducers } from "redux"
import { getArticleReducer } from "./getArticleReducer";

export const reducers = {
   getArtilce: getArticleReducer
}

export const rootReducer = combineReducers(reducers);