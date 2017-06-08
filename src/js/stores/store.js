import {observable, action} from 'mobx';

import Event from '../models/Event';

class Store {

  @observable
  events = []

  @observable
  name = `Doek mee met het MSK`

  @observable
  openingHours = {};

  @observable
  hoursByDay = []

  @observable
  what = `vrij`

  constructor() {
    this.addHours();
  }

  addHours = () => {
    fetch(`../assets/data/openingHours.json`)
      .then(r => r.json())
      .then(d => this.openingHours = d.openingHours);
  }

  @action
  addEvent = data => {
    const event = new Event(data);
    this.events.push(event);
  }

  @action
  setHours = date => {
    const formattedDate = new Date(date);
    const day = formattedDate.getDay();
    console.log(day);
    const hours = this.openingHours[`${day}`];
    const hoursArray = hours.split(`,`);
    this.hoursByDay = hoursArray;
  }

  @action
  setWhat = value => {
    this.what = value;
  }

}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;
