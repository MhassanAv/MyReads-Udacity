import React from "react";

const Book = ({ id, author, title, url, handler ,shelf}) => {

  const handleChange = (event) => {
    const newState = event.target.value
    handler (newState,id);
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
            <select onChange={handleChange} value={shelf}>
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

export default Book;
