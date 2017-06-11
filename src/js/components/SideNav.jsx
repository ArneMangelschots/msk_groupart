import React from 'react';
import {Link} from 'react-router-dom';

const SideNav = () => {
  return (
    <ul>
      <Link to='/ontdek'>Ontdek</Link>
      <Link to='/favorites'>favorites</Link>
      <Link to='/add'>Add Event</Link>
      <Link to='/login'>Login</Link>
    </ul>
  );
};
export default SideNav;
