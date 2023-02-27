import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import {
  combineReducers,
  applyMiddleware,
} from 'redux';

import bookReducer from './books/bookSlice';
import categoriesReducer from './categories/categoriesSlice';

const reducer = combineReducers({
  books: bookReducer,
  categories: categoriesReducer,
});

const store = configureStore({ reducer }, applyMiddleware(thunk));

export default store;
