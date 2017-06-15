/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {observer, inject, PropTypes} from 'mobx-react';
import {Link} from 'react-router-dom';

<<<<<<< HEAD
import ListPart from '../ListPart';
=======
import Event from '../Event';
import {Link} from 'react-router-dom';
>>>>>>> aafa4ca0700bc08aa85db41e727e58b759108583

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
      {createdEvents.length === 0 && signedEvents.length === 0 &&
        <div className='no-events'>Geen events gevonden, <Link to='/add'>Maak er eentje aan</Link> of <Link to='/ontdek'>Schrijf je in!</Link> </div>
      }
      {createdEvents.length > 0 &&
        <ListPart events={createdEvents} title='Aangemaakte events' />
      }
      {signedEvents.length > 0 &&
        <ListPart events={signedEvents} title='Ingeschreven' />
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
