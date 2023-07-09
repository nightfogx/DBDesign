//引入mock模块

import Mock from 'mockjs';


Mock.mock('http://www.aaa.com/Login/login', 'get', () => {
    return {
        user_id: 123,
        password: 123456
    }
})
console.log('Mock configuration loaded');