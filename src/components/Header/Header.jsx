import './Header.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <nav>
        {/* <NavLink to='/'>
          <img src="https://res.cloudinary.com/depifliz3/image/upload/v1682533808/samples/Portfolio/69045_xsrmr9.png" alt="logo-programacion" className='img-header'/>
        </NavLink> */}
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
