/* eslint-disable react/prop-types */
import React from 'react';

const Book = (props) => {
  const { title, author } = props;
  return (
    <li>
      {title}
      {' - '}
      {author}
      <button type="button">Remove</button>
    </li>
  );
};

export default Book;
