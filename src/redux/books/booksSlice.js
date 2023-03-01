/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import bookList from '../bookList';

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    booksArray: [...bookList],
  },
  reducers: {
    addBook: (state, action) => {
      const {
        title, author, category,
      } = action.payload;
      const newAdd = {
        item_id: `item${state.booksArray.length + 1}`,
        title,
        author,
        category,
      };
      state.booksArray.push(newAdd);
    },
    removeBook: (state, action) => {
      const acp = action.payload;
      state.booksArray = state.booksArray.filter(
        (book) => book.item_id !== acp,
      );
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
