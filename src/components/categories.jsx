import React from 'react';
import { useSelector } from 'react-redux';

function Categories() {
  const categories = useSelector((data) => data.categories.categories);

  return (
    <div className="center">
      <h1 className="text-center display-1">Categories</h1>
      <h1 className="text-center display-2">
        {categories.length === 0 ? 'Under construction' : ''}
      </h1>
    </div>
  );
}

export default Categories;
