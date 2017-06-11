import {observable, action, computed} from 'mobx';

import Event from '../models/Event';
import checkDates from '../lib/checkDates';

import moment from 'moment';
import usersAPI from '../lib/api/users';

import jwtDecode from 'jwt-decode';

class Store {

  @observable
  events = []

  @observable
  name = `Doek mee met het MSK`

  @observable
  openingHours = {};

  @observable
  tents = [];

  @observable
  hoursByDay = []

  @observable
  what = `vrij`

  @observable
  user = ``;

  constructor() {
    this.addHours();
    this.addTents();
  }

  addHours = () => {
    fetch(`../assets/data/openingHours.json`)
      .then(r => r.json())
      .then(d => this.openingHours = d.openingHours);
  }

  addTents = () => {
    fetch(`../assets/data/tentoonstellingen.json`)
      .then(r => r.json())
      .then(d => this.tents = d[`tentoonstellingen`]);
  }


  @action
  addEvent = data => {
    const event = new Event(data);
    this.events.push(event);
    return true;
  }

  @action
  setHours = date => {
    const formattedDate = new Date(date);
    const day = formattedDate.getDay();
    const hours = this.openingHours[`${day}`];
    const hoursArray = hours.split(`,`);
    this.hoursByDay = hoursArray;
  }

  @action
  setWhat = value => {
    this.what = value;
  }

  @action
  checkTentDate = date => {
    console.log(date);
    const newTents = this.tents.filter(t => checkDates(date, t[`end`], t[`begin`]));
    this.tents = newTents;
  }

  @action
  handleLogin = data => {
    usersAPI.login(data)
    .then(user => jwtDecode(user[`token`]))
    .then(token => this.user = token)
    .then(token => this._getUser(token));
  }

  _getUser = token => {
    const id = token[`sub`];
    usersAPI.getUser(id)
      .then(user => console.log(user));
  }

  @computed
  get thisWeek() {
    const week = moment().add(7, `day`).format(`YYYY-MM-DD`);
    const thisWeek = this.events.filter(e => e[`date`] <= week);
    return thisWeek;
  }

  @computed
  get nextWeek() {
    const week = moment().add(7, `day`).format(`YYYY-MM-DD`);
    const twoWeeks = moment().add(14, `day`).format(`YYYY-MM-DD`);
    const nextWeek = this.events.filter(e => e[`date`] > week && e[`date`] <= twoWeeks);
    return nextWeek;
  }
  @computed
  get thisMonth() {
    const twoWeeks = moment().add(14, `day`).format(`YYYY-MM-DD`);
    const thisMonth = this.events.filter(e => e[`date`] > twoWeeks);
    return thisMonth;
  }

}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;
