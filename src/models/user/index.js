/**
 * Created by william on 05/04/2017.
 */
import userService, { signin, signup, getUserInfo } from '../../services/user';
import auth from '../../utils/auth';
import { getLocalStorage, setLocalStorage } from '../../utils/helper';

export default {
  namespace: 'user',
  state: {
    isLoggedIn: false,
    userInfo: {},
  },
  reducers: {
    'sign/start'(state){
      return {...state, loading: true};
    },
    'sign/end' (state) {
      return {...state, loading: false};
    },

    'sign/error' (state, action) {
      return {...state, errorMsg: action.payload};
    },

    'sign/success' (state, action) {
      return {...state, ...action.payload, errorMsg: null, isLoggedIn: true };
    },

    saveInfo(state, { payload }) {
      const {username, photo} = payload;
      return { ...state, userInfo: { name:username, photo } };
    },
  },
  effects: {
    * signup({payload}, { put, call }) {
      const {username, password, callback} = payload;
      yield put({
        type: 'sign/start',
      });

      const userInfo = yield call(signup, username, password);
      console.log(userInfo);
      if (!userInfo) {
        yield put({
          type: 'sign/error',
          payload: userInfo.message,
        });
      } else {
        yield call(auth.setToken,userInfo.token,userInfo.expired_in);
        yield put({
          type: 'sign/success',
          payload: {username, password},
        });
        callback();
      }

      yield put({
        type: 'sign/end',
      });
    },

    * signin({payload}, { put, call }) {
      const { username, password, callback } = payload;
      yield put({
        type: 'sign/start',
      });
      const userInfo = yield call(signin, username, password);
      console.log('after call signin');
      if (!userInfo) {
        yield put({
          type: 'sign/error',
          payload: userInfo.message,
        });
      } else {
        //auth.setToken(userInfo.token,userInfo.expired_in);
        yield call(auth.setToken,userInfo.token,userInfo.expired_in);
        yield put({
          type: 'sign/success',
          payload: {username, password},
        });
        callback()
      }

      yield put({
        type: 'sign/end',
      });
    },

    * 'sign/success'({payload}, { call, put }) {
      const user = yield call(getUserInfo);
      console.log(user);
      setLocalStorage('userInfo',user);
      yield put({
        type: 'saveInfo',
        payload: user,
      })
    }
  },

  subscriptions: {
    setup({dispatch}){
      let user = getLocalStorage('userInfo');
      if(user){
        dispatch({ type: 'saveInfo', payload: user });
      }
    }
  },
}
