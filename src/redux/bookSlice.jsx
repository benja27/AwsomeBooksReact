import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const [name, author] = action.payload;
      state.books.push({ name, author });
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
