import React from 'react';

const Button = ({ children }) => {
  return (
    <div
      className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 inline-flex"
      style={{
        clipPath: "polygon(0 0, 75% 0, 100% 32%, 100% 100%, 0 100%)",
        borderRadius: "0.5rem"  // Tambahkan border radius agar sesuai dengan bentuk rounded
      }}
    >
      {/* Button dengan konten */}
      <button
        className="bg-gray-900 p-2 px-4 text-center relative inline-flex items-center h-8 justify-center"
        style={{
          clipPath: "polygon(0 0, 75% 0, 100% 35%, 100% 100%, 0 100%)",
          borderRadius: "0.5rem"  // Tambahkan border radius agar sesuai dengan bentuk rounded
        }}
      >
        <span className="text-white text-lg font-semibold">{children}</span>
      </button>
    </div>
  );
};

export default Button;
