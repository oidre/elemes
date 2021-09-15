import React from 'react';

function HeaderSection({ title, subtitle }) {
  return (
    <div className="prose-sm lg:prose-lg font-medium text-lg">
      <div>{title}</div>
      <div className="text-primary">{subtitle}</div>
    </div>
  );
}

export default HeaderSection;
