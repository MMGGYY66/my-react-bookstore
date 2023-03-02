import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBookToAPI } from '../../redux/features/books/booksSlice';
import AddButton from '../AddButton/AddButton';

const Form = () => {
  const [inputs, setInputs] = useState({ title: '', author: '', category: '' });
  const dispatch = useDispatch();

  const handleChange = (ev) => {
    setInputs((prevState) => ({
      ...prevState,
      [ev.target.name]: ev.target.value,
    }));
  };
  const handleClick = (ev) => {
    ev.preventDefault();
    const id = uuidv4();
    const newBook = { item_id: id, ...inputs };
    dispatch(postBookToAPI(newBook));
    setInputs({ title: '', author: '' });
  };
  return (
    <section className="formSection">
      <span className="formTitle">
        ADD NEW BOOK
      </span>
      <form onSubmit={handleClick}>
        <input
          className="inputField"
          placeholder="Book title"
          aria-label="Title"
          name="title"
          value={inputs.title}
          onChange={handleChange}
          required
        />
        <input
          className="inputField"
          placeholder="Author"
          aria-label="Author"
          name="author"
          value={inputs.author}
          onChange={handleChange}
          required
        />
        <select name="category" className="inputField" onChange={handleChange} required>
          <option value="">Category</option>
          <option>Fiction</option>
          <option>Comedy</option>
          <option>Non-Fiction</option>
          <option>Mystery</option>
          <option>Fantasy</option>
          <option>Horror</option>
          <option>Thriller</option>
          <option>Children</option>
          <option>Programming</option>
        </select>
        <AddButton className="addBook" />
      </form>
    </section>
  );
};

export default Form;
