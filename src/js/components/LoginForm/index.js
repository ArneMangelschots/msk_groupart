/* eslint-disable react/jsx-filename-extension */
import {observer, inject, PropTypes} from 'mobx-react';
import React from 'react';

const LoginForm = ({store}) => {

  let $username = ``;
  let $password = ``;

  const {handleLogin} = store;

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      login: $username.value,
      password: $password.value
    };
    handleLogin(data);
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
        ref={$el => $password = $el}
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
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(LoginForm)
);
