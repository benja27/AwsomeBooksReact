import React from 'react';
import Book from './book';
import BookForm from './bookForm';

function BooksWrapper() {
  const listOfBooks = [
    {
      name: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
      progress: '8%',
    },
    {
      name: 'Dune',
      author: 'Franj Herbert',
      category: 'Sci-Fi',
      progress: '64%',
    },
    {
      name: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      category: 'Economy',
      progress: '0%',
    },
  ];

  return (
    <div className="center" style={{ marginTop: '50px' }}>
      {listOfBooks.map((book) => (
        <Book
          name={book.name}
          author={book.author}
          category={book.category}
          progress={book.progress}
          key={Math.random()}
        />
      ))}
      <BookForm />
    </div>
  );
}

export default BooksWrapper;
