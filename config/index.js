
'use strict'
// Template version: 1.1.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/m2/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: process.env.PORT || 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    proxyTable: {
     /*
       '*': {
       target: 'http://www.dxzc.gov.cn/Live/newsListapi/',
       changeOrigin: true,
       filter: function (pathname, req) {
       return pathname.match('^/newslistapi') && req.method === 'GET'
       }
       },
       //http://www.dxzc.gov.cn/Search/s.aspx?c=2&f=1&wd=%u9ec4%u8273%u5a25&p=4

       
*/  '/loadmore': {
      target: 'http://www.dxzc.gov.cn',
      changeOrigin: true,
      pathRewrite: {
       '^/loadmore/(\\d+)': '/Category_1191/Index_$1.aspx'
      }
      },
      '/search': {
        target: 'http://www.dxzc.gov.cn',
        changeOrigin: true,
        pathRewrite: {
         '^/search/': '/Search/s.aspx'
        }
        },
        '/resNodelists': {
          target: 'http://www.dxzc.gov.cn',
          changeOrigin: true,
          pathRewrite: {
          //  '^/Nodelists/(\\d+)': '/Category_1193/Index_$1.aspx'
            '^/resNodelists/(\\d+)': '/Category_1193/Index_$1.aspx'
          }},
          '/depmentlist': {
            target: 'http://www.dxzc.gov.cn',
            changeOrigin: true,
            pathRewrite: {
            //  '^/Nodelists/(\\d+)': '/Category_1193/Index_$1.aspx'
              '^/depmentlist': '/Category_1211/Index.aspx'
            }
          },
          '/ReqListsBytitlesApi': {
            target: 'http://www.dxzc.gov.cn',
            changeOrigin: true,
            pathRewrite: {
            //  '^/Nodelists/(\\d+)': '/Category_1212/Index.aspx?nodeId=203'            
             '^/ReqListsBytitlesApi/(\\d+)': '/Category_1213/Index_$1.aspx'
            }
          },
          '/ReqNodesArrbyNodeid': {
            target: 'http://www.dxzc.gov.cn',
            changeOrigin: true,
            pathRewrite: {
            //  '^/Nodelists/(\\d+)': '/Category_1212/Index.aspx?nodeId=203'
            
             '^/ReqNodesArrbyNodeid': '/Category_1216/Index.aspx'
            }
          },
          '/ReqListsBysQueryApi': {
            target: 'http://www.dxzc.gov.cn',
            changeOrigin: true,
            pathRewrite: {
            //  '^/Nodelists/(\\d+)': '/Category_1212/Index.aspx?nodeId=203'
            
             '^/ReqListsBysQueryApi/(\\d+)': '/Category_1212/Index_$1.aspx'
            }
          },
          '/ResChildsNodeList': {
            target: 'http://www.dxzc.gov.cn',
            changeOrigin: true,
            pathRewrite: {
            //  '^/Nodelists/(\\d+)': '/Category_1212/Index.aspx?nodeId=203'            
            '^/ResChildsNodeList': '/Category_1218/Index.aspx'
            }
              },      
          '/detail': {
            target: 'http://www.dxzc.gov.cn',
            changeOrigin: true,
            pathRewrite: {
              '^/detail': '/Category_1189/Index.aspx'
            }
          },
          '/banns': {
            target: 'http://www.dxzc.gov.cn/Category_1188/Index.aspx',
            changeOrigin: true,
            pathRewrite: {
              '^/banns': ''
            }
          },
          '/list': {
            target: 'http://www.dxzc.gov.cn',
            changeOrigin: true,
            pathRewrite: {
              '^/list': '/Category_1110/Index.aspx'
            }
          },

         
           '/GetMGTV': {
            target: 'https://m.mgtv.com/b/320379/4353422.html?f=m_wx&69AC034-799B-4C26-A7B1-32D87D38BC40',
            changeOrigin: true,
            pathRewrite: {
              '^/GetMGTV': ''
            }
          },
          '/Getrednet': {
            target: 'https://moment.rednet.cn/rednetcms/news/20180416/1238618.html',
            changeOrigin: true,
            pathRewrite: {
              '^/Getrednet': ''
            }
          },

    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
