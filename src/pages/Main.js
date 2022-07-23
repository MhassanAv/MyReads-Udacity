import React from "react";
import { Link } from "react-router-dom";
import Shelf from "../components/Shelf";
import PropTypes from "prop-types";

const Main = ({ books, shelfChanger }) => {
  const shelves = ["Currently Reading", "Want to Read", "Read"];

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map((shelf) => (
            <Shelf
              key={shelf}
              shelfName={shelf}
              shelfChanger={shelfChanger}
              books={books}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};
Main.propTypes = {
  books: PropTypes.array.isRequired,
  shelfChanger: PropTypes.func.isRequired,
};
export default Main;
