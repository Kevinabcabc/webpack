let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let {CleanWebpackPlugin} = require('clean-webpack-plugin')
let CopyWebpackPlugin =require('copy-webpack-plugin')
let webpack  =require('webpack')
module.exports = {

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
            },
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    resolve: { //解析 引用模块  第三方包 common
        // modules: [path.resolve('node_modules'),path.resolve('dist')], //找的时候在当前目录查找
        modules: [path.resolve('node_modules')], //找的时候在当前目录查找
        // mainFields: ['style','main'],
        extensions: ['.js','.css','.json','.vue'], //扩展名
        mainFields: ['style','main'],//指定入口文件名字 默认index.js 优先style
        
        // alias: { //vue.runtime.js  别名
        //     bootstrap: 'bootstrap/dist/css/bootstrap.css'
        // }
    },
    devServer: {
        //2)单纯模拟数据
        //没有跨域问题
        // before(app){
        //     app.get('/user/api',(req,res)=>{
        //         res.json({name:'kevin'})
        //     })
        // },

        //3）有服务端  不想用  用代理处理 能不能在服务端中启动webpack 端口用服务端端口
            //详情见server.js


        // 1)
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:3001',//目标api
        //         pathRewrite: {'/api':''}  //解决后端不以api开头问题
        //     } // 配置 代理
        // }
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
        new webpack.DefinePlugin({ //配置环境变量
            DEV: JSON.stringify('dev'),
            FLAG: 'true' ,//会去掉单引号
            ADD: JSON.stringify('1+1')
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
        }),
        // new CleanWebpackPlugin(),
        // new CopyWebpackPlugin([
        //     {
        //         from:'./doc',
        //         to:'./doc'
        //     }
        // ]),
        // new webpack.BannerPlugin('make by Kevin')
    ]
}