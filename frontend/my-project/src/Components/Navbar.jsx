import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative flex justify-between items-center px-8 pt-6">
      {/* Logo */}
      <Link to="/">
        <div className="text-xl text-black  font-bold">Parva Shah</div>
      </Link>

      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="block md:hidden text-gray-600 focus:outline-none"
      >
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 text-gray-600">
        <Link to="/resume">
          <li className="text-black-400 hover:text-purple-400 transition-all duration-300 cursor-pointer">
            Resume
          </li>
        </Link>
        <Link to="/projects">
          <li className="text-black-400 hover:text-purple-400 transition-all duration-300 cursor-pointer">
            Projects
          </li>
        </Link>
        <Link to="/contact">
          <li className="text-black-400 hover:text-purple-400 transition-all duration-300 cursor-pointer">
            Contact
          </li>
        </Link>
      </ul>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-200 shadow-lg transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-gray-600 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="mt-20 space-y-6 pl-8 text-gray-600">
          <Link to="/resume" onClick={toggleMenu}>
            <li className="text-black-400 hover:text-purple-400 transition-all duration-300 cursor-pointer">
              Resume
            </li>
          </Link>
          <Link to="/projects" onClick={toggleMenu}>
            <li className="text-black-400 hover:text-purple-400 transition-all duration-300 cursor-pointer">
              Projects
            </li>
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            <li className="text-black-400 hover:text-purple-400 transition-all duration-300 cursor-pointer">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;