// console.log('indexsdffdfd');

// class Log {
//     constructor(){
//         console.log('出错了dfdf');
//         console.log('出错了dfdf'); 
//     }
// }
// //sdfhjkdjfh
// let log = new Log()
// //sdfsdfsdfsf
import css from  'bootstrap'
import './style'
console.log(css);

//============================= ajax 四部曲
// let xhr = new XMLHttpRequest();

// // xhr.open('GET','http://localhost:3001/api/user',true)//方法  api  是否异步
// //写死会跨域   要先发到 dev-server  的服务 再转发给3001
// //需要佩代理 http-proxy
// xhr.open('GET','/user/api',true)//方法  api  是否异步
// xhr.onload = function() {
//     console.log(xhr.response);
// }

// xhr.send();

let url = ''
if(DEV==='dev'){
    url = 'h1'
}else{
    url = 'u2'
}

console.log(url);
console.log(FLAG);
console.log(ADD);


