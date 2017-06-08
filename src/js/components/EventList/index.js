/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {observer, inject, PropTypes} from 'mobx-react';

import Event from './Event';

const EventList = ({store}) => {

  const {events} = store;

  return (
    <div className='event-list'>
      <ul>
        {
          events.map(event => (
            <Event key={event._id} {...event} />
          ))
        }
      </ul>
    </div>
  );
};


EventList.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(EventList)
);
