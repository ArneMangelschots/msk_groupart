import React from 'react';
import {object} from 'prop-types';
import {observer, inject, PropTypes} from 'mobx-react';

import EventDetail from '../components/EventDetail';

const DetailPage = ({match, store}) => {

  const {events} = store;

  const {id} = match.params;
  const event = events.filter(e => e._id === id)[0];

  return (
    <EventDetail event={event} dag={event.Day} nUsers={event.nUsers} image={event.image} />
  );
};

DetailPage.propTypes = {
  match: object.isRequired,
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(DetailPage)
);
