// 是否开启线上上产环境调试
const debugProd = false;
// 是否开启打包生产环境
let prodBuild = false;
console.log(process.env.NODE_ENV);
console.log(process.env.API_ENV);
if (process.env.API_ENV === 'prod') {
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
let crmDomain = 'http://192.168.3.88:8000/login';
// crm 1.0本地地址
const devCrmDomain = 'http://localhost:8000/login';
// webscoket服务
let wsDomain = process.env.NODE_ENV === 'development' ? 'http://192.168.1.113:9094' : 'http://localhost:9094';
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
  if (process.env.API_ENV === 'dev') {
    return { apiUri: devApi, wsDomain, webDomain, crmDomain: devCrmDomain };
  } else {
    return { apiUri: api, wsDomain, webDomain, crmDomain };
  }
}

