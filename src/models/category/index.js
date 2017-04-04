/**
 * Created by william on 03/04/2017.
 */
import pathToRegexp from 'path-to-regexp';
import {getLocalStorage, setLocalStorage} from '../../utils/helper';
import { fetchList } from '../../services/category';

export default {
  namespace: 'category',
  state: {
    active:null,
    lists:[]
  },
  reducers: {
    saveList(state,{ payload:categories }) {
      setLocalStorage('categoryList', categories);
      return {...state, lists:categories};
    }
  },
  effects: {
    * fetchCategoryList(action, { call, put }){
      const categories = yield call(fetchList);
      yield put({ type: 'saveList', payload: categories });
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      dispatch({ type: 'fetchCategoryList'});

      // history.listen(() => {
      //   let categories = getLocalStorage('categoryList');
      //   if (! categories) {
      //     dispatch({ type: 'fetchCategoryList'});
      //   }
      // });
    },
  },
};
