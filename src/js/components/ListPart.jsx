import React from 'react';
import {array, string} from 'prop-types';

import Event from './Event';

const ListPart = ({events, title}) => {
  return (
    <div className='this-week'>
      <h2>{title}</h2>
        <ul>
        {
          events.map(e => (
            <Event key={e._id} {...e} nUsers={e.nUsers} dag={e.Day} />
          ))
        }
      </ul>
    </div>
  );
};

ListPart.propTypes = {
  events: array.isRequired,
  title: string.isRequired
};

export default ListPart;
