// RoleContext.js
import { createContext, useState } from 'react';

// Create a context for user role management
export const RoleContext = createContext();

// Create a provider component to wrap around the application
export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState('user'); // Default role is 'user'

  // Function to toggle between 'user' and 'admin' roles
  const toggleRole = () => {
    setRole(prevRole => (prevRole === 'user' ? 'admin' : 'user'));
  };

  // Value object to be provided to consumers
  const value = {
    role,
    toggleRole
  };

  return (
    <RoleContext.Provider value={value}>
      {children}
    </RoleContext.Provider>
  );
};