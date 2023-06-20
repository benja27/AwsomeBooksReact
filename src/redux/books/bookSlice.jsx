import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const {
        title, author, id, progress,
      } = action.payload;
      state.books.push({
        title, author, id, progress,
      });
    },
    removeBook: (state, action) => {
      const id = action.payload;

      return {
        ...state,
        books: state.books.filter((book) => book.id !== id),
      };
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
