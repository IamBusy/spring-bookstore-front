/**
 * Created by william on 03/04/2017.
 */
import config from '../config';

export function getLocalStorage(key) {
  try {
    JSON.parse(localStorage.getItem(key));
  }
  catch(e) {
    return null;
  }
}

export function setLocalStorage(key,value) {
  return localStorage.setItem(key,JSON.stringify(value));
}

export function routeTo(path){
  window.location.href = config.app + '/#' + path;
}
