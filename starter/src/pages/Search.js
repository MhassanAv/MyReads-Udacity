import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Book from "../components/Book";
import * as API from "../BooksAPI";

const Search = () => {
  const [search, setSearch] = useState("");
  const [storeBooks, setStoreBooks] = useState([])

  const updateSearch = (search) => {
    setSearch(search);
  };

  const changeHandler = (newBookShelf, id) => {
    storeBooks.map((book) => {
      if (book.id === id) {
        API.update(book, newBookShelf);
        return null;
      } else {
        return null;
      }
    });
  };

  useEffect(() =>{
       const searchedBooks = async()=>{
       let res;
       search !== "" && (res = await API.search(search));
       if(res){
       Array.from(res).map((book) =>book.shelf="none")
       setStoreBooks(res);
       }
       if(!res){
        setStoreBooks([]);
       }
    }
    searchedBooks();
  },[search])


  const showingBooks =
    search === "" && storeBooks.length=== 0
      ? []
      : (Array.from(storeBooks).filter((b) =>
          b.title.toLowerCase().includes(search.toLowerCase())
        ));

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={search}
            onChange={(event) => updateSearch(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {showingBooks.length>0 ? (
           Array.from(showingBooks).map((book) => {
            return (
              <Book
                id={book.id}
                key={book.id}
                author={book.authors}
                title={book.title}
                url={book.imageLinks.thumbnail}
                shelf={book.shelf}
                handler={changeHandler}
              />
            );
          })):(<div></div>)
          }
        </ol>
      </div>
    </div>
  );
};
export default Search;
