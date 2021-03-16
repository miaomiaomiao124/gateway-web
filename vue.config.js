'use strict'
const path = require('path')
const name = '湘潭电力' // 页面标题
const Timestamp = new Date().getTime();
const port = process.env.port || process.env.npm_config_port || 9528 // 端口
// 基础路径 注意发布之前要先修改这里
const publicPath = process.env.VUE_APP_PUBLIC_PATH || '/'
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: './', //例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/。
    outputDir: 'dist', //打包出来的文件夹命名
    assetsDir: 'static', //静态文件的文件夹命名
    indexPath: 'index.html', //生成出来index.html命名
    filenameHashing: true, //打包出来是否带hash值来解决缓存问题
    // pages可以用来配置多项目https://cli.vuejs.org/zh/config/#pages
    productionSourceMap: false,
    lintOnSave: false,
    devServer: {
        host: '0.0.0.0',
        publicPath, // 和 publicPath 保持一致
        disableHostCheck: process.env.NODE_ENV === 'development', // 关闭 host check，方便使用 ngrok 之类的内网转发工具
        port: port,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            // change xxx-api/login => mock/login
            // detail: https://cli.vuejs.org/config/#devserver-proxy
            "/api": {
                // target: `http://192.168.2.16:8088/`, // 开发接口
                target: `http://192.168.192.59:8088/`, // 开发接口
                // target: `http://192.168.1.23:6101/`, // 开发接口
                changeOrigin: true,
                pathRewrite: {
                    "^/api/\\w+/": ''
                }
            },
            "/offlinemap": {
                target: `http://192.168.2.16`, // 开发接口
                changeOrigin: true,
                pathRewrite: {
                    '^/offlinemap': '/' //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
                }
            },
            '/qq': {
                target: 'https://apis.map.qq.com', //腾讯地图接口
                changeOrigin: true,
                pathRewrite: {
                    '^/qq': '/' //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
                }
            },
            '/file': {
                target: 'http://localhost:6100/file', //文件地址
                changeOrigin: true,
                pathRewrite: {
                    '^/file': '/' //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
                }
            },
            '/getIp': {
                target: 'https://whois.pconline.com.cn', //腾讯地图接口
                changeOrigin: true,
                pathRewrite: {
                    '^/getIp': '/' //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
                }
            }
        },
        // proxy: "http://192.168.2.16:6100/"
    },
    css: {
        loaderOptions: {
            // 设置 scss 公用变量文件
            sass: {
                prependData: '@import \'~@/assets/style/public.scss\';'
            }
        }
    },
    configureWebpack: {
        name: name,
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
    chainWebpack: config => {
        /**
         * 删除懒加载模块的 prefetch preload，降低带宽压力
         * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
         * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#preload
         * 而且预渲染时生成的 prefetch 标签是 modern 版本的，低版本浏览器是不需要的
         */
        // config.entry.app = ['@babel/polyfill', './src/main.js'];
        config.module.rule('iview')
            .test(/\.js$/)
            .use('babel')
            .loader('babel-loader')
            .end()
        config.plugins
            .delete('prefetch')
            .delete('preload')
        // 解决 cli3 热更新失效 https://github.com/vuejs/vue-cli/issues/1559
        config.resolve
            .symlinks(true)
        // markdown
        config.module
            .rule('md')
            .test(/\.md$/)
            .use('text-loader')
            .loader('text-loader')
            .end()
        // svg
        const svgRule = config.module.rule('svg')
        svgRule.uses.clear()
        svgRule
            .include
            .add(resolve('src/assets/svg-icons/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'd2-[name]'
            })
            .end()
        // image exclude
        const imagesRule = config.module.rule('images')
        imagesRule
            .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
            .exclude
            .add(resolve('src/assets/svg-icons/icons'))
            .end()
        // 重新设置 alias
        config.resolve.alias
            .set('@api', resolve('src/api'))
        // 分析工具
        if (process.env.npm_config_report) {
            config
                .plugin('webpack-bundle-analyzer')
                .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
        }
    },
}