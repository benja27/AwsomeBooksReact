/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/bookSlice';
import circleimg from './circle.jpg';

function Book({
  title, author, item_id, category, progress,
}) {
  const dispatch = useDispatch();

  return (
    <div className="d-flex book  rounded">
      <div style={{ width: '60%' }} className="d-flex justify-content-between">
        <div className="info">
          <h5 className="category">{category}</h5>
          <h4 className="title">{title}</h4>
          <h6 className="author">{author}</h6>
          <div className="d-flex btn-container ">
            <button type="button" className="btnn">
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
              style={{ paddingLeft: '1rem' }}
              className="btnn"
            >
              Remove
            </button>

            <button
              type="button"
              className="btnn"
              style={{ paddingLeft: '1rem', border: 'none' }}
            >
              Edit
            </button>
          </div>
        </div>
        {/* progress */}
        <div
          className="d-flex align-items-center progress-container me-5 gap-4"
          style={{ paddingLeft: '0px' }}
        >
          <div>
            <img className="circle-img" src={circleimg} alt="" />
          </div>
          <div>
            <h1 className="progresss">
              {progress}
              %
            </h1>
            <h5 className="completed">completed</h5>
          </div>
        </div>
      </div>
      {/* current chapter */}
      <div
        style={{ width: '40%' }}
        className="d-flex ps-5 flex-column align-items-center justify-content-center"
      >
        <div className="" style={{ width: '300px' }}>
          <h4 className="current-chapter">Current Chapter</h4>
          <h5 className="chapter">Chapter 17</h5>
          <button type="button" className="btn-update-progres btn btn-primary">
            UPDATE PROGRESS
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
