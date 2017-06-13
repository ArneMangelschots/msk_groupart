

import React from 'react';

import {observer, inject, PropTypes} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import {Route, Switch, Redirect} from 'react-router-dom';
import Overview from './Overview';
import MijnEvents from './MijnEvents';
import Add from './Add';
import Login from './Login';
import Logout from '../components/Logout';
import Message from '../components/Message';
import EventDetail from './EventDetail';
import Start from './Start';

import SideNav from '../components/SideNav';

const App = ({store}) => {

  const {user, infoMessage} = store;

  console.log(user);

  return (
    <section>
      {process.env.NODE_ENV !== `production` ? <DevTools /> : null}
      {user.length > 0 &&
      <header>
        <h1>Msk</h1>
          <Logout />
      </header>
      }
      {infoMessage.length > 0 &&
        <Message />
      }
      {user.length > 0 &&
        <section className='container'>
            <SideNav />
            <Switch>
              <Route
                exact path='/home'
                component={Overview}
              />
              <Route
                exact path='/mijnEvents'
                component={MijnEvents}
              />
              <Route
                exact path='/add'
                component={Add}
              />
              <Route
                exact path='/event/:id'
                render={({match}) => <EventDetail match={match} />}
              />
              <Route
                  render={() => <Redirect to='/home' />}
              />
            </Switch>
        </section>
      }
      {user.length < 1 &&
        <Switch>
          <Route
              exact path='/groupart'
              component={Start}
          />
          <Route
            exact path='/login'
            component={Login}
          />
          <Route
              render={() => <Redirect to='/groupart' />}
          />
        </Switch>
      }
    </section>

  );

};

App.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(App)
);
