/**
 * Created by william on 04/04/2017.
 */
const Mock = require('mockjs');
const Random = Mock.Random;

const products = Mock.mock({
  'data|100':[{
    'id|+1':1,
    'categoryId|1-14': 1,
    'price|10-99.1-2': 1,
    'cover': () => Random.image('240x400'),
    'name': () => Random.cword(3,10),
    'author': () => Random.first(),
    'publisher': () => Random.cword('交通出版社机械工业新华',4,7),
  }],
});

let productsData = {};
products.data.map(product => {

  //classify by category
  let categroyKey = `GET /api/categories/${product.categoryId}/products`;
  productsData[categroyKey]?
    productsData[categroyKey].push(product):
    productsData[categroyKey]=[product];

  let recommendKey = 'GET /api/recommendation';
  (productsData[recommendKey] && Math.floor(Math.random()*10) > 4 && productsData[recommendKey].length<10)?
    productsData[recommendKey].push(product):
    productsData[recommendKey]=[product];

  let infoKey = `GET /api/products/${product.id}`;
  productsData[infoKey] = product;

});

console.log(productsData);

export default productsData;




