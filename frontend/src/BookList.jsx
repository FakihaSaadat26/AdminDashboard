// BookList.js
import { useState, useContext, useEffect } from 'react';
import { RoleContext } from './RoleContext';
import BookCard from './BookCard';

const BookList = () => {
  // Sample initial books
  const initialBooks = [
    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 2, title: '1984', author: 'George Orwell' },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  ];

  const [books, setBooks] = useState([]);

  // On mount, load books from localStorage or use initialBooks
  useEffect(() => {
    const saved = localStorage.getItem('books');
    if (saved) {
      setBooks(JSON.parse(saved));
    } else {
      setBooks(initialBooks);
    }
    // eslint-disable-next-line
  }, []);

  // Save to localStorage whenever books change
  useEffect(() => {
    if (books.length > 0) {
      localStorage.setItem('books', JSON.stringify(books));
    }
  }, [books]);

  const [newBook, setNewBook] = useState({ title: '', author: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const { role } = useContext(RoleContext);

  // Delete a book
  const handleDelete = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  // Update a book
  const handleUpdate = (updatedBook) => {
    setBooks(books.map(book => 
      book.id === updatedBook.id ? updatedBook : book
    ));
  };

  // Add a new book
  const handleAddBook = (e) => {
    e.preventDefault();
    const maxId = books.length > 0 ? Math.max(...books.map(book => book.id)) : 0;
    const newBookWithId = {
      ...newBook,
      id: maxId + 1
    };
    setBooks([...books, newBookWithId]);
    setNewBook({ title: '', author: '' });
  };

  // Handle input changes for new book form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({
      ...newBook,
      [name]: value
    });
  };

  // Filter books by search term
  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      {/* Search bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search books or authors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Add new book form (Admin only) */}
      {role === 'admin' && (
        <form onSubmit={handleAddBook} className="mb-8 card">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Add New Book</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={newBook.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">Author</label>
              <input
                type="text"
                id="author"
                name="author"
                value={newBook.author}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="self-end">
              <button
                type="submit"
                className="btn btn-success"
              >
                Add Book
              </button>
            </div>
          </div>
        </form>
      )}

      {/* Book count and filters */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          {filteredBooks.length} {filteredBooks.length === 1 ? 'Book' : 'Books'} Available
        </h2>
      </div>

      {/* Books grid */}
      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map(book => (
            <BookCard 
              key={book.id} 
              book={book} 
              onDelete={handleDelete} 
              onUpdate={handleUpdate} 
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-500">No books found.</p>
        </div>
      )}
    </div>
  );
};

export default BookList;