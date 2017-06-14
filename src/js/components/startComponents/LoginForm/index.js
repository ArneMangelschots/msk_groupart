/* eslint-disable react/jsx-filename-extension */
import {observer, inject, PropTypes} from 'mobx-react';
import {object} from 'prop-types';
import React from 'react';
import {withRouter} from 'react-router';

const LoginForm = ({store, history}) => {

  let $username = ``;

  const {handleLogin} = store;

  const handleSubmit = e => {
    e.preventDefault();
    handleLogin($username.value);
    history.push(`/ontdek`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='username'>Username</label>
      <input
        type='text'
        id='username'
        ref={$el => $username = $el}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        id='password'
      />
      <input
        type='submit'
        id='login'
        value='inloggen'
      />
    </form>
  );
};

LoginForm.propTypes = {
  store: PropTypes.observableObject.isRequired,
  history: object.isRequired
};

export default inject(`store`)(
  withRouter(observer(LoginForm))
);
