import { routerRedux } from 'dva/router';
import qs from 'query-string';
import * as loginService from '../../services/login/loginService';
const localStorage = window.localStorage;

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
      const { data } = yield call(loginService.loginIn, payload);

      if (data.infoMap.authSuccess) {
        localStorage.setItem('token', data.infoMap.token);
        localStorage.setItem('realName', data.infoMap.realName);
        localStorage.setItem('headerUrl', data.infoMap.headerUrl);
        yield put(routerRedux.push('/'));
      } else {
        console.log(data.infoMap.reason);
      }
    },

  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
