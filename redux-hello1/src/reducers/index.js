import postReducer from './post'
import commentReducer from './comment'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
  comments: commentReducer,
  posts: postReducer
})
console.log(rootReducer)

export default rootReducer
