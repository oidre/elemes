import React from 'react';

function IconBackground({ children }) {
  return (
    <div className="bg-white hover:bg-primary p-3 rounded-full group">
      {children}
    </div>
  );
}

export default IconBackground;
