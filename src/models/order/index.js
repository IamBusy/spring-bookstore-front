/**
 * Created by william on 13/04/2017.
 */
import { createOrder, fetchOrders } from '../../services/order';
import pathToRegexp from 'path-to-regexp';

export default {
  namespace: 'order',
  state: {
    isCreating: false,
    lists:[],
    currentPage: 0,
    itemsPerPage: 10,
  },
  reducers: {
    saveOrders(state,{ payload}) {
      let { orders } = payload;
      if(orders) {
        orders.map( order => order.key = order.id);
      }else {
        orders = [];
      }

      return {...state, lists:orders};
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
      let orders = yield call(fetchOrders);
      yield put({type:'saveOrders',payload:{orders}});
    },

    * createOrder({ payload }, { call, put, select }){
      yield put({type:'create/start'});
      const { products } = payload;
      console.log(products);
      let orderInfo = yield call(createOrder, products);
      const orders = yield select(state => state.order.lists);
      orders.push(orderInfo);
      yield put({type:'saveOrders',payload:orders});
      yield put({type:'cart/destroy'});
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      //fetch information a specific product
      history.listen(({ pathname }) => {
        let match = pathToRegexp(`/order`).exec(pathname);
        if (match) {
          dispatch({ type: 'fetchOrderList'});
        }
      });

    },
  },
}
