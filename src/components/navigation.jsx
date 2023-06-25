import React from 'react';
import { Link } from 'react-router-dom';
import person from './person.jpg';

function Navigation() {
  return (
    <header className="d-flex" style={{ height: '100px' }}>
      <div className=" header-container d-flex align-items-center justify-content-between">
        <div className="d-flex gap-5">
          <h2 className="bookstore-cms">Bookstore CMS</h2>
          <nav className="d-flex align-items-center gap-">
            <Link className="nav-links" to="/">BOOKS</Link>
            <Link className="nav-links" style={{ paddingLeft: '2.5rem' }} to="/categories">CATEGORIES</Link>
          </nav>
        </div>
        <img
          className="rounded-circle person"
          src={person}
          alt=""
        />
      </div>
    </header>
  );
}

export default Navigation;
