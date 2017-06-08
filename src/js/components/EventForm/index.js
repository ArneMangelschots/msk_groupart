/* eslint-disable react/jsx-filename-extension */

import React from 'react';

import {observer, inject, PropTypes} from 'mobx-react';

const EventForm = ({store}) => {

  const {setHours, hoursByDay, what, setWhat, addEvent} = store;

  console.log(hoursByDay.length);

  let $date = ``;
  let $hour = ``;
  let $capacity = ``;
  let $what = ``;
  let $title = ``;


  const handleDateChange = () => {
    setHours($date.value);
  };

  const handleRadioChange = e => {
    setWhat(e.currentTarget.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const data = {
      date: $date.value,
      hour: $hour.value,
      capacity: $capacity.value,
      what: $what.value,
      title: $title.value
    };
    addEvent(data);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <br /><br />
      <label htmlFor='date'>Datum</label>
      <input
        type='date'
        id='date'
        onChange={handleDateChange}
        ref={$el => $date = $el}
      /><br /><br />
      {hoursByDay.length > 2 &&
      <div className='uur'>
        <label htmlFor='hour'>Aanvangsuur</label>
         <select ref={$el => $hour = $el}>
          {
            hoursByDay.map(h => (
              <option key={h}>{h}</option>
            ))
          }
        </select>
      </div>
      }
      {hoursByDay.length < 2 &&
      <div className='uur'>
        <p className='error'>Sorry het museum is dan gesloten! Kies een andere dag</p>
      </div>
      }<br /><br />
      <label htmlFor='title'>Geef je event een titel/korte beschrijving</label>
      <input
        type='text'
        id='title'
        ref={$el => $title = $el}
      />
      <br /><br />
      <p>Wat ga je doen?</p><br />
      Vrij museumbezoek<input
        type='radio'
        name='what'
        value='vrij'
        checked={what === `vrij` ? `checked` : ``}
        onChange={handleRadioChange}
      />
      Tentoonstelling bekijken<input
        type='radio'
        name='what'
        value='tentoonstelling'
        checked={what === `tentoonstelling` ? `checked` : ``}
        onChange={handleRadioChange}
      /><br /><br />
      {what === `tentoonstelling` &&
      <div className='tentoonstellingen'>
        <label htmlFor='tents'>Kies een tentoonstelling</label>
         <select ref={$el => $what = $el}>
          <option>KMSKA te gast</option>
          <option>Restauratie Lam Gods</option>
          <option>MetaFloristiek</option>
          <option>Written Room</option>
          <option>Manufactories of Caring Space-Time</option>
        </select>
      </div>
      }<br />
      <label htmlFor='capacity'>Hoeveel personen mogen mee doeken?</label>
      <input
        type='number'
        min='5'
        max='20'
        defaultValue='5'
        ref={$el => $capacity = $el}
      /><br /><br />
      <input
        type='submit'
        value='maak het event aan!'
      />
    </form>
  );
};

EventForm.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(EventForm)
);
