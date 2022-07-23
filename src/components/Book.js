import React, { useState } from "react";
import PropTypes from "prop-types";

const Book = ({ book, handler }) => {
  const [newShelf, setNewShelf] = useState(book.shelf);

  const handleChange = (event) => {
    handler(event.target.value, book.id);
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
              backgroundImage: `url("${
                book.imageLinks ? book.imageLinks.thumbnail : ""
              }")`,
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
        <div className="book-title">{book.title ? book.title : ""}</div>
        <div className="book-authors">
          {book.authors ? book.authors.join(",") : ""}
        </div>
        <div style={{ fontSize: "0.8rem", color: "#999" }}>
          {book.publishedDate ? book.publishedDate.slice(0, 4) : ""}
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.array,
  handler: PropTypes.func.isRequired,
};
export default Book;
