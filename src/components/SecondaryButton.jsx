import React from 'react';

function SecondaryButton({ children }) {
  return (
    <button
      type="button"
      className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-sm font-medium rounded-full outline-none transform transition-transform"
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
