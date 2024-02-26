

function BookList() {
    const books = [
        'Atomic Habits',
        'The Henna Artist',
        'I,Robot'
    ]

    return (
        <>
            <h1> Book List</h1>
            <ul className="list-group">
                {books.map(book => <li>{book}</li>)}    
            </ul>
        </>
    )
}

export default BookList;