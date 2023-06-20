import React from 'react';
import { useSelector } from 'react-redux';
import Book from './book';
import BookForm from './bookForm';

function BooksWrapper() {
  const books = useSelector((data) => data.books);

  return (
    <div className="center" style={{ marginTop: '50px' }}>
      {books.length !== 0 ? books.books.map((book) => (
        <Book
          title={book.title}
          author={book.author}
          progress={book.progress || Math.floor(Math.random() * 100)}
          id={book.id}
          category={book.category}
          key={Math.random()}
        />
      )) : <h1>Empty list</h1>}

      <BookForm />
    </div>
  );
}

export default BooksWrapper;
