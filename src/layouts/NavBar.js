import React from 'react';
import { MdStore } from 'react-icons/md';

import { Link } from 'react-router-dom';

const NavBar = ({ title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <MdStore />
        <i>{title}</i>
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

NavBar.defaultProps = {
  title: ' Tech Store',
};

export default NavBar;
