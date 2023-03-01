import '../cat.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { statusCheck } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const state = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(statusCheck());
  };

  return (
    <div className="category">
      <button
        type="button"
        onClick={handleClick}
        className="bg-azure font-sm font-normal rounded border text-white py-2 px-4"
      >
        CHECK STATUS
      </button>
      <h2 className="status">{state}</h2>
    </div>
  );
};

export default Categories;
