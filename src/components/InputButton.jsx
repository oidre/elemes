import React from 'react';

function InputButton() {
  return (
    <div className="relative rounded-lg">
      <input
        type="email"
        name="email"
        id="email"
        className="block w-full pl-3 py-2 pr-12 sm:text-sm rounded-lg border-2 border-gray-600"
        placeholder="Your email address"
      />
      <div className="absolute inset-y-0 right-0 flex items-center bg-primary rounded-r-lg">
        <button className="px-3 text-white font-medium">SEND</button>
      </div>
    </div>
  );
}

export default InputButton;
