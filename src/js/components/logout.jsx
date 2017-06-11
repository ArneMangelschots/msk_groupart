import React from 'react';
import {observer, inject, PropTypes} from 'mobx-react';

const Logout = ({store}) => {

  const {user, handleLogout} = store;

  const handleClick = e => {
    e.preventDefault();
    handleLogout();
  };

  return (
    <div>
      <p>Welcome, {user} <a href='#' onClick={handleClick}>Logout</a></p>
    </div>
  );
};

Logout.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Logout)
);
