/**
 * Created by william on 03/04/2017.
 */

export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setLocalStorage(key,value) {
  return localStorage.setItem(key,JSON.stringify(value));

}
