/**
 * Created by william on 03/04/2017.
 */
import pathToRegexp from 'path-to-regexp';
import {fecthByCategory, fetchById, fetchBySearch, fetchRecommendation} from '../../services/product';

export default {
  namespace: 'product',
  state: {
    activeType: null,
    itemsPerPage: 20,
    itemById: {},
    recommend: [],
    category: [],
    search: [],
  },
  reducers: {
    saveRecommendation(state, {payload: products}){
      let itemById = state.itemById;
      products.map(product => {
        itemById[product.id] = product;
      });
      return {...state,recommend:products,itemById};
    },

    saveById(state, {payload: product}){
      return {...state,itemById:{...state.itemById, [product.id]: product }}
    }
  },
  effects: {
    * fetchListByCategory({payload}, {put, call, select}){
      const { categoryId, page } = payload;
    },
    * fetchRecommendation(payload, { put, call }){
      const products = yield call(fetchRecommendation);
      yield put({type: 'saveRecommendation', payload: products})
    },
    * fetchById({payload: id}, { put, call, select }) {
      const items = yield select(state => state.product.itemById);
      if(!item[id])
      {
        const product = yield call(fetchById, id);
        put({ type:'saveById', payload:product });
      }
    }

  },
  subscriptions: {
    setup({dispatch, history}){


      history.listen(({ pathname }) => {
        const match = pathToRegexp(`/products/:id`).exec(pathname);
        if (match) {
          const id = match[1];
          dispatch({ type: 'fetch'})
        }
      });


      dispatch({ type: 'fetchRecommendation' });
    }
  },
};

