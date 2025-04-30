// RoleSwitcher.js
import { useContext } from 'react';
import { RoleContext } from './RoleContext';

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

export default RoleSwitcher;