import React from 'react';
import {Link} from 'react-router-dom';

const StartInfo = () => {
  return (
      <div className='groupart'>
        <div className='groupart-box'>
          <h1>Groupart</h1>
          <p>
            Maak en join events en ga samen met andere kunstliefhebbers naar het msk.
            Ontmoet nieuwe mensen en deel jouw passie met hen. Word nu lid van Groupart!
          </p>
          <Link to='/register' className='doe-button'>ik doe mee!</Link>
        </div>

        <div className='question-flexbox'>
          <a className='question-a'>
            <div className='question-box'>
            <div className='question'>?</div>
            </div>
          </a>
        </div>
      </div>
  );
};
export default StartInfo;
