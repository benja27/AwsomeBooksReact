import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './book';
import BookForm from './bookForm';
import { fetchBooks } from '../redux/books/bookSlice';

function BooksWrapper() {
  const dispatch = useDispatch();

  const { books, isLoading } = useSelector((data) => data.books);

  useEffect(() => {
    const getbooks = async () => {
      await dispatch(await fetchBooks());
    };
    getbooks();
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="text-center">
        <h1 className="display-1 fw-bold">Loading ...</h1>
        ;
      </div>
    );
  }

  return (
    <div className="center" style={{ marginTop: '50px' }}>
      <h1 className="text-center">List of Books</h1>
      {books.map((ele) => (
        <Book
          author={ele.author}
          item_id={Number(ele.item_id)}
          category="no category"
          progress={Math.floor(Math.random() * 100)}
          key={ele.item_id}
          title={ele.title}
        />
      ))}

      <BookForm />
    </div>
  );
}

export default BooksWrapper;
