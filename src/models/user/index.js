/**
 * Created by william on 05/04/2017.
 */
import { siginin, signup, getUserInfo } from '../../services/user';
import auth from '../../utils/auth';

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
      return {...state, ...action.payload, signup: true, errorMsg: null, isLoggedIn: true };
    },

    info(state, { payload }){
      const {name, photo} = payload;
      return {
        ...state,
        userInfo:{
          name,photo
        },
      }

    }
  },
  effects: {
    * signup({payload}, { put, call }) {
      const {username, password, callback} = payload;
      yield put({
        type: 'sign/start',
      });

      const userInfo = yield call(signup, username, password);

      if (userInfo.message) {
        yield put({
          type: 'sign/error',
          payload: userInfo.message,
        });
      } else {
        auth.setToken(userInfo.token,userInfo.expired_in);
        yield put({
          type: 'sign/success',
          payload: {username, password, userInfo},
        });
        callback();
      }

      yield put({
        type: 'sign/end',
      });
    },

    * signin({payload}, { put, call }) {
      const {username, password} = payload;
      yield put({
        type: 'sign/start',
      });

      const userInfo = yield call(signin, username, password);

      if (userInfo.message) {
        yield put({
          type: 'sign/error',
          payload: userInfo.message,
        });
      } else {
        auth.setToken(userInfo.token,userInfo.expired_in);
        yield put({
          type: 'sign/success',
          payload: {username, password, userInfo},
        });
      }

      yield put({
        type: 'sign/end',
      });
    },

    * info({payload}, {call, put}){
      const user = yield call(getUserInfo);
      yield put({
        type: ''
      })
    }
  },

  subscriptions: {
  },
}
