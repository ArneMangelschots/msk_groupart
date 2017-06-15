/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {observer, inject, PropTypes} from 'mobx-react';
import {Link} from 'react-router-dom';
<<<<<<< HEAD
import ListPart from '../ListPart';
=======

import ListPart from '../ListPart';
import Message from '../Message';
>>>>>>> f4c48989691dac8f920138a457f1cb4bf5a7b140


const MijnEventsList = ({store}) => {

  const {createdEvents, signedEvents, infoMessage} = store;

  console.log(createdEvents);

  return (
    <div className='my-events-list'>
      <header className='my-event-title'>
        <h1>Mijn Events</h1>
      </header>
      {infoMessage.length > 0 &&
        <Message />
      }
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
