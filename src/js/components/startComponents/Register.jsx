import React from 'react';
import {withRouter} from 'react-router';
import {object} from 'prop-types';
import {Link} from 'react-router-dom';

const Register = ({history}) => {

  const handleRegisterSubmit = e => {
    e.preventDefault();
    history.push(`/home/login`);
  };

  return (
    <div className='register-box'>
      <div className='register-content'>
        <header>
          <h1>Registeren</h1>
        </header>

        <form onSubmit={handleRegisterSubmit} className='register-form'>
          <div className='register-inputs'>
            <label htmlFor='username'></label>
            <input
              className='register-input'
              type='text'
              id='username'
              placeholder='Gebruikersnaam'
            />
            <label htmlFor='email'></label>
            <input
              className='register-input'
              type='text'
              id='email'
              placeholder='Email'
            />
            <label htmlFor='password'></label>
            <input
              className='register-input'
              type='password'
              id='password'
              placeholder='Wachtwoord'
            />
            <label htmlFor='verifyPassword'></label>
            <input
              className='register-input'
              type='password'
              id='verifyPassword'
              placeholder='Bevestig wachtwoord'

            />
            </div>
            <input className='register-button'
              type='submit'
              id='login'
              value='registreer'
            />
            <div className='nog-box'>
              <p>Heb je al een account? Dan kan je hier <Link to='/home/login'>inloggen</Link> </p>
            </div>

        </form>
      </div>
    </div>
  );

};

Register.propTypes = {
  history: object.isRequired
};

export default withRouter(Register);
