let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {

    mode:'production',//development  
    entry: {
        home: './src/index.js',
    },
    module: {
        rules: [ //配置规则
            {
                test: /\.js$/, 
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets:['@babel/preset-env']
                    }
                }
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map', 
    output: {
        filename: '[name].js',//代表home/other
        path: path.resolve(__dirname,'dist')
    },
    watch: true,
    watchOptions: {
        poll: 10, //每毫秒的次数
        aggregateTimeout:500, //防抖 输入完成500毫秒后再打包 
        ignored: /node_modules/,//不需要监控文件
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
        }),
    ]
}