import ListGroup from "./components/BookList";

function App(){

  const books = [
    'Atomic Habits',
    'The Henna Artist',
    'I,Robot'
]
  return <div>
    <ListGroup books={books} heading = "Book List" />
  </div>

}

export default App
