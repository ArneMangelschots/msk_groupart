import React from 'react';
import {observer, inject, PropTypes} from 'mobx-react';

const Popup = ({store}) => {

  const {togglePopup} = store;

  return (
    <div className='popup'>
      <div className='popup-info'>
        <h1>Over Groupart</h1>
        <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
      </div>
    </div>
  );
};

Popup.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Popup)
);