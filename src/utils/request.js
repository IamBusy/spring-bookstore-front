import fetch from 'dva/fetch';
import auth from './auth';
import config from '../config';

function convert(obj) {
  let query = '',
    name, value, fullSubName, subName, subValue, innerObj, i;
  for (name in obj) {
    value = obj[name];
    if (value instanceof Array) {
      for (i = 0; i < value.length; ++i) {
        subValue = value[i];
        fullSubName = name + '[' + i + ']';
        innerObj = {};
        innerObj[fullSubName] = subValue;
        query += param(innerObj) + '&';
      }
    } else if (value instanceof Object) {
      for (subName in value) {
        subValue = value[subName];
        fullSubName = name + '[' + subName + ']';
        innerObj = {};
        innerObj[fullSubName] = subValue;
        query += param(innerObj) + '&';
      }
    } else if (value !== undefined && value !== null) query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
  }
  return query.length ? query.substr(0, query.length - 1) : query;
}

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

  let headers = {
    'Authorization': 'Bearer ' + auth.getToken()
  };

  url = 'api'+url;

  options = { ...options, headers, body: JSON.stringify(options.body) };
  console.log(options);

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ( data.data?data.data:data ))
    .catch(err => ({ err }));
}

export default {
  get:  (url,data)=>request(url,{ body:(data),method:"get"}),
  post: (url,data)=>request(url,{ body:(data),method:"post"}),
  put:  (url,data)=>request(url,{ body:(data),method:"put"}),
  delete:(url,data)=>request(url,{body:(data),method:"delete"}),
}
