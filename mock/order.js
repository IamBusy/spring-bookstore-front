/**
 * Created by william on 15/04/2017.
 */
const Mock = require('mockjs');
const Random = Mock.Random;

import ProductsMock from './product';
import { random, randomItem } from '../src/utils/random';

export default {
  'GET /api/orders': Mock.mock({
    'data|20':[{
      'id|+1' : 1,
      'total|10-99.1-2': 1,
      'createdAt': ()=>Random.date(),
      'products': ()=>randomItem(ProductsMock.data,random(1,10)),
    }]
  }),
}
