const Mock = require('mockjs');

const Random = Mock.Random;

let mockData = {};

export default  Mock.mock({
    'data|100':[{
        'id|+1' : 1,
    }]
});

