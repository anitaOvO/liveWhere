//引入mockjs
const Mock = require('mockjs')
    // 获取 mock.Random 对象
const Random = Mock.Random;
//使用mockjs模拟数据
import detail from '../public/city.json';
Mock.mock('/api/detail', (req, res) => { //当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据
    // let list = detail.data.detail;
    this.final = JSON.stringify(req.data);

    /* for (let i = 0; i < 5; i++) {
        let listObject = {
            title: Random.csentence(5, 10), //随机生成一段中文文本。
            company: Random.csentence(5, 10),
            attention_degree: Random.integer(100, 9999), //返回一个随机的整数。
            photo: Random.image('114x83', '#00405d', '#FFF', 'Mock.js')
        }
        list.push(listObject);
    } */
    return {
        data: detail
    }
})