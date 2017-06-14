import React from 'react';
import {observer, inject, PropTypes} from 'mobx-react';

const Logout = ({store}) => {

  const {user, handleLogout} = store;

  const handleClick = e => {
    e.preventDefault();
    handleLogout();
  };

  return (
    <div className='login-welkom'>
      <p>Welcome, <strong>{user}</strong> <a href='#' onClick={handleClick}> | log uit</a></p>
    </div>
  );
};

Logout.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Logout)
);
