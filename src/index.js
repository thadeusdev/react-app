import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS
import './index.css';

import {books} from './books.js'
import Book from './Book.js'

function Booklist() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        const { img, tile, author } = book;
        return <Book key={book.id} book={book} />;
      })}
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Booklist());
