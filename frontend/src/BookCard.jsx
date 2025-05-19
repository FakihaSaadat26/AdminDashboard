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
          className="btn"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn btn-primary"
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
            className="btn btn-primary btn-sm"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(book.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="card">
      {isEditing ? <EditForm /> : <BookDisplay />}
    </div>
  );
};

export default BookCard;