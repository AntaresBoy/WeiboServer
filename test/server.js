/**
 * @description 测试http接口
 * @author AntaresLpq
 */

const request=require('supertest')
const server=require('../src/app').callback()
module.exports=request(server)