/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {observer, inject, PropTypes} from 'mobx-react';
import ListPart from '../ListPart';
import {Link} from 'react-router-dom';

const EventList = ({store}) => {

  const {thisWeek, nextWeek, thisMonth} = store;

  console.log(thisMonth);

  return (
    <div className='event-list'>
      {thisWeek.length === 0 && nextWeek.length === 0 && thisMonth.length === 0 &&
        <div className='no-events'>Geen events gevonden, <Link to='/add'>Maak er eentje aan</Link></div>
      }
      {thisWeek.length > 0 &&
        <ListPart events={thisWeek} title='Deze week' />
      }
      {nextWeek.length > 0 &&
        <ListPart events={nextWeek} title='Volgende week' />
      }
      {thisMonth.length > 0 &&
        <ListPart events={thisMonth} title='Rest van de maand' />
      }
    </div>
  );
};


EventList.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(EventList)
);
