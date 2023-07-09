//引入mock模块
import Mock from 'mockjs';

Mock.mock('http://106.14.193.8:8090/Login/login', 'get', () => {
    return {
        status: 200,
        message: '添加新闻列表数据成功'
    }
})
