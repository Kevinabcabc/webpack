let {smart} = require('webpack-merge')
let base = require ('./webpack.base.js')

module.exports = smart(base,{
    mode:'production',//development  
    // optimization: {//开发环境压缩
    //     minimizer: {
    //     }
    // },
    // plugins:[
        
    // ]
})