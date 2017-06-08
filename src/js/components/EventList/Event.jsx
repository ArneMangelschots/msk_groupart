import React from 'react';

import {string} from 'prop-types';

const Event = ({title, date, hour, what}) => {

  return (
    <div>{title} | {date} | {hour} | {what}</div>
  );

};

Event.propTypes = {
  title: string.isRequired,
  date: string.isRequired,
  hour: string.isRequired,
  what: string.isRequired
};

export default Event;
