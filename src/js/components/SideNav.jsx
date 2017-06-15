import React from 'react';
import {Link} from 'react-router-dom';
import {observer, inject, PropTypes} from 'mobx-react';

const SideNav = ({store}) => {

  const {nMyEvents, filterByTent} = store;

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
        <li className='events'><Link to='/ontdek'>Events</Link></li>
        <li className='mijn-events'>
          <Link to='/mijnEvents' onClick={handleChangePage}>Mijn events</Link>
          <div className='pop-melding'>{nMyEvents}</div>
        </li>
        <li className='event-aanmaken'>
          <Link to='/add'>
          Event maken
          <div className='plus'>+</div>
        </Link>
        </li>
      </ul>

    </div>


  );
};

SideNav.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(SideNav)
);
