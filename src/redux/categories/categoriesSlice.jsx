import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

export const sliceCategories = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    check: (state) => {
      if (state.categories.length !== 0) {
        return false;
      }
      return true;
    },
  },
});

export const { check } = sliceCategories.actions;
export default sliceCategories.reducer;
