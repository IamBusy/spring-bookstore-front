/**
 * Created by william on 13/04/2017.
 */
import request from '../utils/request';

export function createOrder(products, pwd=null) {
  let pds = [];
  products.map( product => {
    pds.push(product.id);
  });
  return request.post('/orders', {
    products: pds,
    pwd: pwd,
  });
}
