import React from 'react'

const Button2 = ({ children }) => {
    return (
      <div
        className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 inline-flex rounded-lg tablet:hidden"
      >
        {/* Button dengan konten */}
        <button
          className="bg-gray-900 p-2 px-4 text-center relative inline-flex items-center h-8 justify-center rounded-lg tablet:hidden"
        >
          <span className="text-white text-lg font-semibold">{children}</span>
        </button>
      </div>
    );
  };

export default Button2