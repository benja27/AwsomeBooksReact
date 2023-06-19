import React from 'react';
import { useSelector } from 'react-redux';
import Book from './book';
import BookForm from './bookForm';

function BooksWrapper() {
  const books = useSelector((data) => data.books);
  console.log(books);

  // const listOfBooks = [
  //   {
  //     name: 'The Hunger Games',
  //     author: 'Suzanne Collins',
  //     category: 'Action',
  //     progress: '8%',
  //     },
  //     {
  //       name: 'Dune',
  //       author: 'Franj Herbert',
  //       category: 'Sci-Fi',
  //       progress: '64%',
  //     },
  //     {
  //       name: 'Capital in the Twenty-First Century',
  //       author: 'Suzanne Collins',
  //       category: 'Economy',
  //       progress: '0%',
  //   },
  // ];

  return (
    <div className="center" style={{ marginTop: '50px' }}>
      {books.length !== 0 ? books.books.map((book) => (
        <Book
          title={book.title}
          author={book.author}
          progress={book.progress}
          id={book.id}
          key={Math.random()}
        />
      )) : <h1>Empty list</h1>}

      <BookForm />
    </div>
  );
}

export default BooksWrapper;
