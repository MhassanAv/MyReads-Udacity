/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import * as API from "./BooksAPI";
import Main from "./pages/Main";
import Search from "./pages/Search";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await API.getAll();
      setBooks(res);
    };
    getBooks();
  }, [books]);

  const changeHandler = (newBookShelf, id) => {
    books.map((book) => {
      if (book.id === id) {
        API.update(book, newBookShelf);
        return null;
      } else {
        return null;
      }
    });
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="*"
          element={
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: `translate(${-50}%, ${-50}%)`,
                fontSize: "45px",
                animationName: "error",
                animationDuration: `${2.5}s`,
                animationIterationCount: "infinite",
              }}
            >
              <h1>404 Not Found</h1>
            </div>
          }
        />
        <Route exact path="/search" element={<Search books={books} />} />
        <Route
          exact
          path="/"
          element={<Main books={books} shelfChanger={changeHandler} />}
        />
      </Routes>
    </div>
  );
}

export default App;
