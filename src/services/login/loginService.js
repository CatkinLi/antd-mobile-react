import qs from 'query-string';
import request from '../../utils/request';
import { apiUri } from '../../config';

export async function loginIn(params) {
  return request(`${apiUri}/api/login`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
    body: qs.stringify(params),
  });
}
