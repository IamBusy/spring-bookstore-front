import request from '../utils/request';

export function fetchCart(){
    return request.get('/cart');
}