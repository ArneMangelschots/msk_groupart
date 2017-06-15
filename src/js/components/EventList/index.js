/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {observer, inject, PropTypes} from 'mobx-react';
import ListPart from '../ListPart';

const EventList = ({store}) => {

  const {thisWeek, nextWeek, thisMonth} = store;

  return (
    <div className='event-list'>
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
