import React from 'react';

import EventForm from '../components/EventForm/';

const Add = () => {
  return (
    <div className='add-event'>
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
