import fetch from 'isomorphic-fetch';

import {observable, action, computed} from 'mobx';

import Event from '../models/Event';
import checkDates from '../lib/checkDates';

import moment from 'moment';

import eventsAPI from '../lib/api/events';

class Store {

  @observable
  events = []

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

  @observable
  infoMessage = ``;

  @observable
  popup = false;

  constructor() {
    this.init();
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

  getEvents = () => {
    eventsAPI.select()
      .then(({events}) => {
        events.map(e => this._addEvent(e));
      });
  }

  getUser = () => {
    if (localStorage.getItem(`user`)) {
      this.user = localStorage.getItem(`user`);
    }
  }

  init = () => {
    this.addHours();
    this.addTents();
    this.getEvents();
    this.getUser();
  }

  @action
  add = data => {
    data.creator = this.user;
    data.users = this.user;
    eventsAPI.insert(data)
      .then(e => this._addEvent(e));
    return true;
  }


  @action
  _addEvent = data => {
    const users = data.users.split(`,`);
    data.users = users;
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
    localStorage.setItem(`user`, this.user);
  }

  @action
  handleLogout = () => {
    this.user = ``;
    localStorage.removeItem(`user`);
  }

  @action
  joinEvent = id => {
    const events = this.events.map(e => {
      console.log(e);
      if (e._id === id) {
        const users = `${e.users},${this.user}`;
        eventsAPI.addUser(id, users);
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

  @action
  removeEvent = id => {
    this.events.map(e => {
      if (e._id === id) {
        const index = this.events.indexOf(e);
        this.events.splice(index, 1);
        eventsAPI.delete(e._id);
      }
    });
    this.events.reverse().reverse();
  }

  @action
  filterByTent = tent => {
    this.events = [];
    eventsAPI.selectByTent(tent)
      .then(({events}) => {
        events.map(e => this._addEvent(e));
      });
  }

  @action
  setMessage = content => {
    this.infoMessage = content;
    window.setTimeout(() => {this.infoMessage = ``;}, 5000);
  }

  @action
  togglePopup = () => {
    this.popup = !this.popup;
  };

  @computed
  get thisWeek() {
    const week = moment().add(7, `day`).format(`YYYY-MM-DD`);
    const thisWeek = this.events.filter(e => e[`date`] <= week).filter(e => e.nUsers < e.capacity);
    return thisWeek;
  }

  @computed
  get nextWeek() {
    const week = moment().add(7, `day`).format(`YYYY-MM-DD`);
    const twoWeeks = moment().add(14, `day`).format(`YYYY-MM-DD`);
    const nextWeek = this.events.filter(e => e[`date`] > week && e[`date`] <= twoWeeks).filter(e => e.nUsers < e.capacity);
    return nextWeek;
  }
  @computed
  get thisMonth() {
    const twoWeeks = moment().add(14, `day`).format(`YYYY-MM-DD`);
    const thisMonth = this.events.filter(e => e[`date`] > twoWeeks).filter(e => e.nUsers < e.capacity);
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

  @computed
  get nMyEvents() {
    return this.createdEvents.length + this.signedEvents.length;
  }

}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;
