import React from 'react';
import {observer, inject, PropTypes} from 'mobx-react';

import EventList from '../components/EventList';
import Message from '../components/Message';


const Overview = ({store}) => {

  const {filterByTent, infoMessage} = store;

  const handleFilterChange = e => {
    filterByTent(e.currentTarget.value);
  };

  return (
    <div className='overview'>
      <header className='event-title'>
        <h1>Events</h1>
        {infoMessage.length > 0 &&
          <Message />
        }
        <select onChange={handleFilterChange}>
          <option value='%'>Geen filter</option>
          <option>KMSKA te gast</option>
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

Overview.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Overview)
);
