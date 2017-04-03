import fetch from 'dva/fetch';
import auth from './auth';

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

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
function request(url, options) {

  options.headers = {...options.headers,...{'Authorization': 'Bearer ' + auth.getToken()}};

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}

export default {
  get:  (url,options)=>request(url,{...options,method:"get"}),
  post: (url,options)=>request(url,{...options,method:"post"}),
  put:  (url,options)=>request(url,{...options,method:"put"}),
  delete:(url,options)=>request(url,{...options,method:"delete"}),
}
