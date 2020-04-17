import qs from 'query-string';
import request from '../../utils/request';
import { apiUri } from '../../config';

export async function getProjectList(params) {
  return request(`${apiUri}/api/projectManage/getProjectList?${qs.stringify(params)}`);
}
