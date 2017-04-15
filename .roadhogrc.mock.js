import category from './mock/category';
import product from './mock/product';
import user from './mock/user';
import order from './mock/order';

export default {
  ...category,
  ...product.api,
  ...user,
  ...order,
};
