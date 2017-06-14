import React from 'react';

import EventList from '../components/EventList';

const Overview = () => {

  return (
    <div className='overview'>
      <header className='event-title'>
        <h1>Events</h1>
        <select>
          <option>KMSKA te gast </option>
          <option>Restauratie lam gods</option>
          <option>Metafloristiek</option>
          <option>Written room</option>
          <option>Manufactories of caring space-time</option>
        </select>
      </header>

      <EventList />
    </div>
  );
};
export default Overview;
