import React from 'react';
import {object} from 'prop-types';
import {observer, inject, PropTypes} from 'mobx-react';

const EventDetail = ({match, store}) => {

  const {events} = store;

  const {id} = match.params;
  const event = events.filter(e => e._id === id)[0];
  console.log(event);

  return (
    <div>Joew {event._id}</div>
  );
};

EventDetail.propTypes = {
  match: object.isRequired,
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(EventDetail)
);
