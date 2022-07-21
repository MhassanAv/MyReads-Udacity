/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Shelf from "./components/Shelf";
import Book from "./components/Book";
import * as API from "./BooksAPI";

function App() {
  const shelves = ["Currently Reading", "Want to Read", "Read"];
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);
  const [search, setSearch]= useState('');


  useEffect(() => {
    const getBooks = async () => {
      const res = await API.getAll();
      setBooks(res);
    };
    getBooks();
  }
  , []);

  /* i was trying to cache the books but it didn't work */
  
 /* useEffect(() => {
     window.localStorage.setItem("loaded",JSON.stringify(books))
  },[books])

  useEffect(() => {
    const data = window.localStorage.getItem("Books");
    setBooks(JSON.parse(data));
  },[])*/



  const showingBooks = search ===  "" ? [] : books.filter((b)=>b.title.toLowerCase().includes(search.toLowerCase()));

  const changeHandler = (newState, id) => {
    books.map((book) => {
      if (book.id === id) {
        setBooks([...books], (book.shelf = newState));
        return null;
      } else {
        return null;
      }
    });
  };

  const updateSearch = (search) => {
    setSearch(search);
 
  }


  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <Link
              to="/"
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value ={search}
                onChange={(event) => updateSearch(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {showingBooks.map((book) =>{
                return(
                <Book
                id={book.id}
                key={book.id}
                author={book.authors[0]}
                title={book.title}
                url={book.imageLinks.thumbnail}
                shelf ={book.shelf}
                handler={changeHandler}
              />
              )})}
            </ol>
          </div>
        </div>
      ) : (
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
                  shelfChanger={changeHandler}
                  books={books}
                />
              ))}
            </div>
          </div>
          <div className="open-search">
            <Link
              to="/search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Add a book
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
