

import React from 'react';

import {observer, inject, PropTypes} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import {Route, Switch, Redirect} from 'react-router-dom';
import Overview from './Overview';
import MijnEvents from './MijnEvents';
import Add from './Add';
import Logout from '../components/Logout';
import DetailPage from './DetailPage';
import Start from './Start';
import Popup from '../components/Popup';
import MobileNav from '../components/MobileNav';

import SideNav from '../components/SideNav';
import Footer from '../components/Footer';

const App = ({store}) => {

  const {user, popup} = store;

  return (
    <section>
      {process.env.NODE_ENV !== `production` ? <DevTools /> : null}
      {popup === true &&
        <Popup />
      }
      {user.length > 0 &&
        <section className='event-page'>
          <header className='banner'>
              <Logout />
          </header>
          <section className='main-container'>
            <SideNav />
            <MobileNav />
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
                path='/event/:id'
                render={({match}) => <DetailPage match={match} />}
              />
              <Route
                render={() => <Redirect to='/ontdek' />}
              />
            </Switch>
          </section>
        </section>
      }
      {user.length <= 0 &&
        <Switch>
          <Route
            exact path='/home/:page'
            render={({match}) => <Start match={match} />}
          />
          <Route
            render={() => <Redirect to='/home/info' />}
          />
        </Switch>
      }
      <Footer />
    </section>

  );

};

App.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(App)
);
