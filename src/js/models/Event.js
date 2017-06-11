import uuid from 'uuid';
import {computed, observable} from 'mobx';

export default class Event {

  _id = 0 //uuid.v4();
  created = 0
  date = ``
  hour = ``
  capacity = 0
  what = ``
  title = ``

  @observable
  users = ``



  constructor({date, hour, capacity, what, title, user}) {
    this._id = uuid.v4();
    this.created = Date.now();
    this.date = date;
    this.hour = hour;
    this.capacity = capacity;
    this.what = what;
    this.title = title;
    this.users = [user];
  }

  @computed
  get nUsers() {
    return this.users.length;
  }

}
