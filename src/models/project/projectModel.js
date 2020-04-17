import { routerRedux } from 'dva/router';
import qs from 'querystring';
import * as projectService from '../../services/project/projectService';
import {getProjectList} from "../../services/project/projectService";

export default {
  namespace: 'projectModel',

  state: {
    projectList: [],
  },

  subscriptions:{
    setup({ dispatch, history}) {
      history.listen((location) => {
        console.log(location);
        if (location.pathname === '/project') {
          dispatch({
            type: 'getProjectList',
          });
        }
      })
    }
  },

  effects: {
    *getProjectList({ payload }, { call, put }) {
      const { data } = yield call(projectService.getProjectList, payload);
      console.log(data);
      yield put({
        type: 'save',
        payload: {
          projectList: data.resultList,
        },
      })
    },
  },

  reducers: {
    save(state, action) {
      return{ ...state, ...action.payload};
    }
  }
}
