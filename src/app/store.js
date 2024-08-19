import {configureStore} from '@reduxjs/toolkit'
// its from core redux not react-redux

import todoReducer from '../features/todoSlice';

export const store=configureStore({
    reducer: todoReducer
})


