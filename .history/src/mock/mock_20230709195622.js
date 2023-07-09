//引入mock模块

import Mock from 'mockjs';

let result = {
    user_id: '',
    password:''
  }
Mock.mock('/http://www.aaa.com/Login/login', 'get', () => {
    result.data = {
        user_id: 123,
        password: 123456
    }
    return result;
})
console.log('Mock configuration loaded');
console.log(result);