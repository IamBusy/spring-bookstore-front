/**
 * Created by william on 13/04/2017.
 */
import { createOrder } from '../../services/order';

export default {
  namespace: 'order',
  state: {
    isCreating: false,
  },
  reducers: {
    saveList(state,{ payload:categories }) {
      setLocalStorage('categoryList', categories);
      return {...state, lists:categories};
    },

    'create/start'(state){
      return {...state,  isCreating: true}
    },

    'create/end'(state){
      return {...state, isCreating: false}
    }

  },
  effects: {
    * fetchOrderList(action, { call, put }){
    },

    * createOrder({ payload }, { call, put }){
      yield put({type:'create/start'});
      const { products } = payload;
      console.log(products);
      let orderInfo = yield call(createOrder, products);
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      dispatch({ type: 'fetchOrderList'});
    },
  },
}
