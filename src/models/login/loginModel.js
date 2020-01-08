import { routerRedux } from 'dva/router';
import qs from 'query-string';
import * as loginService from '../../services/login/loginService';


export default {

  namespace: 'loginModel',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *login({ payload }, { call, put }) {
      return yield call(loginService.loginIn, payload);
      /*console.log(data);
      */
    },

  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
