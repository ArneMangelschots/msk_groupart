import fetch from 'isomorphic-fetch';

const url = `/api`;

export default {

  login: ({login, password}) => {

    const method = `POST`;
    const body = new FormData();
    body.append(`login`, login);
    body.append(`password`, password);
    body.append(`audience`, `webapp`);

    return fetch(`${url}/auth`, {method, body})
    .then(r => r.json());
  },

  getUser: id => {
    return fetch(`${url}/users/${id}`)
    .then(r => r.json());
  }
};
