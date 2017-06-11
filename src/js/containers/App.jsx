import React from 'react';
import {string} from 'prop-types';

import {inject, observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import {Route, Switch, Redirect} from 'react-router-dom';
import Overview from './Overview';
import Favorites from './Favorites';
import Add from './Add';
import Login from './Login';

import SideNav from '../components/SideNav';

const App = ({name}) => (

  <section>

    {process.env.NODE_ENV !== `production` ? <DevTools /> : null}

    <header>
      <h1>Hello, {name}</h1>
    </header>

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
            exact path='/login'
            component={Login}
          />
          <Route
              render={() => <Redirect to='/ontdek' />}
            />
        </Switch>
    </section>

  </section>

);

App.propTypes = {
  name: string.isRequired
};

export default inject(
  ({store}) => ({
    name: store.name
  })
)(
  observer(App)
);
