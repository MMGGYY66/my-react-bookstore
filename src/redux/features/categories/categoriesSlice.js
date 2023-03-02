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

// Export the cations
export const { checkStatus } = categoriesSlice.actions;
// Export default the reducer from categoriesSlice
export default categoriesSlice.reducer;
