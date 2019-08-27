import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/BookReducers';

// create and invoke the BookContext here
export const BookContext = createContext();

// create a provider for the BookContext here
const BookContextProvider = (props) => {

    // use the useReducer hook to invoke the bookReducer and set an initial state for books here
    const [books, dispatch] = useReducer(bookReducer, [], () => {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books]);

    // display the books here
    return(
        <BookContext.Provider value={{books, dispatch}}>
            { props.children }
        </BookContext.Provider>
    )
}

export default BookContextProvider;