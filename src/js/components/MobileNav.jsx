import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

import {object} from 'prop-types';

const MobileNav = ({history}) => {
  return (
    <div className='mobile-nav'>
      <Link to='/ontdek' className={history.location.pathname === `/ontdek` ? `active` : ``}>Events</Link>
      <Link to='/mijnEvents' className={history.location.pathname === `/mijnEvents` ? `active` : ``}>Mijn events</Link>
      <Link to='/add' className={history.location.pathname === `/add` ? `active` : ``}>Maak event</Link>
    </div>
  );
};

MobileNav.propTypes = {
  history: object.isRequired
};

export default withRouter(MobileNav);
