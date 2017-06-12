import {observable, action, computed} from 'mobx';

import Event from '../models/Event';
import checkDates from '../lib/checkDates';

import moment from 'moment';

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
  user = `arnem`;


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
    data[`user`] = this.user;
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
  handleLogin = username => {
    this.user = username;
  }

  @action
  handleLogout = () => {
    this.user = ``;
  }

  @action
  joinEvent = id => {
    const events = this.events.map(e => {
      console.log(e);
      if (e._id === id) {
        e.users.push(this.user);
      }
      return e;
    });
    this.events = events;
  }

  @action
  leaveEvent = id => {
    const events = this.events.map(e => {
      if (e._id === id) {
        const index = e.users.indexOf(this.user);
        e.users.splice(index, 1);
      }
      return e;
    });
    this.events = events;
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

  @computed
  get createdEvents() {
    const createdEvents = this.events.filter(e => e[`creator`] === this.user);
    return createdEvents;
  }

  @computed
  get signedEvents() {
    const signedEvents = this.events.filter(e => e[`users`].includes(this.user) && e[`creator`] !== this.user);
    return signedEvents;
  }

}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;
