import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="header">
    <nav className="navBar">
      <div className="block1">
        <span className="Bookstore-cms">Bookstore CMS</span>
        <ul className="menuLinks">
          <li>
            <Link to="/books">
              <span className="books">BOOKS</span>
            </Link>
          </li>
          <li>
            <Link to="/categories">
              <span className="categories">CATEGORIES</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="oval">
        <span className="material-symbols-outlined blue">person</span>
      </div>
    </nav>
  </header>
);

export default Navbar;
