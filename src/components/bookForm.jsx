import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';

function BookForm() {
  const [bookData, setBookData] = useState({
    title: '', author: '', id: 0, category: 'no category',
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookData({ ...bookData, id: Math.random() });
    dispatch(addBook(bookData));
  };

  return (
    <form
      action=""
      onSubmit={(e) => handleSubmit(e)}
      className=""
      style={{ marginTop: '50px', marginBottom: '150px' }}
    >
      <h4 className="pb-4">ADD NEW BOOK</h4>
      <div className="d-flex w-100 justify-content-between">
        <input
          style={{ width: '50%' }}
          type="text"
          required
          className="form-control py-3"
          name=""
          onChange={(e) => setBookData({ ...bookData, title: e.target.value })}
          id=""
          aria-describedby="helpId"
          placeholder="Book title"
        />
        <input
          style={{ width: '30%' }}
          type="text"
          required
          className="form-control py-3"
          onChange={(e) => setBookData({ ...bookData, author: e.target.value })}
          name=""
          id=""
          aria-describedby="helpId"
          placeholder="Author"
        />
        <button type="submit" className="btn btn-primary px-5">
          ADD BOOK
        </button>
      </div>
    </form>
  );
}

export default BookForm;
