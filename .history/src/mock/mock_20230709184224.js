//引入mock模块
import Mock from 'mockjs';

Mock.mock('/Login/login', 'get', () => {
    return {
        status: 200,
        message: '成功'
    }
})
