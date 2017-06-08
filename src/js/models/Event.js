import uuid from 'uuid';

export default class Event {

  _id = 0 //uuid.v4();
  created = 0
  date = ``
  hour = ``
  capacity = 0
  what = ``
  title = ``



  constructor({date, hour, capacity, what, title}) {
    this._id = uuid.v4();
    this.created = Date.now();
    this.date = date;
    this.hour = hour;
    this.capacity = capacity;
    this.what = what;
    this.title = title;
  }

}
