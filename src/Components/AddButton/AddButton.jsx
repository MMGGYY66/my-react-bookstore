import React from 'react';
import PropTypes from 'prop-types';

const AddButton = ({ className }) => (
  <button className={className} type="submit">
    ADD NEW BOOK
  </button>
);

AddButton.propTypes = { className: PropTypes.string.isRequired };

export default AddButton;
