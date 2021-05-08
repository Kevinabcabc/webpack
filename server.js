let express = require('express');

let app = express();

let webpack =require('webpack')

let middle = require('webpack-dev-middleware')

let config = require('./webpack.base')

let compiler =  webpack(config)

app.use(middle(compiler))

app.get('/user/api',(req,res)=>{
    res.json({name:'kevin'})
})

app.listen(3001,(error)=>{
    if(error){
        console.log(error);
    }else{
        console.log('服务器开启成功');
    }
})