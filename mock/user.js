const Mock = require('mockjs');

const Random = Mock.Random;

let mockData = {};

export default {
    'POST /api/signin': {
        token:'This is a token',
        expired_in: 1492708511
    },

    'POST /api/signup': {
        token:'This is a token',
        expired_in: 1492708511
    },

    'GET /api/users/info': {
        id: 2,
        name: 'william',
        photo: 'http://pic.uumeitu.com/2015/0518/风情万种蕾丝内衣性感美女大尺度诱惑写真/11.jpg'
    }

}

