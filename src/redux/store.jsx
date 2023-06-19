import { configureStore } from '@reduxjs/toolkit';
import { bookSlice } from './bookSlice';

const store = configureStore({
  reducer: {
    books: bookSlice,
  },
});

export default store;
