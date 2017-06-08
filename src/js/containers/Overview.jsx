import React from 'react';

import EventList from '../components/EventList/';
const Overview = () => {
  return (
    <div className='overview'>
      <h1>Alle Events</h1>
      <EventList />
    </div>
  );
};
export default Overview;