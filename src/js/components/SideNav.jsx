import React from 'react';
import {Link} from 'react-router-dom';

const SideNav = () => {
  return (
    <div className='sidebar'>
      <header>
        <div className='msk-logo'>
          <img src='assets/img/logo-msk.png' height='64' width='82' />
        </div>
      </header>

      <ul className='side-links'>
        <li className='events'><Link to='/ontdek'>Events</Link></li>
        <li className='mijn-events'>
          <Link to='/mijnEvents'>Mijn events</Link>
          <div className='pop-melding'>3</div>
        </li>
        <li className='event-aanmaken'>
          <Link to='/add'>
          Event maken
          <div className='plus'>+</div>
        </Link>
        </li>
      </ul>

    </div>
  );
};
export default SideNav;
