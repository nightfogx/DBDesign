//引入mock模块
const Mock =require('mockjs')

Mock.mock('Login/login', 'get', () => {
    return {
        status: 200,
        message: '成功'
    }
})
