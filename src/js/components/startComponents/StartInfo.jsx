import React from 'react';
import {Link} from 'react-router-dom';
import {observer, inject, PropTypes} from 'mobx-react';

const StartInfo = ({store}) => {
  const {togglePopup, popup} = store;

  return (
      <div className='groupart'>
        <div className='groupart-box'>
          <h1>Groupart</h1>
          <p>
            Maak en join events en ga samen met andere kunstliefhebbers naar het msk.
            Ontmoet nieuwe mensen en deel jouw passie met hen. Word nu lid van Groupart!
          </p>
          <Link to='/home/register' className='doe-button'>ik doe mee!</Link>
        </div>
        <div className='question-flexbox'>
          <a onClick={togglePopup} className='question-a'>
            <div className='question-box'>
            <div className='question'>{popup ? `x` : `?`}</div>
            </div>
          </a>
        </div>
      </div>
  );
};

StartInfo.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(StartInfo)
);
