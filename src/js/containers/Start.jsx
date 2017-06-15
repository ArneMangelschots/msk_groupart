import React from 'react';
import {Link} from 'react-router-dom';
import {object} from 'prop-types';

import StartInfo from '../components/startComponents/StartInfo';
import Register from '../components/startComponents/Register';
import Login from '../components/startComponents/LoginForm';

const Start = ({match}) => {
  const {page} = match.params;
  return (
    <section className='start'>
      <div className='logo-login'>
        <Link to='/home'><div className='logo'></div></Link>
        <Link className='login-a' to='login'><div className='login'>login</div></Link>
      </div>
      {page === `info` &&
        <StartInfo />
      }
      {page === `register` &&
        <Register />
      }
      {page === `login` &&
        <Login />
      }
    </section>
  );
};

Start.propTypes = {
  match: object.isRequired,
};

export default Start;
