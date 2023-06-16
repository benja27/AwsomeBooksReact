import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <header className="d-flex" style={{ height: '100px' }}>
      <div className=" header-container d-flex align-items-center justify-content-between">
        <div className="d-flex gap-5">
          <h2>Bookstore CMS</h2>
          <nav className="d-flex gap-5">
            <Link to="/">BOOKS</Link>
            <Link to="/categories">Categories</Link>
          </nav>
        </div>
        <img
          className="rounded-circle"
          style={{ width: '50px' }}
          src="https://placeimg.com/200/200"
          alt=""
        />
      </div>
    </header>
  );
}

export default Navigation;
