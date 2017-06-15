import {computed, observable} from 'mobx';

export default class Event {

  _id = 0
  created = 0
  date = ``
  hour = ``
  capacity = 0
  what = ``
  description = ``
  creator = ``

  @observable
  users = ``



  constructor({_id, created, date, hour, creator, capacity, what, description, users}) {
    this._id = _id;
    this.created = created;
    this.date = date;
    this.hour = hour;
    this.capacity = capacity;
    this.what = what;
    this.description = description;
    this.users = users;
    this.creator = creator;
  }

  @computed
  get nUsers() {
    return this.users.length;
  }

  @computed
  get Day() {
    const dagen = [`Zondag`, `Maandag`, `Dinsdag`, `Woensdag`, `Donderdag`, `Vrijdag`, `Zaterdag`];
    return dagen[new Date(this.date).getDay()];
  }

  @computed
  get image() {
    let image = ``;
    switch (this.what) {
    case `Vrij museumbezoek`:
      image = `vrij`;
      break;
    case `Restauratie Lam Gods`:
      image = `lamgods`;
      break;
    case `Metafloristiek`:
      image = `metafloristics`;
      break;
    case `Written Room`:
      image = `written`;
      break;
    case `Manufactories of Caring Space-Time`:
      image = `manufactories`;
      break;
    default:
      image = `none`;
    }
    return image;
  }

}
