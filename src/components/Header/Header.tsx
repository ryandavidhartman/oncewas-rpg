import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <Link to="/">Oncewas RPG Character Generator</Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/characters">Characters</Link>
          </li>
          <li>
            <Link to="/add-character">Add Character</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;