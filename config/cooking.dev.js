var path = require('path');
var cooking = require('cooking');
var packageConfig = require('../package.json');

var isProd = process.env.NODE_ENV === 'production';

cooking.set({
    entry: {
        app: ['babel-polyfill', './test/index.js']
    },
    dist: './dist',
    template:[
        {
            title: packageConfig.description,
            filename: 'index.html',
            template: './test/index.tpl',
            // favicon:'./src/static/img/favicon.ico',
            // chunks: ['vendor', 'manifest', 'asd']
        }
    ],
    devServer: {
        port: 8001,
        publicPath: '/',
        proxy: {
            '/': {
                target: 'http://192.168.11.60',
            }
        }
    },
    clean: true,
    hash: true,
    sourceMap: true,
    minimize: true,
    chunk: false,
    postcss: [
    ],
    publicPath: '',
    assetsPath: 'static',
    urlLoaderLimit: 204800,
    extractCSS: false,
    externals: {},
    alias: {
        'vue': 'vue/dist/vue.min',
    },
    extends: ['vue2', 'less', 'autoprefixer']
});

module.exports = cooking.resolve();
