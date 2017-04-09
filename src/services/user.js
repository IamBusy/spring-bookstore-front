import request from '../utils/request';

export function signin(username, password) {
  return request.post('/signin',{ username, password });
}

export function signup(username, password) {
  return request.post('/signup',{username, password});
}

export function getUserInfo(){
  return request.get('/users/info');
}
