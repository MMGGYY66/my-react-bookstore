import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/features/categories/categoriesSlice';

const CategoriesPage = () => {
  const status = useSelector((store) => store.categories)[0];
  const dispatch = useDispatch();

  return (
    <div className="categoriesContainer">
      <p className="checkStatus">{status}</p>
      <button className="addBook" type="button" onClick={() => dispatch(checkStatus())}>
        CHECK STATUS
      </button>
    </div>
  );
};

export default CategoriesPage;
