import { useState } from "react";


interface Props {
    books: string[];
    heading: string;
}

function BookList({books,heading}: Props) {

    // Hooks add state management
    const [selectedIndex, setSelectedIndex] = useState(-1);
  
    return (
        <>
            <h1> {heading}</h1>
            {books.length ===0 && <p>No item found</p>}
            <ul className="list-group">
                {books.map((book, index) => (
                <li 
                className= {selectedIndex === index ? 'list-group-item active':' list-group-item' } //if it equals the index of the current item it should be highlighted.  
                key={book} 
                onClick={() => { setSelectedIndex (index); }}
                >
                    {book}
                </li>))}    
            </ul>
        </>
    )
}

export default BookList;