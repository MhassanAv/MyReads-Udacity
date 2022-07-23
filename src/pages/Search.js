import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Book from "../components/Book";
import * as API from "../BooksAPI";
import { DebounceInput } from "react-debounce-input";
import PropTypes from "prop-types";

const Search = ({ books }) => {
  const [search, setSearch] = useState("");
  const [storeBooks, setStoreBooks] = useState([]);

  const updateSearch = (search) => {
    setSearch(search);
  };

  const changeHandler = (newBookShelf, id) => {
    storeBooks.map((book) => {
      if (book.id === id) {
        API.update(book, newBookShelf);
        return null;
      }
      return null;
    });
  };

  //i nested 2 maps together because the update api dosn't affect the data coming from the search screen
  //if there is a simpler way please let me know

  useEffect(() => {
    const searchedBooks = async () => {
      let res;
      search !== "" && (res = await API.search(search));
      if (res) {
        console.log(res);
        Array.from(res).map((book) => {
          return (book.shelf = "none");
        });

        Array.from(res).map((book) => {
          books.map((b) => {
            if (b.id === book.id) {
              book.shelf = b.shelf;
            }
            return null;
          });
          return null;
        });
        setStoreBooks(res);
      }
      if (!res) {
        setStoreBooks([]);
      }
    };
    searchedBooks();
  }, [search]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/MyReads-Udacity" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <DebounceInput
            type="text"
            placeholder="Search by title, author, or ISBN"
            minLength={1}
            debounceTimeout={500}
            onChange={(event) => updateSearch(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <h3 style={{ marginLeft: "20px" }}>
          Search results({storeBooks.length ? storeBooks.length : 0})
        </h3>
        <ol className="books-grid">
          {storeBooks.length > 0 ? (
            Array.from(storeBooks).map((book) => {
              return <Book key={book.id} book={book} handler={changeHandler} />;
            })
          ) : (
            <div></div>
          )}
        </ol>
      </div>
    </div>
  );
};

Search.propTypes = {
  books: PropTypes.array,
};
export default Search;
