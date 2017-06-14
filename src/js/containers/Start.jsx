import React from 'react';

const Start = () => {
  return (
    <section className='start'>

      <div className='logo-login'>
        <div className='logo'></div>
        <a className='login-a' href='#'><div className='login'>login</div></a>
      </div>

      <div className='groupart'>
        <div className='groupart-box'>
          <h1>Groupart</h1>
          <p>
            Maak en join events en ga samen met andere kunstliefhebbers naar het msk.
            Ontmoet nieuwe mensen en deel jouw passie met hen. Word nu lid van Groupart!
          </p>
          <div className='doe-button'>ik doe mee!</div>
        </div>

        <div className='question-flexbox'>
          <a className='question-a' href='#'>
            <div className='question-box'>
            <div className='question'>?</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Start;
