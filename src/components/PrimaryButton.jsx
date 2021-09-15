import React from 'react';

function PrimaryButton({ children }) {
  return (
    <button
      type="button"
      className="px-4 py-3 bg-primary hover:bg-primary-light text-sm font-medium rounded-full text-white outline-none transform transition-transform"
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
