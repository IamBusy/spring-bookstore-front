/**
 * Created by william on 03/04/2017.
 */
import request from '../utils/request';

export function fetchList(){
  return request.get('/categories');
}
