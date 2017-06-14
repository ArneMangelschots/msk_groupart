/* eslint-disable react/jsx-filename-extension */
import {observer, inject, PropTypes} from 'mobx-react';
import {object} from 'prop-types';
import React from 'react';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';

const LoginForm = ({store, history}) => {

  let $username = ``;

  const {handleLogin} = store;

  const handleSubmit = e => {
    e.preventDefault();
    handleLogin($username.value);
    history.push(`/ontdek`);
  };

  return (
    <div className='login-box'>
      <div className='login-content'>
        <header>
          <h1>Login</h1>
        </header>

        <form onSubmit={handleSubmit}>
          <label htmlFor='username'></label>
          <input
            className='login-input'
            type='text'
            id='username'
            ref={$el => $username = $el}
            placeholder='Gebruikersnaam'
          />
          <label htmlFor='password'></label>
          <input
            className='login-input'
            type='password'
            id='password'
            placeholder='Wachtwoord'
          />
          <div className='pass-box'>
            <p>Wachtwoord vergeten?</p>
          </div>
          <input className='login-button'
            type='submit'
            id='login'
            value='log mij in'
          />
          <div className='nog-box'>
            <p>Nog geen account? Registreer dan <Link to='/home/register'>hier</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  store: PropTypes.observableObject.isRequired,
  history: object.isRequired
};

export default inject(`store`)(
  withRouter(observer(LoginForm))
);
