/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {observer, inject, PropTypes} from 'mobx-react';

import Event from '../Event';

const EventList = ({store}) => {

  const {thisWeek, nextWeek, thisMonth} = store;

  console.log(`j`);

  return (
    <div className='event-list'>
      {thisWeek.length > 0 &&
        <div className='this-week'>
          <h2>Deze week</h2>
          <table>
            <tbody>
            {
              thisWeek.map(e => (
                <Event key={e._id} {...e} nUsers={e.nUsers} />
              ))
            }
            </tbody>
          </table>
        </div>
      }
      {nextWeek.length > 0 &&
        <div className='this-week'>
          <h2>Volgende week</h2>
          <table>
            <tbody>
            {
              nextWeek.map(e => (
                <Event key={e._id} {...e} nUsers={e.nUsers} />
              ))
            }
            </tbody>
          </table>
        </div>
      }
      {thisMonth.length > 0 &&
        <div className='this-week'>
          <h2>Rest van de maand</h2>
          <table>
            <tbody>
            {
              thisMonth.map(e => (
                <Event key={e._id} {...e} nUsers={e.nUsers} />
              ))
            }
          </tbody>
          </table>
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
