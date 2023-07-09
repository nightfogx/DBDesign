//引入mock模块
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const Mock = new MockAdapter(axios);

Mock.mock('http://www.aaa.com/Login/login', 'get', () => {
    return {
        status: 200,
        message: '成功'
    }
})
