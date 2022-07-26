import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const Shelf = ({ shelfName, shelfChanger, books }) => {
  //TODO : change the books object and save it's state
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {Array.from(books).map((book) => {
            if (
              book.shelf === "currentlyReading" &&
              shelfName === "Currently Reading"
            ) {
              return <Book key={book.id} book={book} handler={shelfChanger} />;
            }
            if (book.shelf === "wantToRead" && shelfName === "Want to Read") {
              return <Book key={book.id} book={book} handler={shelfChanger} />;
            }
            if (book.shelf === "read" && shelfName === "Read") {
              return <Book key={book.id} book={book} handler={shelfChanger} />;
            }
            return null;
          })}
        </ol>
      </div>
    </div>
  );
};
export default Shelf;

Book.propTypes = {
  shelfName: PropTypes.string,
  shelfChanger: PropTypes.func,
  books: PropTypes.array,
};

// data reference
/*
allowAnonLogging: true
authors: ['William E. Shotts, Jr.']
averageRating: 4
canonicalVolumeLink: "https://market.android.com/details?id=book-nggnmAEACAAJ"
categories: ['COMPUTERS']
contentVersion: "1.2.2.0.preview.2"
description: "You've experienced the shiny, point-and-click surface of your Linux computer—now dive below and explore its depths with the power of the command line. The Linux Command Line takes you from your very first terminal keystrokes to writing full programs in Bash, the most popular Linux shell. Along the way you'll learn the timeless skills handed down by generations of gray-bearded, mouse-shunning gurus: file navigation, environment configuration, command chaining, pattern matching with regular expressions, and more. In addition to that practical knowledge, author William Shotts reveals the philosophy behind these tools and the rich heritage that your desktop Linux machine has inherited from Unix supercomputers of yore. As you make your way through the book's short, easily-digestible chapters, you'll learn how to: * Create and delete files, directories, and symlinks * Administer your system, including networking, package installation, and process management * Use standard input and output, redirection, and pipelines * Edit files with Vi, the world’s most popular text editor * Write shell scripts to automate common or boring tasks * Slice and dice text files with cut, paste, grep, patch, and sed Once you overcome your initial \"shell shock,\" you'll find that the command line is a natural and expressive way to communicate with your computer. Just don't be surprised if your mouse starts to gather dust. A featured resource in the Linux Foundation's \"Evolution of a SysAdmin\""
id: "nggnmAEACAAJ"
imageLinks: {smallThumbnail: 'http://books.google.com/books/content?id=nggnmAEAC…J&printsec=frontcover&img=1&zoom=5&source=gbs_api', thumbnail: 'http://books.google.com/books/content?id=nggnmAEAC…J&printsec=frontcover&img=1&zoom=1&source=gbs_api'}
industryIdentifiers: (2) [{…}, {…}]
infoLink: "https://play.google.com/store/books/details?id=nggnmAEACAAJ&source=gbs_api"
language: "en"
maturityRating: "NOT_MATURE"
pageCount: 480
panelizationSummary: {containsEpubBubbles: false, containsImageBubbles: false}
previewLink: "http://books.google.com/books?id=nggnmAEACAAJ&dq=linux&hl=&cd=3&source=gbs_api"
printType: "BOOK"
publishedDate: "2012"
publisher: "No Starch Press"
ratingsCount: 2
readingModes: {text: true, image: false}
shelf: "currentlyReading"
subtitle: "A Complete Introduction"
title: "The Linux Command Line"
}*/
