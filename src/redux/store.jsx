import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './books/bookSlice';
import categoriesSlice from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksSlice,
    categories: categoriesSlice,
  },
});

export default store;
