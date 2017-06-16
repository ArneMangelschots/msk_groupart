import React from 'react';

import {observer, inject, PropTypes} from 'mobx-react';
import {string, number, object} from 'prop-types';
import {Link} from 'react-router-dom';

const Event = ({date, hour, what, nUsers, capacity, store, creator, users, _id, dag}) => {

  const {user, joinEvent, leaveEvent, removeEvent, setMessage} = store;

  const handleJoin = () =>  {
    joinEvent(_id);
    setMessage(`Je bent succesvol ingeschreven!`);
  };

  const handleLeave = () => {
    leaveEvent(_id);
    setMessage(`Je hebt het event verlaten`);
  };

  const handleRemove = () => {
    removeEvent(_id);
    setMessage(`Het event is verwijderd`);
  };

  return (
    <li className='event'>

      <div className='first-part-event'>
        <div className='datum'>
          <p className='datumke'>{date.replace(`2017-`, ``)}</p>
          <p>{dag}</p>
        </div>

        <div className='wat'>
          {what !== `Vrij museumbezoek` &&
            <p className='voorstelling'>Tentoonstelling</p>
          }
          <p>{what}</p>
        </div>

        <div className='tijd'>
          <div className='klok'></div>
          <p>{hour}</p>
        </div>

        <Link to={`/event/${_id}`} className='extra-button invisible'>extra info</Link>


      </div>

      <div className='second-part-event'>
        <div className='personen'>
          <div className='groep'></div>
          <p>{nUsers}/{capacity}</p>
        </div>


      <Link to={`/event/${_id}`} className='extra-button'>extra info</Link>

      <div className='tijd invisible'>
        <div className='klok'></div>
        <p>{hour}</p>
      </div>

      {creator === user &&
        <button className='remove-button'onClick={handleRemove}>Verwijder</button>
      }
      {users.includes(user) && creator !== user &&
        <button className='leave-button' onClick={handleLeave}>Schrijf uit</button>
      }
      {!users.includes(user) && creator !== user &&
        <button className='join-button' onClick={handleJoin}>Schrijf in</button>
      }
      </div>
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
  dag: string.isRequired,
  users: object.isRequired,
  _id: string.isRequired,
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Event)
);
