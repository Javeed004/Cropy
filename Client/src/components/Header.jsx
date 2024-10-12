import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };

  return (
    <header className="relative bg-green-400 p-4">
      <div className="max-w-full mx-auto">
        {/* Top Right: Sign In/Sign Out Button */}
        <div className="absolute right-4 top-4">
          {!isAuthenticated ? (
            <Link
              to="/sign-up"
              className="bg-white text-green-600 py-2 px-4 rounded-lg hover:bg-gray-200"
            >
              Sign In
            </Link>
          ) : (
            <button
              onClick={handleSignOut}
              className="bg-white text-green-600 py-2 px-4 rounded-lg hover:bg-gray-200"
            >
              Sign Out
            </button>
          )}
        </div>

        {/* Centered Logo */}
        <div className="flex justify-center items-center text-center">
          <Link to="/" className="text-white text-4xl font-extrabold">
            Cropy
          </Link>
        </div>

        {/* Full Width Line Above Navigation */}
        <div className="border-t border-white mt-4"></div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-72 mt-2">
          <Link to="/" className="text-white hover:text-green-200">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-green-200">
            About
          </Link>
          <Link to="/services" className="text-white hover:text-green-200">
            Services
          </Link>
          <Link to="/contact" className="text-white hover:text-green-200">
            Contact
          </Link>
        </nav>

        {/* Full Width Line Below Navigation */}
        <div className="border-b border-white mt-2"></div>
      </div>
    </header>
  );
}

export default Header;
