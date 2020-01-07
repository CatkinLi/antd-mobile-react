/* eslint-disable prefer-destructuring */
import env from './utils/env';

export const PAGE_SIZE = 20;

export const apiUri = env().apiUri;
export const webDomain = env().webDomain;
export const crmDomain = env().crmDomain;
// export const apiUri = 'http://192.168.1.113:2222';

export const noImageUrl = 'http://localhost:8000/src/assets/noimage.jpg';
export const uploadImageUrl = 'http://api.51jiabo.com/file/v2.0/uploadImage';
export const uploadUri = 'http://api.51jiabo.com';
export const transformTemplateUrl = 'https://img.hxjbcdn.com/转化数据模板2019.xls';
export const successMsg = '操作成功！';
export const addSuccessMsg = '添加成功！';

export const sendSuccessMsg = '已发送';
export const errorMsg = '服务器异常！';
export const searchMsg = '查询';
export const confirmMsg = '确定';
export const cancelMsg = '取消';
export const backMsg = '返回';
// table大小
export const tableSize = 'middle';

// 资讯前端跳转页
export const articleUrl = webDomain;
// 案例前端跳转页
export const zxCaseUrl = webDomain;
// 全屋记
export const houseUrl = webDomain;
// 晒美图
export const beautyImageUrl = webDomain;

export const sessionStorage = window.sessionStorage;

export const Gray = '#BFBFBF';
export const Grey = '#d9d9d9';
export const Cyan = '#3db8c1';
export const Yellow = '#ffce3d';
export const Purple = '#948aec';
export const Orange = '#f78e3d';
export const Pink = '#f7629e';
export const Blue = '#49a9ee';
export const Green = '#3dbd7d';
export const Red = '#f46e65';

export default {
  routeQuery: {},
};

