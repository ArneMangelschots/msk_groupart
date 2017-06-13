import fetch from 'isomorphic-fetch';

const url = `/api/events`;

export default {

  select: () => {
    return fetch(`${url}?isActive=true`)
      .then(r => r.json());
  },
  insert: data => {
    const method = `POST`;
    const body = new FormData();
    body.append(`date`, data.date);
    body.append(`hour`, data.hour);
    body.append(`capacity`, data.capacity);
    body.append(`what`, data.what);
    body.append(`description`, data.description);
    body.append(`creator`, data.creator);
    body.append(`users`, data.users);

    return fetch(url, {method, body})
    .then(r => r.json());
  },

  addUser: (id, users) => {
    const method = `PATCH`;
    const body = new FormData();
    body.append(`users`, users);

    return fetch(`${url}/${id}`, {method, body})
    .then(r => r.json());
  },

  delete: id => {
    const method = `DELETE`;
    return fetch(`${url}/${id}`, {method})
    .then(r => r.json());
  }

};
