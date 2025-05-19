// // import React from 'react';
// // import Welcome from './welcome'; // import the component

// // function App() {
// //   return (
// //     <div>
// //       <Welcome /> {/* render the component */}
// //     </div>
// //   );
// // }

// // export default App;

// import React from 'react';
// import Header from './header.jsx';
// import MainContent from './MainContent.jsx';
// import Footer from './Footer';

// function App() {
//   return (
//     <div>
//       <Header />
//       <MainContent />
//       <Footer />
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import Welcome from './welcome.jsx'; // Import your component

// function App() {
//   return (
//     <div>
//       <Welcome /> {/* This is where you're calling it */}
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import UserProfile from './UserProfile.jsx';

// function App() {
//   return (
//     <div>
//       <UserProfile name="Maryum Shehzad" age={22} location="Islamabad" />
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import LoginButton from './LoginButton';

// function App() {
//   const isUserLoggedIn = true; // Change to false to test the other output

//   return (
//     <div>
//       <h1>Welcome to My App</h1>
//       <LoginButton isLoggedIn={isUserLoggedIn} />
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import ProductCard from './ProductCard';

// function App() {
//   const products = [
//     { id: 1, name: 'Mouse', price: 759 },
//     { id: 2, name: 'Keyboard', price: 219 },
//     { id: 3, name: 'Motherboard', price: 899 }
//   ];

//   return (
//     <div>
//       <h1>Product List</h1>
//       {products.map(product => (
//         <ProductCard key={product.id} name={product.name} price={product.price} />
//       ))}
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import Counter from './Counter.jsx'; // Import the Counter component

// function App() {
//   return (
//     <div>
//       <h1>My React App</h1>
//       <Counter /> {/* Render the Counter component here */}
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import ColorChangingCircle from './ColorChangingCircle.jsx';

// function App() {
//   return (
//     <div className="App">
//       <h2>Click the Circle</h2>
//       <ColorChangingCircle />
//     </div>
//   );
// }

// export default App;


// App.jsx
// import { useState } from 'react';
// import GuestForm from './GuestForm.jsx';
// import GuestList from './GuestList.jsx';

// export default function App() {
//   const [guests, setGuests] = useState([
//     { name: 'Alice', email: 'alice@example.com', isConfirmed: false },
//     { name: 'Bob', email: 'bob@example.com', isConfirmed: true },
//   ]);

//   const addGuest = (guest) => {
//     setGuests([...guests, guest]);
//   };

//   const toggleConfirm = (index) => {
//     const updatedGuests = guests.map((guest, i) =>
//       i === index ? { ...guest, isConfirmed: !guest.isConfirmed } : guest
//     );
//     setGuests(updatedGuests);
//   };

//   return (
//     <div className="max-w-md mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Event Planner</h1>
//       <GuestForm onAddGuest={addGuest} />
//       <GuestList guests={guests} onToggleConfirm={toggleConfirm} />
//     </div>
//   );
// }


// App.jsx
// import './index.css';
// import { useState, useEffect } from 'react';
// import GuestForm from './GuestForm.jsx';
// import GuestList from './GuestList.jsx';

// export default function App() {
//   const [guests, setGuests] = useState([
//     { name: 'Adeenah Fatima', email: 'adeenah5.fatima@gmail.com', isConfirmed: false, rsvp: false },
//     { name: 'Maryum Shehzad', email: 'maryum.shehzad12@gmail.com', isConfirmed: true, rsvp: true },
//   ]);

//   // Add a new guest
//   const addGuest = (guest) => {
//     setGuests((prevGuests) => [...prevGuests, guest]);
//   };

//   // Toggle confirmation status
//   const toggleConfirm = (index) => {
//     setGuests((prevGuests) =>
//       prevGuests.map((guest, i) =>
//         i === index ? { ...guest, isConfirmed: !guest.isConfirmed } : guest
//       )
//     );
//   };

//   // Toggle RSVP status
//   const toggleRSVP = (index) => {
//     setGuests((prevGuests) =>
//       prevGuests.map((guest, i) =>
//         i === index ? { ...guest, rsvp: !guest.rsvp } : guest
//       )
//     );

//     console.log("RSVP toggled");
//     console.log(guests); // This will log the old state due to batching
//   };

//   // Watch for guests state update
//   useEffect(() => {
//     console.log("Guests updated:", guests);
//   }, [guests]);

//   // Summary
//   const total = guests.length;
//   const confirmed = guests.filter(g => g.isConfirmed).length;
//   const rsvped = guests.filter(g => g.rsvp).length;

//   return (
//     <div className="container">
//       <h1>Event Planner</h1>

//       <GuestForm onAddGuest={addGuest} />

//       <div className="summary" style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f7f7f7', borderRadius: '8px' }}>
//         <p><strong>Total Guests:</strong> {total}</p>
//         <p><strong>Confirmed:</strong> {confirmed}</p>
//         <p><strong>RSVPed:</strong> {rsvped}</p>
//       </div>

//       <GuestList
//         guests={guests}
//         onToggleConfirm={toggleConfirm}
//         onToggleRSVP={toggleRSVP}
//       />
//     </div>
//   );
// }

// // App.jsx
// import './index.css';
// import { useState, useEffect } from 'react';
// import GuestForm from './GuestForm.jsx';
// import GuestList from './GuestList.jsx';

