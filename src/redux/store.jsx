import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './bookSlice';
import categoriesSlice from './categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksSlice,
    categories: categoriesSlice,
  },
});

export default store;
