import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categoriesList: [],
  },
  reducers: {
    checkStatus: (state) => {
      state.categoriesList.push('Under construction');
      state.categoriesList.split('');
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
