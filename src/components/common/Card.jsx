import React from 'react';

const Card = ({ children, className = '', hover = false, onClick }) => {
  const baseClasses = 'bg-white rounded-lg shadow-sm border border-gray-200';
  const hoverClasses = hover ? 'hover:shadow-md hover:scale-[1.02] transition-all duration-200 cursor-pointer' : '';

  return (
    <div 
      className={`${baseClasses} ${hoverClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;