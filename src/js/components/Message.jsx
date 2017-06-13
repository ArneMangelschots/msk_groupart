import React from 'react';
import {observer, inject, PropTypes} from 'mobx-react';

const Message = ({store}) => {

  const {infoMessage} = store;

  return (
    <div className='info-message'>{infoMessage}</div>
  );
};


Message.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Message)
);
