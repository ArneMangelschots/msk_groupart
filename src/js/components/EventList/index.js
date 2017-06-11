/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {observer, inject, PropTypes} from 'mobx-react';

import Event from './Event';

const EventList = ({store}) => {

  const {thisWeek, nextWeek, thisMonth} = store;

  return (
    <div className='event-list'>
      {thisWeek.length > 0 &&
        <div className='this-week'>
          <h2>Deze week</h2>
          <ul>
            {
              thisWeek.map(e => (
                <Event key={e._id} {...e} nUsers={e.nUsers} />
              ))
            }
          </ul>
        </div>
      }
      {nextWeek.length > 0 &&
        <div className='this-week'>
          <h2>Volgende week</h2>
          <ul>
            {
              nextWeek.map(e => (
                <Event key={e._id} {...e} />
              ))
            }
          </ul>
        </div>
      }
      {thisMonth.length > 0 &&
        <div className='this-week'>
          <h2>Rest van de maand</h2>
          <ul>
            {
              thisMonth.map(e => (
                <Event key={e._id} {...e} />
              ))
            }
          </ul>
        </div>
      }
    </div>
  );
};


EventList.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(EventList)
);
