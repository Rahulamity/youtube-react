import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early Return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48 bg-gray-900 text-white">
      <ul className="mb-6">
        <li className="mb-2">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
        </li>
        <li className="mb-2 text-gray-300">Demo</li>
        <li className="mb-2 text-gray-300">Shorts</li>
        <li className="mb-2 text-gray-300">Videos</li>
        <li className="mb-2 text-gray-300">Live</li>
      </ul>
      <h1 className="font-bold text-lg mb-3 text-gray-300">Subscriptions</h1>
      <ul className="mb-6">
        <li className="mb-2 text-gray-300">Music</li>
        <li className="mb-2 text-gray-300">Sports</li>
        <li className="mb-2 text-gray-300">Gaming</li>
        <li className="mb-2 text-gray-300">Movies</li>
      </ul>
      <h1 className="font-bold text-lg mb-3 text-gray-300">Watch Later</h1>
      <ul>
        <li className="mb-2 text-gray-300">Music</li>
        <li className="mb-2 text-gray-300">Sports</li>
        <li className="mb-2 text-gray-300">Gaming</li>
        <li className="mb-2 text-gray-300">Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
