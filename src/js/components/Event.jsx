import React from 'react';

import {observer, inject, PropTypes} from 'mobx-react';
import {string, number, object} from 'prop-types';
import {Link} from 'react-router-dom';

const Event = ({date, hour, what, nUsers, capacity, store, creator, users, _id}) => {

  const {user, joinEvent, leaveEvent, removeEvent} = store;
  console.log(users);

  const handleJoin = () =>  {
    joinEvent(_id);
  };

  const handleLeave = () => {
    leaveEvent(_id);
  };

  const handleRemove = () => {
    removeEvent(_id);
  };

  return (
    <div className='event'>
      <Link to={`/event/${_id}`}>{date} | {hour} | {what} | {nUsers}/{capacity}</Link>
      {creator === user &&
        <button onClick={handleRemove}>Remove</button>
      }
      {users.includes(user) && creator !== user &&
        <button onClick={handleLeave}>Leave Event</button>
      }
      {!users.includes(user) && creator !== user &&
        <button onClick={handleJoin}>Join</button>
      }
    </div>
  );

};

Event.propTypes = {
  date: string.isRequired,
  hour: string.isRequired,
  what: string.isRequired,
  nUsers: number.isRequired,
  capacity: string.isRequired,
  creator: string.isRequired,
  users: object.isRequired,
  _id: string.isRequired,
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Event)
);
