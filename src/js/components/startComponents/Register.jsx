import React from 'react';

const Register = () => {
  return (
    <div className='register-box'>
      <div className='register-content'>
        <header>
          <h1>Registeren</h1>
        </header>

        <form onSubmit className='register-form'>
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
              <p>Heb je al een account? Dan kan je hier <a href='/login'>inloggen</a> </p>
            </div>

        </form>
      </div>
    </div>
  );
};

export default Register;
