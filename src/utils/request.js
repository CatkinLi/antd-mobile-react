import fetch from 'dva/fetch';
import qs from 'query-string';
import { crmDomain } from '../config';

const localStorage = window.localStorage;
const location = window.location;

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function auth(data) {
  if (data.infoMap.status && data.infoMap.status === 'TOKEN_INVALID') {
    location.href = crmDomain;
  }
  return { data };
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  const query = qs.parse(window.location.search);
  let token = query.token;
  if (!token) {
    token = localStorage.getItem('token');
  } else {
    localStorage.setItem('token', token);
  }
  return fetch(url, options ? {
    ...options,
    headers: {
      ...options.headers,
      token,
    },
  } : {
    headers: {
      token,
    },
  }).then(checkStatus).then(parseJSON).then(auth).catch(err => ({ err }));
}