// export default function App() {
//   const [guests, setGuests] = useState([
//     { name: 'Adeenah Fatima', email: 'adeenah5.fatima@gmail.com', isConfirmed: false, rsvp: false },
//     { name: 'Maryum Shehzad', email: 'maryum.shehzad12@gmail.com', isConfirmed: true, rsvp: true },
//   ]);

//   // Add guest
//   const addGuest = (guest) => {
//     setGuests((prevGuests) => [...prevGuests, guest]);
//   };

//   // Toggle confirm
//   const toggleConfirm = (index) => {
//     setGuests((prevGuests) =>
//       prevGuests.map((guest, i) =>
//         i === index ? { ...guest, isConfirmed: !guest.isConfirmed } : guest
//       )
//     );
//   };

//   // Toggle RSVP
//   const toggleRSVP = (index) => {
//     setGuests((prevGuests) =>
//       prevGuests.map((guest, i) =>
//         i === index ? { ...guest, rsvp: !guest.rsvp } : guest
//       )
//     );
//     console.log("RSVP toggled:", guests); // logs old state
//   };

//   // Remove guest
//   const removeGuest = (indexToRemove) => {
//     setGuests((prevGuests) => prevGuests.filter((_, i) => i !== indexToRemove));
//   };

//   // Update guest (name/email)
//   const updateGuest = (index, newName, newEmail) => {
//     setGuests((prevGuests) =>
//       prevGuests.map((guest, i) =>
//         i === index ? { ...guest, name: newName, email: newEmail } : guest
//       )
//     );
//   };

//   useEffect(() => {
//     console.log("Guests updated:", guests);
//   }, [guests]);

//   const total = guests.length;
//   const confirmed = guests.filter(g => g.isConfirmed).length;
//   const rsvped = guests.filter(g => g.rsvp).length;

//   return (
//     <div className="container">
//       <h1>Event Planner</h1>

//       <GuestForm onAddGuest={addGuest} />

//       <div className="summary">
//         <p><strong>Total Guests:</strong> {total}</p>
//         <p><strong>Confirmed:</strong> {confirmed}</p>
//         <p><strong>RSVPed:</strong> {rsvped}</p>
//       </div>

//       {guests.length === 0 ? (
//         <p>No guests yet. Add some!</p>
//       ) : (
//         <GuestList
//           guests={guests}
//           onToggleConfirm={toggleConfirm}
//           onToggleRSVP={toggleRSVP}
//           onRemoveGuest={removeGuest}
//           onUpdateGuest={updateGuest}
//         />
//       )}
//     </div>
//   );
// }
// App
//
// .js
import { createContext, useState, useContext, useEffect } from 'react';
import './App.css';


// Role Context
const RoleContext = createContext();

// Component definitions
const RoleSwitcher = () => {
  const { role, toggleRole } = useContext(RoleContext);

  return (
    <div className="flex items-center space-x-2 mb-4">
      <span className="text-sm font-medium text-gray-700">
        Current Role: 
        <span className={`ml-1 ${role === 'admin' ? 'text-purple-600 font-bold' : 'text-blue-600 font-bold'}`}>
          {role.charAt(0).toUpperCase() + role.slice(1)}
        </span>
      </span>
      <button
        onClick={toggleRole}
        className={`px-4 py-2 rounded-lg text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          role === 'user'
            ? 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-500'
            : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
        }`}
      >
        Switch to {role === 'user' ? 'Admin' : 'User'}
      </button>
    </div>
  );
};

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
    if (e) e.preventDefault();
    onUpdate(editedBook);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedBook({ ...book });
    setIsEditing(false);
  };

  // EditForm component for inline editing
  const EditForm = () => (
    <div className="p-4 space-y-3">
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
          type="button"
          onClick={handleSubmit}
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button>
      </div>
    </div>
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
    <div className="card">
      {isEditing ? <EditForm /> : <BookDisplay />}
    </div>
  );
};

const BookList = () => {
  // Sample initial books
  const initialBooks = [
    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 2, title: '1984', author: 'George Orwell' },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  ];

  const [books, setBooks] = useState(initialBooks);
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
    if (e) e.preventDefault();
    
    // Basic validation
    if (!newBook.title || !newBook.author) return;
    
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

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
    console.log('Books saved to localStorage:', books);
  }, [books]);

  console.log('Books loaded from localStorage:', books);

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
        <div className="mb-8 bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Add New Book</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="newTitle" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                id="newTitle"
                name="title"
                value={newBook.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="newAuthor" className="block text-sm font-medium text-gray-700 mb-1">Author</label>
              <input
                type="text"
                id="newAuthor"
                name="author"
                value={newBook.author}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="self-end">
              <button
                onClick={handleAddBook}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Add Book
              </button>
            </div>
          </div>
        </div>
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

// Main App Component
export default function App() {
  const [role, setRole] = useState('user'); // Default role is 'user'

  // Function to toggle between 'user' and 'admin' roles
  const toggleRole = () => {
    setRole(prevRole => (prevRole === 'user' ? 'admin' : 'user'));
  };

  // Role context value
  const roleContextValue = {
    role,
    toggleRole
  };

  return (
    <RoleContext.Provider value={roleContextValue}>
      <div className="app-bg">
        <header className="dashboard-header">
          <h1 className="dashboard-title">📚 Book Dashboard</h1>
          <RoleSwitcher />
        </header>
        <main className="dashboard-main">
          <BookList />
        </main>
        <footer className="dashboard-footer">
          <p>CS-343: Web Technologies - Lab 11 Book Dashboard</p>
        </footer>
      </div>
    </RoleContext.Provider>
  );
}