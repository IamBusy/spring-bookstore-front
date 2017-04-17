/**
 * Created by william on 13/04/2017.
 */
import request from '../utils/request';

export function createOrder(products, pwd=null) {
  let pds = [];
  products.map( productId => {
    pds.push(productId);
  });
  return request.post('/orders', {
    products: pds,
  });
}

export function fetchOrders() {
  return request.get('/orders');
}
