/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = [];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      state = ['Under construction'];
      return state;
    },
  },
});

// Export the actions
export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
