import React from 'react';
import {array} from 'prop-types';

import Event from './Event';

const ListPart = ({events}) => {
  return (
    <div className='this-week'>
      <h2>Deze week</h2>
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
  events: array.isRequired
};

export default ListPart;
