import React from 'react';
import {Link} from 'react-router-dom';

const SideNav = () => {
  return (
    <ul>
      <Link to='/ontdek'>Ontdek</Link>
      <Link to='/mijnEvents'>Mijn events</Link>
      <Link to='/add'>Add Event</Link>
    </ul>
  );
};
export default SideNav;
