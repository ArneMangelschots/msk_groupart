import React from 'react';
import {string} from 'prop-types';

import {inject, observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import {Route, Switch, Redirect} from 'react-router-dom';
import Overview from './Overview';
import Favorites from './Favorites';
import Add from './Add';
import Login from './Login';
import Logout from '../components/Logout';

import SideNav from '../components/SideNav';

const App = ({user}) => {


  return (
    <section>
      {process.env.NODE_ENV !== `production` ? <DevTools /> : null}
      <header>
        <h1>Msk</h1>
        {user.length > 0 &&
          <Logout />
        }
      </header>
      {user.length > 0 &&
        <section className='container'>
          <SideNav />
            <Switch>
              <Route
                exact path='/ontdek'
                component={Overview}
              />
              <Route
                exact path='/favorites'
                component={Favorites}
              />
              <Route
                exact path='/add'
                component={Add}
              />
              <Route
                  render={() => <Redirect to='/ontdek' />}
                />
            </Switch>
        </section>
      }
      {user.length < 1 &&
        <Login />
      }
    </section>

  );

};

App.propTypes = {
  user: string.isRequired
};

export default inject(
  ({store}) => ({
    user: store.user
  })
)(
  observer(App)
);
