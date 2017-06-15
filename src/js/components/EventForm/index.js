/* eslint-disable react/jsx-filename-extension */
//import {Redirect} from 'react-router-dom';

import React from 'react';
import {observer, inject, PropTypes as MobxProp} from 'mobx-react';
import {withRouter} from 'react-router';
import PropTypes from 'prop-types';


import moment from 'moment';

const EventForm = ({store, history}) => {

  const {setHours, hoursByDay, what, setWhat, add, tents, checkTentDate, setMessage} = store;

  let $date = ``;
  let $hour = ``;
  let $capacity = ``;
  let $what = ``;
  let $title = ``;

  const today = moment().format(`YYYY-MM-DD`);
  const maxDate = moment(today).add(1, `month`).format(`YYYY-MM-DD`);

  const handleDateChange = () => {
    setHours($date.value);
    checkTentDate($date.value);
  };

  const handleRadioChange = e => {
    setWhat(e.currentTarget.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    let whatValue = ``;
    if (what === `vrij`) {
      whatValue = `Vrij museumbezoek`;
    } else {
      whatValue = $what.value;
    }
    const data = {
      date: $date.value,
      hour: $hour.value,
      capacity: $capacity.value,
      what: whatValue,
      title: $title.value
    };
    if (add(data)) {
      console.log(`joe`);
      setMessage(`Jou event is toegevoegd!`);
      history.push(`/ontdek`);
    }
    $date.value = ``;
    $hour.value = ``;
    $capacity.value = ``;
    setWhat(`vrij`);
    $title.value = ``;
  };

  return (
    <form className='add-form' onSubmit={handleFormSubmit}>
      <label htmlFor='date'>Wanneer gaat je event door?</label>
      <div className='form-rij'>
        <input
          className='kalender'
          type='date'
          id='date'
          onChange={handleDateChange}
          ref={$el => $date = $el}
          min={today}
          max={maxDate}
        />
          <label htmlFor='hour'></label>
           <select className='select-uur' ref={$el => $hour = $el}>
            {
              hoursByDay.map(h => (
                <option key={h}>{h}</option>
              ))
            }
          </select>
      </div>
      <label htmlFor='what'>Wat ga je doen?</label>
      <div className='form-rij'>
      <span>Vrij museumbezoek</span><input
        className='radiobutton'
        type='radio'
        name='what'
        value='vrij'
        checked={what === `vrij` ? `checked` : ``}
        onChange={handleRadioChange}
      />

      <span>Vrij museumbezoek</span><input
        className='radiobutton'
        type='radio'
        name='what'
        value='tentoonstelling'
        checked={what === `tentoonstelling` ? `checked` : ``}
        onChange={handleRadioChange}
      />
    </div>
      {what === `tentoonstelling` &&
      <div className='form-collum'>
        <label htmlFor='tents'>Kies een tentoonstelling</label>
         <select className='select-tent' ref={$el => $what = $el}>
           {
             tents.map(t => (
               <option key={t.name}>{t.name}</option>
             ))
           }
        </select>
      </div>
      }

      <div className='text-box'>
        <label htmlFor='title'>Geef je event korte beschrijving</label><br />
        <textarea
          type='text'
          id='title'
          ref={$el => $title = $el}
        />
      </div>

      <div className='capacity-box'>
        <label htmlFor='capacity'></label>
        <input className='capacity'
          type='number'
          min='5'
          max='20'
          defaultValue='5'
          ref={$el => $capacity = $el}
        />
      </div>

      <input className='add-button'
        type='submit'
        value='Maak aan'
      />
    </form>
  );
};



EventForm.propTypes = {
  store: MobxProp.observableObject.isRequired,
  history: PropTypes.object.isRequired
};

export default inject(`store`)(
  withRouter(observer(EventForm))
);
