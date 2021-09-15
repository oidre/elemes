import React from 'react';

function GroupLink({ children, title }) {
  return (
    <div className="block space-y-5 w-2/12">
      <div className="font-medium">{title}</div>
      <div className="flex flex-col text-sm text-gray-600 space-y-2">
        {children}
      </div>
    </div>
  );
}

export default GroupLink;
