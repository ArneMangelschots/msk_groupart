import React from 'react';

import {observer, inject, PropTypes} from 'mobx-react';
import {string, number, object} from 'prop-types';

const Event = ({title, date, hour, what, nUsers, capacity, store, creator, users, _id}) => {

  const {user, joinEvent, leaveEvent} = store;
  console.log(users);

  const handleJoin = () =>  {
    joinEvent(_id);
  };

  const handleLeave = () => {
    leaveEvent(_id);
  };

  return (
    <div className='event'>
      {title} | {date} | {hour} | {what} | {nUsers}/{capacity}
      {creator === user &&
        <button>Remove</button>
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
  title: string.isRequired,
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
