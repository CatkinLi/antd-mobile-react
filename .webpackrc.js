export default {
  env: {
    development: {
      extraBabelPlugins: [
        ['import',{  'libraryName' : 'antd-mobile', 'style': 'css' } ],
        ['@babel/plugin-proposal-decorators', { 'legacy': true }]
      ],
    },
  },
  define: {
    'process.env.NODE_ENV': process.env.NODE_ENV,
    'process.env.API_ENV': process.env.API_ENV,
  },
};
