import React from 'react';
import {Link} from 'react-router-dom';
import {observer, inject, PropTypes} from 'mobx-react';
import {withRouter} from 'react-router';
import {object} from 'prop-types';

const SideNav = ({store, history}) => {

  const {nMyEvents, filterByTent} = store;

  console.log(history.location.pathname);
  const handleChangePage = () => {
    filterByTent(`%`);
  };

  return (
    <div className='sidebar'>
      <header>
        <div className='msk-logo'>
          <img src='assets/img/logo-msk.png' height='64' width='82' />
        </div>
      </header>

      <ul className='side-links'>
        <li className='events'><Link className={history.location.pathname === `/ontdek` ? `active` : ``} to='/ontdek'>Events</Link></li>
        <li className='mijn-events'>
          <Link to='/mijnEvents' className={history.location.pathname === `/mijnEvents` ? `active` : ``} onClick={handleChangePage}>Mijn events</Link>
          <div className='pop-melding'>{nMyEvents}</div>
        </li>
        <li className='event-aanmaken'>
          <Link className={history.location.pathname === `/add` ? `active` : ``} to='/add'>
          Event maken
          <div className='plus'>+</div>
        </Link>
        </li>
      </ul>

    </div>


  );
};

SideNav.propTypes = {
  store: PropTypes.observableObject.isRequired,
  history: object.isRequired
};

export default inject(`store`)(
  withRouter(observer(SideNav))
);
