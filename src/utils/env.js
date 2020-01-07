// 是否开启线上上产环境调试
const debugProd = false;
// 是否开启打包生产环境
let prodBuild = false;
if (process.env.NODE_ENV === 'production') {
  prodBuild = true;
}
// 是否mock数据
const isMock = false;
// 测试环境数据api
let api = 'http://192.168.1.113:2222';
// 本地环境数据api
let devApi = isMock ? '' : 'http://localhost:1111';
// devApi = 'http://192.168.1.113:2222';
// pc网站地址
let webDomain = 'http://192.168.1.60:8090';
// crm 1.0测试地址
let crmDomain = 'http://192.168.1.113:8089';
// crm 1.0本地地址
const devCrmDomain = 'http://localhost:8089';
// webscoket服务
let wsDomain = process.env.NODE_ENV === 'production' ? 'http://192.168.1.113:9094' : 'http://localhost:9094';
if (debugProd) {
  devApi = 'http://crm2api.51jiabo.com';
}
if (prodBuild) {
  api = 'http://crm2api.51jiabo.com';
  webDomain = 'http://www.51jiabo.com';
  crmDomain = 'http://crm.51jiabo.com';
  wsDomain = 'http://crm.socketio.51jiabo.com';
}


export default function () {
  if (process.env.NODE_ENV === 'development') {
    return { apiUri: devApi, wsDomain, webDomain, crmDomain: devCrmDomain };
  } else {
    return { apiUri: api, wsDomain, webDomain, crmDomain };
  }
}

