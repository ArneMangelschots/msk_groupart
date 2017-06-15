import React from 'react';

import EventForm from '../components/EventForm/';
import {Link} from 'react-router-dom';

const Add = () => {
  return (
    <div className='add-event'>

      <div className='mobile-nav'>
        <li className='events-mobile'><Link to='/ontdek'>Events</Link></li>
        <li className='mijn-events-mobile'>
          <Link to='/mijnEvents'>Mijn events</Link>
          {/* <div className='pop-melding'>3</div> */}
        </li>
        <li className='event-aanmaken-mobile'>
          <Link to='/add'>Maak event</Link>
        </li>
      </div>

      <header className='add-event-title'>
        <h1>Event aanmaken</h1>
      </header>
      <div className='nieuw-event'>
        <h2>Nieuw event</h2>
      </div>
      <EventForm />
    </div>
  );
};
export default Add;
