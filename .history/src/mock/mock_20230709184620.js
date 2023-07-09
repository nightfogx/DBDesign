//引入mock模块
const Mock =require('mockjs')

Mock.mock('http://106.14.193.8:8090/Login/login', 'get', () => {
    return {
        status: 200,
        message: '成功'
    }
})
