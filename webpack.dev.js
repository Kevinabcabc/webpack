let {smart} = require('webpack-merge')
let base = require ('./webpack.base.js')

module.exports = smart(base,{
    mode:'development',//development  
    // devServer: {//开发环境服务器

    // },
    // devtool: 'source-map' //开发环境加源码映射
})