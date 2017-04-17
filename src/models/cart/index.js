/**
 * Created by william on 03/04/2017.
 */
import pathToRegexp from 'path-to-regexp';
import { getLocalStorage, setLocalStorage } from '../../utils/helper';

export default {
  namespace: 'cart',
  state: {
    products: {},
  },
  reducers: {
    add(state, { payload }) {
      const { product, quantity } = payload;
      product.quantity = quantity;
      console.log(payload);
      return { ...state, products: {...state.products, [product.id]: product} };
    },
    remove(state, { payload }) {
      const { productId } = payload;
      let products = state.products;
      delete products[productId];
      return {...state, products};
    },
    destroy(state){
      return {...state,products:{}};
    }
  },
  effects: {
    * fetchCategoryList(action, { call, put }) {

    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
    },
  },
};
