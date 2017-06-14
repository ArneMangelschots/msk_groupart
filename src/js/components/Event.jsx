import React from 'react';

import {observer, inject, PropTypes} from 'mobx-react';
import {string, number, object} from 'prop-types';
import {Link} from 'react-router-dom';

const Event = ({date, hour, what, nUsers, capacity, store, creator, users, _id}) => {

  const {user, joinEvent, leaveEvent, removeEvent, setMessage} = store;

  const handleJoin = () =>  {
    joinEvent(_id);
    setMessage(`Je hebt het event gejoined`);
  };

  const handleLeave = () => {
    leaveEvent(_id);
  };

  const handleRemove = () => {
    removeEvent(_id);
  };

  return (
    <li className='event'>

      <div className='datum'>
        <p className='datumke'>16-07</p>
        <p>Maandag</p>
      </div>

      <div className='wat'>
        <p className='voorstelling'>tentoonstelling</p>
        <p>Restauratie lam gods</p>
      </div>

      <div className='tijd'>
        <div className='klok'></div>
        <p>14:00</p>
      </div>

      <div className='personen'>
        <div className='groep'></div>
        <p>4/10</p>
      </div>

      <button className='extra-button'>extra info</button>

      {creator === user &&
        <button className='remove-button'onClick={handleRemove}>Remove</button>
      }
      {users.includes(user) && creator !== user &&
        <button className='leave-button' onClick={handleLeave}>Leave Event</button>
      }
      {!users.includes(user) && creator !== user &&
        <button className='join-button' onClick={handleJoin}>Join</button>
      }
    </li>
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
