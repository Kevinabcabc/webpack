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
    //1)会单独生成一个source map文件 出错会标识 报错的列和行
        //大和全 
    // devtool: 'source-map',//  源码映射 添加映射文件可以帮我们调试源代码
    //2）dev-too
    // devtool: 'eval-source-map', //不会产生单独的文件 但是可以显示行和列
    //3）不会产生lie 但是是一个单独的映射文件
    // devtool: 'cheap-module-source-map', //产生后可以保留起来用于调试
    //4）不会产生文件 集成在打包文件 产生列   但不提示哪里错了
    devtool: 'cheap-module-eval-source-map', 
    output: {
        filename: '[name].js',//代表home/other
        path: path.resolve(__dirname,'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
        }),
    ]
}