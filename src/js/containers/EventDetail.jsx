import React from 'react';
import {object} from 'prop-types';
import {observer, inject, PropTypes} from 'mobx-react';

const EventDetail = ({match, store}) => {

  const {events} = store;

  const {id} = match.params;
  const event = events.filter(e => e._id === id)[0];
  console.log(event);

  return (
    <div className='detail'>
      <a href='#' className='back'>
        <strong>&#60;</strong> keer terug
      </a>
      <div className='detail-content'>
        <div className='practical'>

          <div className='datum-box'>
            <h1>16-06</h1>
            <h2>maandag</h2>
          </div>

          <div className='practical-picture'>
            <img src='assets/img/picture.png' width='250' height='200'></img>
            <div className='practical-box'>
              <div className='time-box'>
                <div className='timer'></div>
                <p>14:00</p>
              </div>
              <div className='group-box'>
                <div className='group-icon'></div>
                <p>4/10</p>
              </div>
            </div>
          </div>
        </div>

        <div className='description'>
          <div className='event-title-box'>
            <h1>tentoonstelling</h1>
            <h2>Restauratie Lam Gods</h2>
          </div>
          <div className='description-box'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className='maak-button-box'>
              <button className='maak-button'>Maak aan</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

EventDetail.propTypes = {
  match: object.isRequired,
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(EventDetail)
);
