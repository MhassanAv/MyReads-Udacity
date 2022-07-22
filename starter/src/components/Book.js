import React, { useState } from "react";
import PropTypes from "prop-types";

const Book = ({ id, author, title, url, handler, shelf }) => {
  const [newShelf, setNewShelf] = useState(shelf);

  const handleChange = (event) => {
    handler(event.target.value, id);
    setNewShelf(event.target.value);
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${url}")`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select onChange={handleChange} value={newShelf}>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{author}</div>
      </div>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  shelf: PropTypes.string.isRequired,
};
export default Book;
