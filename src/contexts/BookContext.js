import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

// create and invoke the BookContext here
export const BookContext = createContext();

// create a provider for the BookContext here
const BookContextProvider = (props) => {

    // use the useState hook to set an initial state for books here
    const [books, setBooks] = useState([
        {title: 'title1', author: 'author1', id: 1},
        {title: 'title2', author: 'author2', id: 2}
    ]);

    const addBook = (title, author) => {
        setBooks([...books, {title, author, id: uuid()}])
    };

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    }

    // display the books here
    return(
        <BookContext.Provider value={{books, addBook, removeBook}}>
            { props.children }
        </BookContext.Provider>
    )
}

export default BookContextProvider;