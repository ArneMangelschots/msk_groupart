/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {object, string, number} from 'prop-types';
import {observer, inject, PropTypes as MobxProp} from 'mobx-react';

const EventDetail = ({event, dag, nUsers, store, image}) => {

  console.log(image);

  const {what, date, description, hour, capacity, creator, _id, users} = event;
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
    <div className='detail'>
      <a href='#' className='back'>
        <strong>&#60;</strong> keer terug
      </a>
      <div className='detail-content'>
        <div className='practical'>
          <div className='datum-box'>
            <h1>{date}</h1>
            <h2>{dag}</h2>
          </div>

          <div className='practical-picture'>
            <img src={`../assets/img/${image}.jpg`} width='250' height='200'></img>
            <div className='practical-box'>
              <div className='time-box'>
                <div className='timer'></div>
                <p>{hour}</p>
              </div>
              <div className='group-box'>
                <div className='group-icon'></div>
                <p>{nUsers}/{capacity}</p>
              </div>
            </div>
          </div>
        </div>

        <div className='description'>
          <div className='event-title-box'>
            {what !== `Vrij museumbezoek` &&
              <h1>tentoonstelling</h1>
            }
            <h2>{what}</h2>
          </div>
          <div className='description-box'>
            <p>{description}</p>
            <div className='maak-button-box'>
              {creator === user &&
                <button className='remove-button'onClick={handleRemove}>Remove</button>
              }
              {users.includes(user) && creator !== user &&
                <button className='leave-button' onClick={handleLeave}>Leave Event</button>
              }
              {!users.includes(user) && creator !== user &&
                <button className='join-button' onClick={handleJoin}>Join</button>
              }
            </div>
          </div>

        </div>
      </div>
    </div>
  );

};

EventDetail.propTypes = {
  event: object.isRequired,
  dag: string.isRequired,
  nUsers: number.isRequired,
  store: MobxProp.observableObject.isRequired,
  image: string.isRequired
};


export default inject(`store`)(
  observer(EventDetail)
);
