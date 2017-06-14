import React from 'react';
import {Link} from 'react-router-dom';
import {string} from 'prop-types';

import StartInfo from '../components/startComponents/StartInfo';
import Register from '../components/startComponents/Register';
import Login from '../components/startComponents/loginForm';

const Start = ({page}) => {
  console.log(page);
  return (
    <section className='start'>
      <div className='logo-login'>
        <div className='logo'></div>
        <Link className='login-a' to='login'><div className='login'>login</div></Link>
      </div>
      {page === `home` &&
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
  page: string.isRequired
};

export default Start;
