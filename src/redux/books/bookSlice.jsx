import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../node_modules/axios/lib/axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HTWbya7aDLtLFT33O8JP/books';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const time = Date.now();
  const response = await axios.get(`${baseUrl}?time=${time}`);

  const books = Object.entries(response.data).map((item) => ({
    ...item[1][0],
    item_id: item[0],
  }));
  return books;
});

export const uploadBook = createAsyncThunk(
  'books/uploadBook',
  async (formData) => {
    await axios.post(baseUrl, formData);

    return formData;
  },
);

export const deleteBook = createAsyncThunk('books/delete', async (id) => {
  // console.log(id);
  const url = `${baseUrl}/${id}`;
  // console.log(url)

  try {
    await axios.delete(url);
  } catch (error) {
    throw new Error();
  }
  return id;
});

const initialState = {
  books: [],
  isLoading: true,
};

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(uploadBook.fulfilled, (state, action) => {
      state.books.push(action.payload);
    });
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      const filteredBooks = state.books.filter((book) => book.item_id !== action.payload);
      return { ...state, books: filteredBooks };
    });

    builder.addCase(fetchBooks.pending, (state) => {
      const noPending = true;
      return { ...state, isLoading: noPending };
    });

    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      const listOfBooks = action.payload;
      return { ...state, books: listOfBooks, isLoading: false };
    });
  },
});

export default bookSlice.reducer;
