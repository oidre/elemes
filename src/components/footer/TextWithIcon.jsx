import React from 'react';

function TextWithIcon({ icon, text }) {
  return (
    <div className="flex space-x-1 items-center">
      {icon}
      <span className="text-gray-800">{text}</span>
    </div>
  );
}

export default TextWithIcon;
