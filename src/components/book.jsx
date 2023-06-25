/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/bookSlice';

function Book({
  title, author, item_id, category, progress,
}) {
  const dispatch = useDispatch();

  return (
    <div className="d-flex book px-4 py-4 rounded mb-5">
      <div style={{ width: '60%' }} className="d-flex justify-content-between">
        <div className="">
          <h5>{category}</h5>
          <h4>{title}</h4>
          <h6>{author}</h6>
          <div className="d-flex gap-3">
            <button type="button" className="btn btn-success">
              Comments
            </button>

            <button
              onClick={() => {
                dispatch(deleteBook(item_id));
                setTimeout(() => {
                  window.location.reload();
                }, 100);
              }}
              type="button"
              className="btn btn-danger"
            >
              Remove
            </button>

            <button type="button" className="btn btn-primary">
              Edit
            </button>
          </div>
        </div>
        <div
          className="d-flex align-items-center gap-4"
          style={{ paddingRight: '100px' }}
        >
          <img
            className="rounded-circle"
            src="https://placeimg.com/80/80"
            alt=""
          />
          <div>
            <h1>
              {progress}
              %
            </h1>
            <h5>completed</h5>
          </div>
        </div>
      </div>
      <div
        style={{ width: '40%' }}
        className="d-flex flex-column align-items-center justify-content-center"
      >
        <div className="" style={{ width: '300px' }}>
          <h4>Current Chapter</h4>
          <h5>Chapter 17</h5>
          <button type="button" className="btn btn-primary">
            Update Progress
          </button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  item_id: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
