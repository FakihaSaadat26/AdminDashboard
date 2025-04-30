// BookCard.js
import { useState, useContext } from 'react';
import { RoleContext } from './RoleContext';

const BookCard = ({ book, onDelete, onUpdate }) => {
  const { role } = useContext(RoleContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedBook, setEditedBook] = useState({ ...book });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedBook({
      ...editedBook,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(editedBook);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedBook({ ...book });
    setIsEditing(false);
  };

  // EditForm component for inline editing
  const EditForm = () => (
    <form onSubmit={handleSubmit} className="p-4 space-y-3">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={editedBook.title}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>
      <div>
        <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          value={editedBook.author}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={handleCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button>
      </div>
    </form>
  );

  // Book display card
  const BookDisplay = () => (
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
      <p className="text-sm text-gray-600">by {book.author}</p>
      
      {/* Admin controls */}
      {role === 'admin' && (
        <div className="mt-4 flex space-x-2 justify-end">
          <button
            onClick={() => setIsEditing(true)}
            className="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(book.id)}
            className="px-3 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      {isEditing ? <EditForm /> : <BookDisplay />}
    </div>
  );
};

export default BookCard;