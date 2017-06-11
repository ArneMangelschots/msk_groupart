import React from 'react';

import {string, number} from 'prop-types';

const Event = ({title, date, hour, what, nUsers, capacity}) => {

  return (
    <div>{title} | {date} | {hour} | {what} | {nUsers}/{capacity} </div>
  );

};

Event.propTypes = {
  title: string.isRequired,
  date: string.isRequired,
  hour: string.isRequired,
  what: string.isRequired,
  nUsers: number.isRequired,
  capacity: string.isRequired
};

export default Event;
