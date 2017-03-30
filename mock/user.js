const Mock = require('mockjs');

const Random = Mock.Random;

let mockData = {};

global.mockData.users = Mock.mock({
    'data|100':[{
        'id|+1' : 1,
    }]
});

module.export = {
    'GET /api/users'(req,res){
        setTimeout(()=>{
            res.json({
                success: true,
            });

        },200);
    }
}
