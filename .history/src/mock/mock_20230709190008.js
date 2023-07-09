//引入mock模块

import Mock from 'mockjs';


Mock.mock('http://www.aaa.com/Login/login', 'get', () => {
    return {
        status: 200,
        message: '成功'
    }
})
console.log('Mock configuration loaded');