import React from 'react';
import {Link} from 'react-router-dom';

const MobileNav = () => {
  return (
    <div className='mobile-nav'>
      <li className='events-mobile'><Link to='/ontdek'>Events</Link></li>
      <li className='mijn-events-mobile'>
        <Link to='/mijnEvents'>Mijn events</Link>
      </li>
      <li className='event-aanmaken-mobile'>
        <Link to='/add'>Maak event</Link>
      </li>
    </div>
  );
};

export default MobileNav;
