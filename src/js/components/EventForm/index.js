/* eslint-disable react/jsx-filename-extension */
//import {Redirect} from 'react-router-dom';

import React from 'react';
import {observer, inject, PropTypes as MobxProp} from 'mobx-react';
import {withRouter} from 'react-router';
import PropTypes from 'prop-types';


import moment from 'moment';

const EventForm = ({store, history}) => {

  const {setHours, hoursByDay, what, setWhat, add, tents, checkTentDate} = store;

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
      history.push(`/ontdek`);
    }
    $date.value = ``;
    $hour.value = ``;
    $capacity.value = ``;
    setWhat(`vrij`);
    $title.value = ``;
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
        min={today}
        max={maxDate}
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
        <p className='error'>Kies een dag!</p>
      </div>
      }<br /><br />
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
           {
             tents.map(t => (
               <option key={t.name}>{t.name}</option>
             ))
           }
        </select>
      </div>
      }<br />
      <label htmlFor='title'>Geef je event korte beschrijving</label><br />
      <textarea
        type='text'
        id='title'
        ref={$el => $title = $el}
      />
      <br /><br />
      <label htmlFor='capacity'>Hoeveel personen mogen er mee met jou?</label>
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
  store: MobxProp.observableObject.isRequired,
  history: PropTypes.object.isRequired
};

export default inject(`store`)(
  withRouter(observer(EventForm))
);
