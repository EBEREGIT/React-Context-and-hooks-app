import React, { useContext } from 'react';
import { BookContext } from "../contexts/BookContext";

const BookList = () => {
    const { books } = useContext(BookContext);
    return books.length ? (
        <div className='book-list'>
            <ul>
                
            </ul>
        </div>
    ):(
        <div className='empty'>No books :)</div>
    )
}

export default BookList;