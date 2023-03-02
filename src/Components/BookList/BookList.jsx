import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllBooks,
  getBookFromAPI,
} from '../../redux/features/books/booksSlice';
import Book from '../Book/Book';
import Form from '../Form/Form';

const BookList = () => {
  const books = useSelector(selectAllBooks);
  const dispatch = useDispatch();
  const ifSucceed = useSelector((store) => store.books.ifSucceed);
  const isLoading = useSelector((store) => store.books.isLoading);

  useEffect(() => {
    dispatch(getBookFromAPI());
  }, [dispatch, ifSucceed]);

  return (
    <div className="bookListContainer">
      {isLoading && <div className="loading"> </div>}
      {!isLoading && books.length === 0 && (
        <h3 className="libraryEmpty">Library is empty....</h3>
      )}
      {books?.map((book) => (
        <Book key={book.id} book={book} />
      ))}
      <hr className="line" />
      <Form />
    </div>
  );
};

export default BookList;
