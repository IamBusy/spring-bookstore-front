/**
 * Created by william on 04/04/2017.
 */
const Mock = require('mockjs');
const Random = Mock.Random;

export default  {
  'GET /api/categories':Mock.mock({
    'data|10':[{
      'id|+1' : 1,
      'name'  : Random.ctitle(2,4)
    }]
  }),
}

