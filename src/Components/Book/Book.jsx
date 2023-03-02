import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookFromAPI } from '../../redux/features/books/booksSlice';
import Progress from '../Progress/Progress';

const Book = ({ book }) => {
  const {
    id, title, author, category,
  } = book;
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBookFromAPI(id));
  };
  return (
    <div className="booksWrapper">
      <div className="bookContainer">
        <div className="bookInfo">
          <div className="infos">
            <span className="bookCategory">{category}</span>
            <span className="bookTitle">{title}</span>
            <span className="bookAuthor">{author}</span>
          </div>
          <ul className="actions">
            <li>
              <span className="actionItem">Comment</span>
            </li>
            <li>
              <span className="separator">|</span>
            </li>
            <li>
              <button
                className="actionItem"
                type="button"
                onClick={handleRemoveBook}
              >
                Remove
              </button>
            </li>
            <li>
              <span className="separator">|</span>
            </li>
            <li>
              <span className="actionItem">Edit</span>
            </li>
          </ul>
        </div>
        <ul className="bookProgress">
          <li>
            <Progress />
          </li>
          <li>
            <div className="currentChapterContainer">
              <span className="currentChapter">
                Current Chapter
              </span>
              <span className="chapter">Chapter 17</span>
              <button className="updateBtn" type="button">
                Update progress
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
