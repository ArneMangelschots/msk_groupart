

import React from 'react';

import {observer, inject, PropTypes} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import {Route, Switch, Redirect} from 'react-router-dom';
import Overview from './Overview';
import MijnEvents from './MijnEvents';
import Add from './Add';
// import Login from './Login';
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
        <section className='event-page'>

          <header className='banner'>
              <Logout />
          </header>


          <section className='main-container'>
            <SideNav />
            {infoMessage.length > 0 &&
              <Message />
            }
            <Switch>
              <Route
                exact path='/ontdek'
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
            </Switch>
          </section>
        </section>
      }
      {user.length <= 0 &&
        <Switch>
          <Route
            exact path='/'
            render={() => <Start page='home' />}
          />
          <Route
            exact path='/register'
            render={() => <Start page='register' />}
          />
          <Route
            exact path='/login'
            render={() => <Start page='login' />}
          />
          <Route
            render={() => <Redirect to='/' />}
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
