/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {observer, inject, PropTypes} from 'mobx-react';

import Event from '../Event';
import {Link} from 'react-router-dom';

const MijnEventsList = ({store}) => {

  const {createdEvents, signedEvents} = store;

  console.log(createdEvents);

  return (
    <div className='my-events-list'>

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

      <header className='my-event-title'>
        <h1>Mijn Events</h1>
      </header>

      {createdEvents.length > 0 &&
        <div className='aangemaakt'>
          <h2>Aangemaakte Events</h2>
          <ul>
            {
              createdEvents.map(e => (
                <Event key={e._id} {...e} nUsers={e.nUsers} />
              ))
            }
          </ul>
        </div>
      }
      {signedEvents.length > 0 &&
        <div className='ingeschreven'>
          <h2>Ingeschreven</h2>
          <ul>
            {
              signedEvents.map(e => (
                <Event key={e._id} {...e} nUsers={e.nUsers} />
              ))
            }
          </ul>
        </div>
      }
    </div>
  );
};


MijnEventsList.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(MijnEventsList)
);
