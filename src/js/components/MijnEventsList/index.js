/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {observer, inject, PropTypes} from 'mobx-react';

import Event from '../Event';

const MijnEventsList = ({store}) => {

  const {createdEvents, signedEvents} = store;

  console.log(createdEvents);

  return (
    <div className='my-events-list'>

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
