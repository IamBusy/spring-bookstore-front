/**
 * Created by william on 03/04/2017.
 */
import pathToRegexp from 'path-to-regexp';
import { fetchByCategory, fetchById, fetchBySearch, fetchRecommendation } from '../../services/product';

export default {
  namespace: 'product',
  state: {
    activeType: null,
    itemsPerPage: 20,
    currentPage: 0,
    itemById: {},
    recommend: [],
    category: [],
    search: [],
    products: [],
  },
  reducers: {
    saveRecommendation(state, { payload: products }) {
      let itemById = state.itemById;
      products.map(product => {
        itemById[product.id] = product;
      });
      return { ...state, recommend: products, itemById };
    },

    saveById(state, { payload: product }) {
      return { ...state, itemById: { ...state.itemById, [product.id]: product } }
    },

    saveProducts(state, { payload }) {

    },

    saveProductByCategory(state, { payload }) {
      const { categoryId, products } = payload;
      let category = state.category;
      let itemById = state.itemById;
      category[categoryId] = products;
      products.map(product => {
        itemById[product.id] = product;
      });
      return { ...state, category, itemById, products };
    },

    changePage(state, { payload }) {
      return { ...state, currentPage: payload.page - 1 };
    }
  },
  effects: {
    * fetchProductsByCategory({ payload }, { put, call, select }) {
      console.log('fetch products by category');
      const { categoryId } = payload;
      const category = yield select(state => state.product.category);
      //console.log(fetchByCategory);
      const products = yield call(fetchByCategory, categoryId);
      //console.log('products fetch');
      yield put({ type: 'saveProductByCategory', payload: { categoryId, products } });
    },

    * fetchRecommendation(payload, { put, call }) {
      const products = yield call(fetchRecommendation);
      yield put({ type: 'saveRecommendation', payload: products })
    },

    * fetchById({ payload: id }, { put, call, select }) {
      const items = yield select(state => state.product.itemById);
      if (!items[id]) {
        const product = yield call(fetchById, id);
        put({ type: 'saveById', payload: product });
      }
    }

  },
  subscriptions: {
    setup({ dispatch, history }) {

      //fetch information a specific product
      history.listen(({ pathname }) => {
        let match = pathToRegexp(`/products/:id`).exec(pathname);
        if (match) {
          const id = match[1];
          dispatch({ type: 'fetchById', payload: { id } });
        }

        //match category list
        match = pathToRegexp(`/categories/:id`).exec(pathname);
        if (match) {
          const categoryId = match[1];
          dispatch({ type: 'fetchProductsByCategory', payload: { categoryId } });
        }
      });

      //fetch recommendation information
      dispatch({ type: 'fetchRecommendation' });


    }
  },
};

