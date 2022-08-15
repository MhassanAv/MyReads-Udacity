# MyReads Project

This my attempt for Udacity's React Fundamentals Cross-Skilling Project

- I found it very intersting and i have learnd much from it everytime i find an issue or face a bug
- Using react makes things much easier than vanilla js and it even makes you better with our js skills

## Instractions

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## Structure

```bash
src
    ├── App.css 
    ├── App.js 
    ├── App.test.js 
    ├── BooksAPI.js 
    ├── components
    │   ├── Shelf.js
    │   └── Books.js
    ├── pages
    │   ├── Main.js
    │   └── Search.js
    ├── icons 
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css 
    └── index.js
```

## Description

MyReads app is designed to arrange your books on different shelves as desired

- Currently Reading
- Want To Read
- Read
you can add new books from the add button and search for new ones with the ability to add them to your shelves

## Backend Server

 Udactiy've provided a backend server to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.
