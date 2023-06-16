import { configureStore } from '@reduxjs/toolkit'
import  answerValues  from './slice'


export const store = configureStore({
  reducer: {
     answerValues,
  },
  devTools:true
})

// тип данных для state в useSelector
export type RootState = ReturnType<typeof store.getState>

// Выведенные типы: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch