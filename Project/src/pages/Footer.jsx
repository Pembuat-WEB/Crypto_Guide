import React from 'react';
import { FaGithubSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="max-w-full mx-auto border-t border-gray-500 text-center py-4 px-6">
      <p className="text-gray-500 text-sm sm:text-base my-2">
        Copyright By &copy; AnantaKreasi
      </p>
      <div className="flex justify-center items-center gap-4 text-gray-500 text-2xl sm:text-3xl mt-3">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithubSquare />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
